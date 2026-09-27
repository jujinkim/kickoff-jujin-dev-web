---
articleId: neumorphism
lang: ko
sourceRevision: 11
sources:
  - title: "Hype4: Shadows and Blurs"
    url: "https://hype4.academy/articles/design/ui-design-shapes-objects-basics-shadows-and-blurs"
    claim: 그림자 기법과 부드러운 입체 표면을 설명합니다. 광원 방향은 보편적인 정의가 아닙니다.
    checked: "2026-09-27"
  - title: WCAG 2.2
    url: "https://www.w3.org/TR/WCAG22/"
    claim: 키보드·포커스·리플로·대비 요구사항의 근거이며 시각 스타일만으로 준수를 입증하지는 않습니다.
    checked: "2026-09-27"
  - title: "W3C: CSS backgrounds and borders"
    url: "https://www.w3.org/TR/css-backgrounds-3/#box-shadow"
    claim: 외부·내부 상자 그림자를 정의하며 예제의 광원 방향은 표현 선택입니다.
    checked: "2026-09-27"
---

## 선택·비교

작고 차분한 조작 화면에 부드러운 깊이감을 줄 때 씁니다. 스큐어모피즘은 익숙한 사물을 넓게 빌리며 플랫 디자인은 이런 깊이를 생략합니다. 재질감이 상태 라벨을 대신하면 안 됩니다.

## 응용 사례

타이머는 솟은 다이얼과 눌린 활성 버튼을 둡니다. 시각적 조작 예제이며 운동·건강 조언이 아닙니다. 짧은 로컬 타이머로 시작·정지·재개를 보여주고 기록은 저장하지 않습니다.

## 구현 참고·주의점

매 간격 호출이 정확하다고 가정하지 말고 종료 시각에서 남은 시간을 구합니다. 시작을 반복해도 타이머가 늘면 안 됩니다. 그림자를 제거해도 상태 문구·눌림 의미·포커스·강제 색상 경계를 유지합니다.
