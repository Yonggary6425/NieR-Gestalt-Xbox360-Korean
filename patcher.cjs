'use strict';
// Application code only. No game data or translation payload is embedded here.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const zlib = require('node:zlib');
const readline = require('node:readline/promises');
const MAX_PATCH = 128 * 1024 * 1024;
function digest(file) {
  const fd = fs.openSync(file, 'r'), h = crypto.createHash('sha256'), b = Buffer.alloc(8 * 1024 * 1024);
  try { let n; while ((n = fs.readSync(fd, b, 0, b.length, null))) h.update(b.subarray(0, n)); }
  finally { fs.closeSync(fd); }
  return h.digest('hex');
}
function integer(n) { return Number.isSafeInteger(n) && n >= 0; }
function validate(p) {
  if (p?.format !== 'NGKP1' || !Array.isArray(p.ops)) throw Error('지원하지 않는 패치 형식입니다.');
  for (const s of [p.source, p.target]) {
    if (!s || !integer(s.size) || !/^[0-9a-f]{64}$/.test(s.sha256)) throw Error('잘못된 파일 명세입니다.');
  }
  let size = 0;
  for (const op of p.ops) {
    if (!Array.isArray(op)) throw Error('잘못된 연산입니다.');
    if (op[0] === 'C' && op.length === 3 && integer(op[1]) && integer(op[2]) && op[1] + op[2] <= p.source.size) size += op[2];
    else if (op[0] === 'Z' && op.length === 2 && integer(op[1])) size += op[1];
    else if (op[0] === 'A' && op.length === 2 && typeof op[1] === 'string' && /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(op[1])) size += Buffer.from(op[1], 'base64').length;
    else throw Error('잘못된 연산 또는 원본 범위입니다.');
    if (!integer(size) || size > p.target.size) throw Error('출력 크기 범위를 벗어났습니다.');
  }
  if (size !== p.target.size) throw Error('패치 출력 크기가 일치하지 않습니다.');
}
function load(file) {
  if (fs.statSync(file).size > MAX_PATCH) throw Error('패치 파일이 너무 큽니다.');
  const p = JSON.parse(zlib.gunzipSync(fs.readFileSync(file), { maxOutputLength: MAX_PATCH }).toString('utf8'));
  validate(p); return p;
}
function apply(patchFile, sourceFile, outputFile, log = console.log) {
  const p = load(patchFile), source = fs.realpathSync(sourceFile), output = path.resolve(outputFile);
  if (source.toLowerCase() === output.toLowerCase()) throw Error('원본을 덮어쓸 수 없습니다.');
  if (fs.existsSync(output)) throw Error('출력 파일이 이미 있습니다. 다른 이름을 선택하세요.');
  if (fs.statSync(source).size !== p.source.size) throw Error('원본 크기가 다릅니다. 지원하는 일본판의 수정되지 않은 ISO가 필요합니다.');
  log('1/3 원본 SHA-256 검사 중...');
  if (digest(source) !== p.source.sha256) throw Error('원본 해시가 다릅니다. 다른 판본/손상/수정된 ISO에는 적용하지 않습니다.');
  const temp = output + '.' + crypto.randomBytes(6).toString('hex') + '.partial';
  let src, dst;
  try {
    src = fs.openSync(source, 'r'); dst = fs.openSync(temp, 'wx');
    const b = Buffer.alloc(8 * 1024 * 1024), h = crypto.createHash('sha256'); let pos = 0;
    function write(buf, n) {
      let done = 0; while (done < n) done += fs.writeSync(dst, buf, done, n - done, pos + done);
      h.update(buf.subarray(0, n)); pos += n;
    }
    log('2/3 새 한글 ISO 작성 중...');
    for (const op of p.ops) {
      if (op[0] === 'A') { const data = Buffer.from(op[1], 'base64'); write(data, data.length); }
      else {
        let remain = op[0] === 'C' ? op[2] : op[1], at = op[1];
        if (op[0] === 'Z') b.fill(0);
        while (remain) {
          const n = Math.min(remain, b.length);
          if (op[0] === 'C' && fs.readSync(src, b, 0, n, at) !== n) throw Error('원본을 끝까지 읽을 수 없습니다.');
          write(b, n); at += n; remain -= n;
        }
      }
    }
    log('3/3 출력 SHA-256 검사 중...');
    if (h.digest('hex') !== p.target.sha256) throw Error('결과 해시 불일치. 패치가 손상되었거나 원본이 작업 중 변경되었습니다.');
    fs.fsyncSync(dst); fs.closeSync(dst); dst = undefined; fs.closeSync(src); src = undefined;
    // Exclusive creation also protects against a file appearing after the initial check.
    // A portable copy avoids requiring hard-link privileges; allow space for two outputs.
    fs.copyFileSync(temp, output, fs.constants.COPYFILE_EXCL); fs.unlinkSync(temp);
    log('완료: ' + output); return { output, sha256: p.target.sha256, size: p.target.size };
  } catch (e) {
    if (dst !== undefined) fs.closeSync(dst); if (src !== undefined) fs.closeSync(src);
    if (fs.existsSync(temp)) fs.unlinkSync(temp);
    throw e;
  }
}
async function main() {
  if (process.argv.includes('--help')) {
    console.log('node patcher.cjs --patch PATCH.ngkp.gz --source ORIGINAL.iso --output KOREAN.iso\n인수 없이 실행하면 경로를 질문합니다. 원본은 수정하지 않습니다.'); return;
  }
  const args = process.argv.slice(2), options = {};
  for (let i = 0; i < args.length; i += 2) {
    if (!['--patch', '--source', '--output'].includes(args[i]) || !args[i + 1]) throw Error('알 수 없는 인수입니다. --help를 확인하세요.');
    options[args[i].slice(2)] = args[i + 1];
  }
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const clean = s => s.trim().replace(/^"(.*)"$/, '$1');
  try {
    const patch = options.patch || path.join(__dirname, 'NieR-Gestalt-JP-KO-v0.1.0.ngkp.gz');
    const source = clean(options.source || await rl.question('원본 일본판 ISO 전체 경로: '));
    const output = clean(options.output || await rl.question('새 한글 ISO 전체 경로 (기존 파일 불가): '));
    if (!source || !output) throw Error('경로가 비어 있습니다.');
    apply(patch, source, output);
  } finally { rl.close(); }
}
module.exports = { apply, load, validate, digest };
if (require.main === module) main().catch(e => { console.error('오류: ' + e.message); process.exitCode = 1; });
