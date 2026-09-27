---
articleId: subversion
lang: ko
sourceRevision: 1
sources:
  - title: Apache Subversion
    url: "https://subversion.apache.org/"
    claim: Subversion은 중앙 집중형 버전 관리 시스템입니다.
    checked: "2026-09-27"
  - title: "Apache Subversion: Quick Start"
    url: "https://subversion.apache.org/quick-start"
    claim: "작업 사본, update, commit, 충돌과 선택적 잠금을 설명합니다."
    checked: "2026-09-27"
---

## 선택·비교

이력은 중앙 저장소에 있으며 작업 사본은 전체 이력 복제가 아닙니다. 로컬 편집과 일부 비교는 오프라인에서도 가능하지만 저장소 리비전 기록에는 접근이 필요합니다. 독립적인 로컬 커밋이 중요하면 Git·Mercurial을 비교합니다. 이 예시의 유지 이유는 기존 SVN 스크립트와 권한 체계입니다.

## 응용 사례

편집자는 장비 매뉴얼을 update하고 신청 안내를 고쳐 커밋합니다. 두 번째 편집자는 작업 사본을 update해야 새 리비전을 봅니다. 충돌 시 동료 문서를 조용히 덮지 말고 양쪽 변경을 검토합니다. SVN도 브랜치와 선택적 파일 잠금을 지원하므로 중앙 집중형이라는 이유로 모든 파일이 잠기지는 않습니다.

## 구현 참고·주의점

작업 사본만이 아닌 저장소를 백업하고 복구를 시험합니다. 서버 접근과 기존 클라이언트·훅 호환성을 확인합니다. 텍스트 병합과 바이너리 파일 조율을 비교하며 자산 작업 흐름이 뒷받침되면 P4도 고려합니다. 다른 그룹의 Git 호스팅을 SVN 서버 대신 바로 쓸 수는 없습니다.
