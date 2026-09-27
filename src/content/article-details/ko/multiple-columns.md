---
articleId: multiple-columns
lang: ko
sourceRevision: 8
sources:
  - title: "W3C: CSS Grid Level 1"
    url: "https://www.w3.org/TR/css-grid-1/"
    claim: 후보 권고 초안은 2차원 그리드 배치를 정의하며 이 사이트의 페이지 분류를 규정하지 않습니다.
    checked: "2026-09-27"
  - title: "WCAG 2.2: Reflow"
    url: "https://www.w3.org/WAI/WCAG22/Understanding/reflow.html"
    claim: 좁은 화면과 확대 검사의 근거이며 레이아웃·서체의 정의는 아닙니다.
    checked: "2026-09-27"
  - title: "W3C: CSS Multi-column Level 1"
    url: "https://www.w3.org/TR/css-multicol-1/"
    claim: 페이지 영역과 별개로 텍스트를 여러 단에 나누는 방식을 정의합니다.
    checked: "2026-09-27"
---

## 선택·비교

선택·작업·독립된 맥락이 함께 필요할 때 씁니다. 주요 과업 하나와 보조 조작 하나라면 사이드바가 간단합니다. 영역 수 자체는 사용성의 증거가 아닙니다.

## 응용 사례

박물관은 전시물마다 사진과 관찰 질문을 연결합니다. 편집기나 참고 도구에도 적용할 수 있습니다. 생성 식물 사진은 페이지 구조를 보여주며 실제 소장품 기록은 아닙니다.

## 구현 참고·주의점

CSS Grid는 독립 영역을 배치하고 CSS 다단은 하나의 콘텐츠 흐름을 나눕니다. DOM을 탐색→전시물→설명으로 두고 작은 화면도 같은 순서를 따릅니다. 하나의 선택 상태로 사진과 맥락을 갱신합니다.
