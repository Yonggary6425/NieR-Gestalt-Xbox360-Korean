# NieR Gestalt (Xbox 360) 한글패치 v0.1.0 — 번역 초안

Xbox 360 일본판 **NieR Gestalt (ニーア ゲシュタルト)** 비공식 한글패치의 첫 공개 버전입니다.
번역 초안(Pre-release)이며, 모든 루트·엔딩의 플레이 검수는 아직 끝나지 않았습니다.

## 다운로드
- `nier-gestalt-ko-iso-batch.zip`: 아래 Assets에서 받으세요
  - Source code (zip)는 패처 소스이며, 패치 데이터가 없어 이것만으로는 적용되지 않습니다.

## 한글화 범위
- **대사·텍스트**: 추출 텍스트 14,757개 항목 번역 반영
- **추가 문구**: 레이아웃 등 215곳
- **폰트**: NanumGothic 기반 한글 등 추가 글리프 1,163개 (NGK Bitmap)
- **이미지**: 보고서 이미지 4장

음성은 원본 그대로입니다(한국어 더빙 아님).

## 적용 방법
1. 수정하지 않은 Xbox 360 **일본판 원본 ISO**를 준비합니다.
2. zip의 **압축을 전부 풉니다.** (ZIP 안에서 바로 실행하지 마세요)
3. `Apply-Korean-ISO.bat`을 더블클릭하고, 파일 선택 창에서 원본 ISO를 고릅니다.
   - 원본 ISO를 bat 파일 위에 끌어다 놓아도 됩니다.
4. 원본 확인 → 한글 ISO 생성 → 결과 검증이 끝날 때까지 기다립니다.
   - 원본과 같은 폴더에 `NieR-Gestalt-KO.iso`가 만들어집니다. (약 7 GB 이상 여유 공간 필요, FAT32 불가)
5. **Xenia**에서 `NieR-Gestalt-KO.iso`를 실행합니다.

원본 ISO는 변경되지 않습니다. 원래 게임은 원본 ISO로 그대로 실행하면 됩니다.

## 참고 사항
- **추가 설치 불필요**: Windows 기본 PowerShell 5.1과 .NET Framework로 동작합니다. EXE·Node.js·Python이 필요 없고, 시스템 실행 정책도 바꾸지 않습니다.
- **파일 위치**: `Apply-Korean-ISO.bat`, `Apply-IsoPatch.ps1`, `NieR-Gestalt-JP-KO-v0.1.0.ngkp.gz`를 같은 폴더에 두세요.
- **대상 판본**: 일본판 원본 ISO 하나만 지원합니다 (7,838,695,424 bytes, SHA-256 `4f7c83a2…5101a24`).
  미국판·유럽판, PS3판, 리마스터판, GOD 패키지, 추출 폴더, 이미 수정한 ISO는 패처가 확인 후 중단합니다.
- **Xenia 콘솔 언어**: 반드시 **Japan / Japanese**로 설정하세요.
- **Xenia 전투 화면 흰색 현상**: 초반 전투가 하얗게 보이면 설정 파일에서 `readback_resolve = "fast"`로 바꿔 보세요. 제작 환경(Xenia Canary)에서는 이 설정으로 해결됐지만, 버전에 따라 다를 수 있습니다.
- **Xbox 360 실기**: 동작을 확인하지 않았습니다.
- **강제 종료 시**: 생성 중 창을 닫으면 `.partial` 임시 파일이 남을 수 있습니다. 해당 파일만 지우면 되며, 원본 ISO는 보존됩니다.

## 검증 범위
- 지원 일본판 원본 ISO로 배치파일 패처(Windows PowerShell 5.1)를 실행해 결과 ISO를 만들고, 기대 SHA-256(`91c5bcd7…7610154f`)과 일치하는 것을 확인했습니다.
- 지원하지 않는 ISO를 넣으면 중단되는 것을 확인했습니다.
- 전체 게임 플레이와 Xbox 360 실기 검증은 하지 않았습니다.

## 실행 환경
- Windows 10/11 (Windows PowerShell 5.1, .NET Framework 기본 포함)

## 제보
오역, 글자 넘침, 미번역은 [Issues](../../issues)에 패치 버전, Xenia 버전, 장면과 함께 알려 주세요.
게임 ISO나 추출 파일은 첨부하지 마세요.

## 크레딧
- 제작: 용가리 ([@Yonggary6425](https://github.com/Yonggary6425))
- 번역·패처 제작 보조: OpenAI Codex
- 글꼴: NanumGothic 기반 NGK Bitmap (SIL OFL 1.1)

NieR Gestalt의 저작권은 SQUARE ENIX / cavia에 있습니다. 이 패치는 비공식 팬 번역이며, 정품을 소유한 분만 사용해 주세요.
배포 범위는 RIGHTS.md를 참고하세요.
