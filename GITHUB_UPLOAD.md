# GitHub 업로드 방법 — NieR Gestalt (Xbox 360)

2026-11-04 작성. 실제 GitHub 업로드는 수행하지 않았습니다.

## 참고한 구조

참고: https://github.com/Yonggary6425/NieR-Replicant-PS3-Korean

참고 저장소 README의 소개 → 한글화 범위 → 적용 방법 → 알려진 문제 → 저장소 구성 → 패치 원리 → 라이선스 흐름을 따랐습니다. 확인 당시 실제 루트 파일은 .gitattributes, .gitignore, LICENSE, README.md 네 개였습니다. README에 적힌 도구 경로와 실제 공개 파일 목록은 구분해야 합니다.

이번 자료는 실제 제공되는 Windows EXE 소스와 검증 자료를 함께 올리는 구성입니다. PS3의 BLJM60223, STABLE.SDAT, RPCS3, 트로피 안내, 원본 덮어쓰기·복구 방식은 Xbox 360 안내에 옮기지 않았습니다. PS3판 v1.0과 달리 현재 Gestalt는 v0.1.0 번역 초안입니다.

## 1. 업로드 자료 준비

nier-gestalt-ko-github.zip을 압축 해제합니다. 안쪽 nier-gestalt-ko-github 폴더를 열어 README.md와 windows 폴더가 함께 있는지 확인합니다.

이 폴더 안의 내용만 저장소에 올립니다. outputs 전체나 완성 ISO를 올리지 않습니다. 실행용 nier-gestalt-ko-iso-exe.zip은 소스 ZIP과 별개입니다.

## 2. 새 저장소 만들기

https://github.com/new 에 접속합니다.

- Owner: 본인 계정 (예: Yonggary6425)
- Repository name: NieR-Gestalt-Xbox360-Korean
- Description: Xbox 360 일본판 NieR Gestalt 비공식 한글패치 프로젝트 — ISO용 Windows 패처 소스 및 Xenia 적용 안내.
- Visibility: 먼저 Private로 만들어 자료를 확인한 뒤 공개 여부를 결정할 수 있습니다.
- README, .gitignore, License 자동 생성: 제공 파일을 사용할 것이므로 선택하지 않습니다.

Create repository를 누릅니다. 위 이름으로 만들면 주소는 다음과 같습니다.
https://github.com/Yonggary6425/NieR-Gestalt-Xbox360-Korean

## 3. 코드와 문서 업로드

1. 빈 저장소의 uploading an existing file을 누릅니다. 이미 파일이 있으면 Add file → Upload files를 선택합니다.
2. 압축 해제한 폴더 자체가 아니라 그 안의 파일과 하위 폴더를 모두 끌어놓습니다. README.md가 저장소 최상단에 있어야 합니다.
3. windows, tests, licenses와 .gitignore가 포함되는지 확인합니다. Windows 탐색기에서 숨긴 항목 표시가 필요할 수 있습니다.
4. 목록에 ISO, XEX, CPK, .ngkp.gz, EXE, 번역 카탈로그가 없는지 확인합니다. 웹 업로드에서는 .gitignore가 자동으로 걸러 주지 않습니다.
5. 커밋 메시지: Add Xbox 360 Gestalt Korean patcher and documentation
6. Commit changes를 누릅니다. 화면에서 새 브랜치/Propose changes 방식을 선택했다면 Pull request를 만든 뒤 Merge하여 main에 반영합니다.
7. 저장소 첫 화면에 한국어 README가 바로 표시되는지 확인합니다. README가 폴더 안에 묻혀 있으면 최상단 구조를 다시 확인합니다.

## 4. 소개와 링크 확인

오른쪽 About의 톱니바퀴에서 Description을 위 설명으로 설정할 수 있습니다.
권장 Topics: nier, nier-gestalt, xbox360, xenia, korean, translation, patcher

README에 다음 사항이 보이는지 확인합니다.
- Xbox 360 일본판 전용이며 PS3 Replicant와 별개
- 원본 ISO 선택 → 별도 한글 ISO 생성
- EXE는 Node.js 불필요, 약 7 GB 여유 공간
- Xenia 콘솔 언어 Japan / Japanese
- v0.1.0 번역 초안, 전체 루트 검수 미완료

Issues 링크가 작동하지 않으면 Settings → General → Features에서 Issues 사용 여부를 확인합니다.

## 5. 실행용 파일은 Release에 배치

코드 저장소와 실행용 파일을 구분합니다.

| 위치 | 올릴 내용 |
|---|---|
| 저장소 main | 소스 ZIP을 해제한 코드·문서·테스트 |
| Release 첨부 | 배포 권한 확인 후 실행용 nier-gestalt-ko-iso-exe.zip 및 해당 SHA256SUMS.txt |
| 업로드 제외 | 원본/한글 ISO, 게임 추출 파일, 원문 대본, 에뮬레이터 |

EXE에는 번역·수정 차이 데이터가 내장되어 있습니다. 게임 권리자의 공개 배포 허락이 확인되지 않은 현재 상태에서는 코드 업로드와 실제 패치 공개를 별도로 판단하세요. 자세한 범위는 RIGHTS.md에 기록했습니다. 비공개 저장소 자체가 배포 권한을 부여하지는 않습니다.

## 6. Release 작성 순서

공개 배포 범위를 확인하고 실행용 파일을 제공하기로 정한 경우:

1. 저장소 오른쪽 Releases → Draft a new release.
2. Choose a tag → v0.1.0 입력 → 새 태그 생성, Target은 main.
3. Release title: NieR Gestalt (Xbox 360 Japan) 한글패치 v0.1.0 — 번역 초안
4. RELEASE_NOTES.md 내용을 설명란에 붙여넣습니다.
5. nier-gestalt-ko-iso-exe.zip을 첨부합니다. ZIP 안의 SHA256SUMS.txt는 내부 파일 검사용입니다. ZIP 자체 해시를 별도로 제공한다면 파일명을 구분합니다.
6. This is a pre-release를 선택합니다.
7. Save draft로 저장하고 파일과 내용을 확인합니다.
8. 게시할 준비가 되면 Publish release를 누릅니다.

Pre-release는 /releases/latest에서 원하는 버전이 나타나지 않을 수 있으므로 README는 /releases 링크를 사용합니다. GitHub가 자동으로 만드는 Source code (zip)은 실행용 패처 ZIP이 아닙니다.

## 7. 공개 후 방문자 입장에서 확인

- README의 적용 순서와 실제 EXE 버튼 이름이 같은지 확인합니다.
- Release의 Assets에서 실행용 ZIP이 분명히 보이는지 확인합니다.
- 라이선스와 글꼴 원저작권 표시가 ZIP에 들어 있는지 확인합니다.
- 문서가 검증한 범위 이상으로 완전 한글화·실기 호환을 주장하지 않는지 확인합니다.
- 새 패치로 교체할 때는 버전과 해시, 변경 내역을 함께 갱신합니다.

## 공식 GitHub 참고 문서

- 저장소 생성: https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository
- 파일 업로드: https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
- Release 작성: https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository
