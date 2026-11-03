# NieR Gestalt (Xbox 360) 한글패치

Xbox 360 일본판 **NieR Gestalt (ニーア ゲシュタルト)** 비공식 한글패치입니다.

- 제작: 용가리 ([@Yonggary6425](https://github.com/Yonggary6425))
- 번역·패처 제작 보조: OpenAI Codex
- 버전: v0.1.0 (번역 초안 / Pre-release)

> 이 저장소에는 게임 ISO나 패치 데이터가 들어 있지 않습니다. 직접 준비한 일본판 원본 ISO가 있어야 하며,
> 배치파일 패처는 원본 ISO를 건드리지 않고 **별도의 한글 ISO를 새로 만듭니다.**

## 한글화 범위

| 항목 | 내용 |
|---|---|
| 대사·텍스트 | 추출 텍스트 14,757개 항목 번역 반영 |
| 추가 문구 | 레이아웃 등 추가 문구 215곳 |
| 폰트 | NanumGothic 기반 한글 등 추가 글리프 1,163개 (변환 글꼴 이름: NGK Bitmap) |
| 이미지 | 보고서 이미지 4장 |

손대지 않은 것: 음성 (한국어 더빙 아님)

> 번역 초안 단계입니다. 모든 루트·엔딩의 플레이 검수와 문맥 교정은 아직 끝나지 않았습니다.

## 적용 방법

1. 수정하지 않은 Xbox 360 **일본판 원본 ISO**를 준비합니다.
2. [Releases](../../releases)에서 `nier-gestalt-ko-iso-batch.zip`을 받아 **압축을 전부 풉니다.** (ZIP 안에서 바로 실행하지 마세요)
3. `Apply-Korean-ISO.bat`을 더블클릭합니다.
   - 원본 ISO를 bat 파일 위에 끌어다 놓아도 됩니다.
4. 파일 선택 창이 뜨면 원본 ISO를 고릅니다.
5. 원본 확인(크기·SHA-256) → 한글 ISO 생성 → 결과 SHA-256 재검사 순서로 자동 진행됩니다.
   - 원본과 **같은 폴더**에 `NieR-Gestalt-KO.iso`가 만들어집니다.
   - 그 드라이브에 약 **7 GB 이상**의 여유 공간이 필요합니다. FAT32 드라이브는 사용할 수 없습니다.
6. "완료" 메시지가 나오면 **Xenia**에서 `NieR-Gestalt-KO.iso`를 실행합니다.

- 추가 설치는 필요 없습니다. Windows 기본 PowerShell 5.1과 .NET Framework를 사용합니다. (EXE·Node.js·Python 불필요)
- `Apply-Korean-ISO.bat`, `Apply-IsoPatch.ps1`, `NieR-Gestalt-JP-KO-v0.1.0.ngkp.gz`는 반드시 같은 폴더에 두세요.
- 원본 ISO는 읽기만 하고 변경하지 않습니다. 같은 이름의 결과 파일이 이미 있으면 덮어쓰지 않고 중단합니다.
- 시스템 실행 정책(Execution Policy)을 바꾸지 않습니다.
- 원래 게임을 하려면 원본 ISO를 그대로 실행하면 됩니다.

### Xenia 설정 (중요)

- **콘솔 언어를 Japan / Japanese로 설정**하세요. (일본판 기준으로 제작·확인했습니다)
- 초반 전투 화면이 하얗게 보이면 Xenia 설정 파일에서 `readback_resolve = "fast"`로 바꿔 보세요. 제작 환경(Xenia Canary)에서는 이 설정으로 해결됐지만, Xenia 버전에 따라 설정 지원과 동작이 다를 수 있습니다.
- Xbox 360 실기에서는 동작을 확인하지 않았습니다.

### 지원 판본

일본판의 아래 원본 ISO 하나만 지원합니다. 크기나 해시가 다르면 패처가 원본을 확인한 뒤 중단합니다.

| 구분 | 값 |
|---|---|
| 게임 / 플랫폼 | NieR Gestalt / Xbox 360 |
| 지역 | 일본판 |
| 입력 형식 | 수정되지 않은 ISO |
| 원본 크기 | 7,838,695,424 bytes |
| 결과 크기 | 6,387,351,552 bytes |
| 패처 실행 환경 | Windows 10/11, Windows PowerShell 5.1 + .NET Framework (기본 포함) |

원본 SHA-256:

```text
4f7c83a2ccf66e954d19b3fae4f27e657503bd6825a68f2c5fab1b43a5101a24
```

결과 SHA-256:

```text
91c5bcd72b2105482e7d112687753afa0cdfef48320798830fa9771b7610154f
```

미국판·유럽판, PS3판 NieR Replicant, 리마스터판, GOD 패키지, 추출 폴더, 이미 수정한 ISO는 지원하지 않습니다.
상세 값은 [supported-build.json](supported-build.json)을 참고하세요.

> PS3 일본판 NieR Replicant 한글패치는 [NieR-Replicant-PS3-Korean](https://github.com/Yonggary6425/NieR-Replicant-PS3-Korean)에 있습니다.

## 알려진 문제 / 제보

- 번역 초안이라 오역, 문맥·용어 불일치, 글자 넘침, 미번역이 남아 있을 수 있습니다.
- 새 글꼴(NGK Bitmap)을 적용한 배포판의 전체 플레이 검수는 아직 하지 않았습니다.
- Xbox 360 실기 동작은 확인하지 않았습니다.
- 생성 도중 창을 강제로 닫으면 결과 폴더에 `.partial` 임시 파일이 남을 수 있습니다. 해당 파일만 지우면 되며, 원본 ISO는 그대로 보존됩니다.

[Issues](../../issues)에 아래 내용을 적어 주세요.
- 패치 버전, Xenia 종류와 버전
- 장면 또는 퀘스트, 재현 순서
- 실제 표시된 내용과 기대한 내용
- 필요하면 화면 캡처

게임 ISO, 추출한 게임 파일, 전체 대본은 첨부하지 마세요.

## 저장소 구성

```
batch/Apply-Korean-ISO.bat       배치파일 패처 실행기 (기본 적용 방식)
batch/Apply-IsoPatch.ps1         배치파일 패처 본체 (PowerShell)
windows/IsoPatcher.cs            EXE 패처 소스 (대체 방식)
windows/build.ps1                EXE 빌드 스크립트
windows/SafetyTests.cs           EXE 엔진 안전성 테스트
patcher.cjs                      Node.js 대체 패처
Apply-Korean-Patch.cmd           Node.js 패처 실행 도우미
tests/patcher.test.cjs           Node.js 패처 테스트
supported-build.json             지원 원본·결과 크기와 해시
batch-verification.json          배치파일 패처 실제 ISO 생성 검증 결과
exe-verification.json            EXE 패처 실제 ISO 생성 검증 결과
verification.json / TESTING.md   검증 기록과 범위
RELEASE_NOTES.md                 버전별 변경 사항
GITHUB_UPLOAD.md                 저장소·Release 업로드 순서
LICENSE-CODE.txt                 코드 라이선스(MIT) 적용 범위
FONT-NOTICE.txt                  변환 글꼴 원저작권·이름 고지
licenses/OFL-NanumGothic.txt     글꼴 라이선스 전문
RIGHTS.md                        게임·번역·글꼴 권리 구분
SHA256SUMS.txt                   저장소 파일 해시
```

패치 데이터(`.ngkp.gz`)는 저장소에 넣지 않고, Releases의 `nier-gestalt-ko-iso-batch.zip`으로만 배포합니다.

## 패치 원리

1. 같은 폴더의 차이 데이터(`.ngkp.gz`)의 SHA-256을 확인합니다.
2. 사용자 원본 ISO의 크기와 SHA-256을 검사합니다.
3. 원본 구간 복사(COPY), 0 채우기(ZERO), 바뀐 바이트 추가(ADD) 명령을 차례로 실행해 새 임시 ISO(`.partial`)를 만듭니다.
4. 만든 결과를 다시 읽어 SHA-256을 검사합니다.
5. 검증을 통과한 결과만 최종 이름(`NieR-Gestalt-KO.iso`)으로 옮깁니다.

전체 게임 파일은 패처에 들어 있지 않으며, 원본 다운로드·외부 프로그램 실행·DRM 우회 기능은 없습니다.
EXE 패처와 Node.js 대체 패처도 같은 차이 데이터로 같은 결과(동일 SHA-256)를 만듭니다.

## 개발 및 검사

배치파일 패처는 명령줄에서 직접 실행할 수도 있습니다. (Windows PowerShell 5.1)

```powershell
.\batch\Apply-IsoPatch.ps1 -Source 'D:\ISO\NieR Gestalt (Japan).iso' -Output 'D:\ISO\NieR-Gestalt-KO.iso'
```

이 경우 `NieR-Gestalt-JP-KO-v0.1.0.ngkp.gz`가 스크립트와 같은 폴더에 있어야 합니다.

EXE 대체 패처는 로컬에 따로 준비한 패치 데이터로 빌드합니다.

```powershell
.\windows\build.ps1 -Patch 'C:\private\NieR-Gestalt-JP-KO-v0.1.0.ngkp.gz' -OutputExe 'C:\private\NieR-Gestalt-JP-KO-ISO-Patcher.exe'
```

Node.js 대체 패처 테스트:

```powershell
node --test tests/patcher.test.cjs
```

Node.js 대체 패처는 별도의 Node.js와 패치 데이터가 필요하고 약 14 GB의 여유 공간이 필요합니다(배치파일·EXE 방식은 약 7 GB).
검증 기록은 [TESTING.md](TESTING.md), [batch-verification.json](batch-verification.json), [exe-verification.json](exe-verification.json)을 참고하세요.

## 라이선스

- 패처·도구 코드: MIT License ([LICENSE-CODE.txt](LICENSE-CODE.txt)의 적용 범위 참고)
- 변환 글꼴 NGK Bitmap: NanumGothic 기반, [SIL OFL 1.1](licenses/OFL-NanumGothic.txt). 기존 게임 글리프에는 이 라이선스가 적용되지 않습니다.
- 원작 게임·대사·이미지·상표의 권리는 각 권리자(SQUARE ENIX / cavia)에게 있습니다. 번역·수정 데이터에는 코드의 MIT 라이선스가 적용되지 않습니다.
- 공식 프로젝트가 아니며, 원작 권리자의 승인이나 후원을 받지 않았습니다.
- 정품을 소유한 분만 사용해 주세요.

배포 범위에 대한 자세한 설명은 [RIGHTS.md](RIGHTS.md)를 참고하세요.
