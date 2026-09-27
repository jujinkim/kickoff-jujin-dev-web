---
articleId: script
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

짧은 인사나 표현적인 제목에 쓰고 장식성이 높다는 이유로 본문까지 바꾸지 않습니다. 긴 글에는 세리프나 산세리프를 쓸 수 있습니다. 스크립트마다 연결 방식과 언어 지원이 다릅니다.

## 응용 사례

초대장은 라틴 인사와 실용적인 행사 정보를 분리합니다. 개인 카드나 짧은 제목에도 같은 강조를 쓸 수 있습니다. 한국어·일본어 손글씨를 시연하는 표본은 아닙니다.

## 구현 참고·주의점

document.fonts.ready 이후 실제 로드된 글꼴을 확인합니다. 하나의 텍스트 노드에서 Range로 측정해 연결 형태를 유지하며 합자·결합 문자·대체 글꼴은 범위에 영향을 줄 수 있습니다. 실험과 실제 사용 화면을 분리하고 현지화 문자 지원을 검사합니다.
