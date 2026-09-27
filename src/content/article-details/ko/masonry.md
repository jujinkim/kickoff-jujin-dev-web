---
articleId: masonry
lang: ko
sourceRevision: 7
sources:
  - title: "Masonry: Layout"
    url: "https://masonry.desandro.com/layout.html"
    claim: 원 라이브러리 문서는 이미지를 고려한 배치를 설명합니다. 사이트는 해당 라이브러리가 아닌 자체 배치 함수를 씁니다.
    checked: "2026-09-27"
  - title: "WCAG 2.2: Reflow"
    url: "https://www.w3.org/WAI/WCAG22/Understanding/reflow.html"
    claim: 좁은 화면과 확대 검사의 근거이며 레이아웃·서체의 정의는 아닙니다.
    checked: "2026-09-27"
---

## 선택·비교

이미지 중심 탐색에는 다른 높이를 채우는 배치가 적합합니다. 행별 속성 비교가 우선이면 균등 그리드, 엄격한 읽기 순서가 우선이면 리스트를 씁니다. 메이슨리의 시각·포커스 순서는 별도 검토합니다.

## 응용 사례

앨범은 가로·세로 사진과 길이가 다른 캡션을 섞습니다. 포트폴리오에도 적용할 수 있습니다. 같은 사진에 다른 기억을 붙여 글 높이도 영향을 준다는 점을 보여줍니다.

## 구현 참고·주의점

소스 순서를 두고 실제 카드 높이를 측정하며 사진·글꼴·펼침의 변화를 관찰합니다. JavaScript가 없으면 일반 그리드로 읽습니다. 펼친 뒤 모든 카드 쌍의 겹침과 Tab의 DOM 순서를 확인합니다.
