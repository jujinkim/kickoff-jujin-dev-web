---
articleId: two-columns
lang: ko
sourceRevision: 7
sources:
  - title: "W3C Design System: Sidebar"
    url: "https://design-system.w3.org/layouts/sidebar.html"
    claim: 좁은 보조 패널과 가용 폭에 따른 세로 배치의 패턴 예제입니다. 전체 카탈로그의 공식 분류는 아닙니다.
    checked: "2026-09-26"
  - title: CSS Grid Layout Level 1
    url: "https://www.w3.org/TR/css-grid-1/"
    claim: 트랙과 독립된 그리드 항목의 배치를 정의합니다.
    checked: "2026-09-26"
  - title: CSS Multi-column Layout Level 1
    url: "https://www.w3.org/TR/css-multicol-1/"
    claim: 본문을 나눠 이어 쓰는 흐름과 독립된 배치 영역의 차이를 설명합니다.
    checked: "2026-09-26"
  - title: "WCAG 2.2: Reflow"
    url: "https://www.w3.org/WAI/WCAG22/Understanding/reflow.html"
    claim: 정보와 기능을 잃지 않는 좁은 화면 검증의 근거입니다. 사이드바의 정의는 아닙니다.
    checked: "2026-09-26"
---

## 선택·비교

필터와 결과, 장 탐색과 문서, 메타데이터와 편집기처럼 한 영역이 다른 영역을 도울 때 사이드바가 유용합니다. 두 영역의 폭이 같을 필요는 없습니다. 순서대로 읽는 작업은 단일 열, 여러 작업 영역을 계속 살펴야 하면 다중 영역이 어울립니다. 주 영역 안에는 리스트나 그리드를 둘 수 있으므로 함께 선택할 수 있습니다.

## 응용 사례

요리법 목록에서는 결과를 보면서 재료와 시간을 바꿉니다. 토마토와 20분은 한 요리법, 10분은 결과 없음과 복구 안내를 보여줍니다. 좁은 화면에서도 같은 필터가 요리법 앞에 옵니다. 문서 사이트에도 이 구조를 적용할 수 있지만 요리법 필터 대신 문서 탐색 링크가 필요합니다.

## 구현 참고·주의점

Grid의 `grid-template-columns: minmax(150px, .7fr) minmax(0, 2fr)`와 콘텐츠 폭 기준 분기점을 쓸 수 있습니다. Flexbox로 가용 폭에 따라 두 영역을 감싸도 됩니다. 세로로 쌓였을 때 DOM 순서가 의미를 유지해야 합니다. 사이드바를 반드시 고정할 필요는 없습니다. sticky를 추가하기 전에 확대·긴 라벨·내용 높이를 확인하세요. CSS `column-count`는 한 본문을 여러 단으로 흐르게 하며 독립된 페이지 영역을 만들지 않습니다.
