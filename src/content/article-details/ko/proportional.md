---
articleId: proportional
lang: ko
sourceRevision: 8
sources:
  - title: "W3C: CSS Fonts Level 3"
    url: "https://www.w3.org/TR/css-fonts-3/"
    claim: 일반 글꼴 분류와 숫자 기능을 정의합니다. 실제 전진 폭은 로드된 글꼴과 글자 조형에 따릅니다.
    checked: "2026-09-27"
  - title: "WCAG 2.2: Reflow"
    url: "https://www.w3.org/WAI/WCAG22/Understanding/reflow.html"
    claim: 좁은 화면과 확대 검사의 근거이며 레이아웃·서체의 정의는 아닙니다.
    checked: "2026-09-27"
---

## 선택·비교

이어지는 글에서 글자별 비율을 살릴 때 비례폭을 선택합니다. 공백으로 라틴 열을 맞춰야 하면 고정폭이 맞습니다. 세리프·산세리프 모두 비례폭일 수 있고 등폭 숫자도 함께 쓸 수 있습니다.

## 응용 사례

정원 소식지는 이어지는 라틴 문단과 현지화 안내를 함께 보여줍니다. 편집 글이나 일반 UI 문구에도 적용합니다. 모든 글자가 비례폭이라 가정하지 말고 실제 글꼴과 문자 체계를 확인합니다.

## 구현 참고·주의점

document.fonts.ready 이후 실제 로드된 글꼴을 확인합니다. 하나의 텍스트 노드에서 Range로 측정해 연결 형태를 유지하며 합자·결합 문자·대체 글꼴은 범위에 영향을 줄 수 있습니다. 실험과 실제 사용 화면을 분리하고 현지화 문자 지원을 검사합니다.
