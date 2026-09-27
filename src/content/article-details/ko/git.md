---
articleId: git
lang: ko
sourceRevision: 1
sources:
  - title: "Pro Git: About Version Control"
    url: "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control"
    claim: 로컬·분산 이력 모델을 설명합니다.
    checked: "2026-09-27"
  - title: "Pro Git: Working with Remotes"
    url: "https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes"
    claim: fetch와 push는 저장소 데이터를 교환하며 push에는 권한과 호환되는 이력이 필요합니다.
    checked: "2026-09-27"
---

## 선택·비교

이력 위치, 오프라인 작업, 협업, 파일 특성, 기존 도구를 비교합니다. Git은 로컬 저장소에 커밋과 브랜치를 만듭니다. Mercurial도 분산 작업을 지원하므로 기존 hg 흐름을 유지하는 편이 이전보다 나을 수 있습니다. SVN은 중앙에 커밋하며 P4는 바이너리 자산의 배타적 편집을 이미 관리하는 팀에 맞을 수 있습니다.

## 응용 사례

여행 사이트는 별도 브랜치에서 박물관 방문을 시도합니다. 로컬 커밋은 편집기를 닫아도 남지만 push 성공 전에는 공유 저장소에 없습니다. 동료는 fetch한 뒤 검토하거나 통합합니다. Git 호스팅은 별도 선택입니다. 이 카탈로그의 호스팅은 Git과 조합하며 모든 버전 관리 시스템의 서버로 바꿔 쓸 수 있는 것은 아닙니다.

## 구현 참고·주의점

커밋 전 git status와 대상 브랜치를 살핍니다. push 전 원격과 권한을 확인하고 갈라진 이력은 동료 작업을 강제로 덮는 대신 조정합니다. Git 복제만으로 호스팅의 이슈·검토·설정이 모두 보존되지는 않습니다. 호스팅 이전 시 별도로 내보내기를 시험합니다.
