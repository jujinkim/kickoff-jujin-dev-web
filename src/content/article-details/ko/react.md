---
articleId: react
lang: ko
sourceRevision: 7
sources:
  - title: "React: State as a Snapshot"
    url: "https://react.dev/learn/state-as-a-snapshot"
    claim: 상태 설정이 렌더링을 요청하며 각 렌더링은 상태의 스냅샷을 본다고 설명합니다.
    checked: "2026-09-26"
  - title: "React: Sharing State Between Components"
    url: "https://react.dev/learn/sharing-state-between-components"
    claim: 연동되는 상태를 공통 소유자로 옮기고 데이터·이벤트 함수를 자식에게 전달하는 방법입니다.
    checked: "2026-09-26"
---

## 선택·비교

JavaScript 컴포넌트로 UI를 재사용하고 상태 소유권을 명확히 하려는 팀에 어울립니다. 템플릿 중심 Vue나 컴파일러 중심 Svelte가 팀의 선호와 기존 코드에 더 맞을 수도 있습니다. 대부분 정적인 페이지라면 작은 조작 영역만 필요할 수 있습니다. 프레임워크를 고른다고 저장소·인증·배포가 결정되지는 않습니다.

## 응용 사례

집안 계획에는 장보기와 식단 카드가 있습니다. 하나를 저장하면 다른 카드는 유지하며 해당 문구와 전체 합계가 바뀝니다. 실제 React에서는 가장 가까운 공통 부모에 선택 ID를 두고 값과 처리 함수를 전달할 수 있습니다. 이 예제는 상태 흐름을 설명하는 브라우저 모형이며 React 번들을 실행하지 않습니다. 새로고침하면 의도적으로 지웁니다.

## 구현 참고·주의점

상태 설정 함수로 렌더링을 요청합니다. 이전 값에서 다음 값을 만들 때는 `setSaved(previous => previous.includes(id) ? previous : [...previous, id])` 같은 갱신 함수를 씁니다. 합계를 별도로 저장해 어긋나게 하지 말고 같은 배열에서 계산하세요. 렌더링에 부수 효과를 넣지 않습니다. 여러 기기에서 저장하려면 대기·실패·재시도를 포함한 별도 영속 저장 계약이 필요합니다.
