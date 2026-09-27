---
articleId: sans-serif
lang: ko
sourceRevision: 9
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

정보 위계에 담백한 인상이 맞으면 산세리프를 씁니다. 세리프는 편집물의 분위기, 스크립트는 짧은 표현에 어울립니다. 어느 쪽도 보편적으로 더 읽기 쉽지는 않으므로 글자·크기·굵기·언어를 비교합니다.

## 응용 사례

가상 교통 안내는 크기와 굵기로 시간·목적지·운행 상태를 구분합니다. 표지와 인터페이스에도 적용할 수 있습니다. 실제 운행 정보가 아닌 글꼴 예제입니다.

## 구현 참고·주의점

document.fonts.ready 이후 실제 로드된 글꼴을 확인합니다. 하나의 텍스트 노드에서 Range로 측정해 연결 형태를 유지하며 합자·결합 문자·대체 글꼴은 범위에 영향을 줄 수 있습니다. 실험과 실제 사용 화면을 분리하고 현지화 문자 지원을 검사합니다.
