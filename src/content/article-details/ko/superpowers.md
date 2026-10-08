---
articleId: "superpowers"
lang: "ko"
sourceRevision: 1
sources:
  [
    {
      "title": "Superpowers README",
      "url": "https://github.com/obra/superpowers",
      "claim": "Superpowers는 조합 가능한 개발 스킬을 묶고 에이전트별 플러그인·확장 설치를 설명합니다.",
      "checked": "2026-10-08",
    },
    {
      "title": "Superpowers test-driven development skill",
      "url": "https://github.com/obra/superpowers/blob/main/skills/test-driven-development/SKILL.md",
      "claim": "테스트 우선 절차는 최소 구현 전에 실패를 확인하고 이후 통과 동작을 확인합니다.",
      "checked": "2026-10-08",
    },
    {
      "title": "Superpowers brainstorming skill",
      "url": "https://github.com/obra/superpowers/blob/main/skills/brainstorming/SKILL.md",
      "claim": "설계 구체화는 받은 맥락을 재사용하고 구현 전에 선택한 경로의 설계 조건을 충족하도록 합니다.",
      "checked": "2026-10-08",
    },
  ]
---

## 선택·비교

여기서 우선하는 것은 반복 가능한 개발 절차입니다. 설계를 명확히 하고 작업을 계획하며 회귀 문제를 검증하고 결과를 검토합니다. Superpowers에는 이런 활동을 위한 스킬이 있습니다. 지속적인 요구 기록이 필요하면 Spec Kit이나 OpenSpec을 함께 검토하되 어떤 기록과 승인이 실행을 관리하는지 먼저 정합니다. 기존 프로젝트 지침과 일반 에이전트만으로도 충분할 수 있습니다. 선택 기준은 편집 판단이며 측정된 품질 순위가 아닙니다.

## 응용 사례

가상 레시피는 4인분에 밀가루 200 g을 사용합니다. 2인분에는 100 g이 필요하며 그림의 실패 결과 200 g이 오류를 드러냅니다. 의미 있는 테스트는 배율 동작을 확인하고 코드 수정 전 실패, 수정 후 통과를 관찰합니다. 검토에는 필요한 다른 합의된 재료량과 반올림 규칙도 포함합니다. 그림은 절차를 설명하며 테스트를 실행하거나 실제 모델 결과를 보여주지 않습니다.

## 구현 참고·주의점

사용하는 외부 에이전트의 최신 공식 설치 지침을 읽습니다. 프로젝트는 환경별 플러그인·확장 설치를 설명하며 현재 Codex CLI에는 플러그인 선택 흐름이 있습니다. AI가 그 화면을 조작할 수 없으면 정확한 사용자 단계를 안내하고 설정을 미완료로 남깁니다. 사용 전 설치된 스킬·훅·적용 범위·활성 버전을 확인합니다. 필요한 스킬을 불러오거나 호출하고 결과를 확인합니다. 설치만으로 활성화가 증명되지는 않습니다. 승인된 요구를 재사용하고 프로젝트의 테스트·위임 제한을 보존합니다. 하위 에이전트·worktree·병합·공개 지침을 추가 권한으로 해석하지 않습니다. 전체 절차는 작은 수정에 과할 수 있습니다.
