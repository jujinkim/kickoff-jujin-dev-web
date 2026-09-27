---
articleId: monospace
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

코드나 공백으로 맞춘 기록에 고정폭을 씁니다. 이어지는 문장은 비례폭이 자연스러울 수 있고 숫자 표에는 숫자 등폭만으로 충분할 수 있습니다. 산세리프 형태가 같은 폭을 뜻하지는 않습니다.

## 응용 사례

가상 라틴 날씨 기록으로 열 정렬을 보여줍니다. 로그·코드·식별자에도 응용합니다. 행과 열의 관계를 명확히 읽어야 할 때는 의미 있는 표가 더 적합합니다.

## 구현 참고·주의점

document.fonts.ready 이후 실제 로드된 글꼴을 확인합니다. 하나의 텍스트 노드에서 Range로 측정해 연결 형태를 유지하며 합자·결합 문자·대체 글꼴은 범위에 영향을 줄 수 있습니다. 실험과 실제 사용 화면을 분리하고 현지화 문자 지원을 검사합니다.
