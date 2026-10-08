---
articleId: "spec-kit"
lang: "ko"
sourceRevision: 1
sources:
  [
    {
      "title": "Spec Kit SDD quickstart",
      "url": "https://github.github.io/spec-kit/quickstart.html",
      "claim": "명세·계획·작업·구현·구현 대조 확인이 SDD 흐름이며 추가 품질 점검을 선택할 수 있습니다.",
      "checked": "2026-10-08",
    },
    {
      "title": "Spec Kit installation",
      "url": "https://github.github.io/spec-kit/installation.html",
      "claim": "설치·프로젝트 초기화에는 실행 환경·연동 조건이 있으며 에이전트 호출과 별개입니다.",
      "checked": "2026-10-08",
    },
    {
      "title": "Spec Kit integrations",
      "url": "https://github.github.io/spec-kit/reference/integrations.html",
      "claim": "호출 문법과 설치 위치는 선택한 에이전트 연동에 따라 다릅니다.",
      "checked": "2026-10-08",
    },
    {
      "title": "Spec Kit existing projects",
      "url": "https://github.github.io/spec-kit/guides/existing-projects.html",
      "claim": "기존 프로젝트 초기화는 충돌하는 관리 경로를 바꿀 수 있어 검토 가능한 기준 상태에서 시작합니다.",
      "checked": "2026-10-08",
    },
    {
      "title": "Spec Kit README",
      "url": "https://github.com/github/spec-kit",
      "claim": "SDD·오류 수정·아이디어 평가는 별도 시작점이며 뒤의 둘은 선택 확장입니다.",
      "checked": "2026-10-08",
    },
  ]
---

## 선택·비교

이 사례는 예매·알림 작업에 영향을 주는 공동 규칙을 우선합니다. Spec Kit은 요구를 계획·작업·구현·명세 대조 확인까지 연결합니다. 기존 방식이 충분하면 추가 스킬 없이 진행할 수 있습니다. Superpowers는 반복 가능한 개발 스킬에, OpenSpec은 현재 요구와 변경 차이에 초점을 둡니다. 도구를 조합할 수도 있지만 계획·작업 목록·요구마다 기준이 되는 기록 하나를 정합니다. 패키지는 AI의 지침 준수를 보장하지 않습니다.

## 응용 사례

예시 규칙은 취소 후 좌석을 공개하기 전에 다음 자격 있는 대기자에게 알리는 것입니다. 자격과 응답 제한 시간은 지어내지 않고 결정·기록합니다. 명세·기술 계획·작업을 검토하고 점검을 합의한 규칙에 연결합니다. 구현 대조 확인은 코드와 기록을 비교하며 남은 작업을 추가할 수 있습니다. 파일이 적은 접근 권한 변경에도 이런 절차가 필요할 수 있습니다.

## 구현 참고·주의점

외부 에이전트에서 현재 실행 환경, 설치된 Spec Kit, 프로젝트 파일, 공식 설치 지침을 확인합니다. 해당 에이전트가 지원하는 연동을 고르고 기존 설치는 재사용합니다. 설치 권한 안에서 검토한 버전을 설치하고 대상 프로젝트 범위를 초기화한 뒤 생성 파일·호출 지원을 확인합니다. 터미널 설정과 에이전트 스킬 호출은 별개입니다. Codex에는 `$speckit-specify` 같은 이름을 사용하며 설치된 형태를 확인합니다. 기존 프로젝트 초기화는 충돌하는 관리 파일을 바꿀 수 있으므로 현재 작업을 보존하고 차이를 검토합니다. 구현은 승인 범위 안에서 시작합니다. 명세·계획·작업을 kickoff의 기록으로 재사용하고 기획을 중복 관리하지 않습니다.
