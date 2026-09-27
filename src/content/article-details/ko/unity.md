---
articleId: unity
lang: ko
sourceRevision: 7
sources:
  - title: "Unity: GameObjects"
    url: "https://docs.unity3d.com/Manual/GameObjects.html"
    claim: GameObject와 컴포넌트가 제공하는 기능의 근거이며 미로 모형은 Unity를 실행하지 않습니다.
    checked: "2026-09-27"
---

## 선택·비교

GameObject·컴포넌트 구성과 팀 도구가 게임에 맞을 때 씁니다. Godot는 재사용 노드 장면, Unreal은 Actor·Blueprint 구성을 제공합니다. 실제 도구에서 대상 플랫폼·생명주기·자산 흐름을 확인합니다.

## 응용 사례

박물관 미로의 열쇠는 시각·충돌·작성한 행동 책임을 갖습니다. 접촉하면 점수를 한 번 올리고 열쇠를 없앱니다. 접촉 실패 상태는 검사할 규칙을 보여주며 물리 시뮬레이션은 아닙니다.

## 구현 참고·주의점

점수 소유자를 하나로 정하고 수집물의 중복 처리를 막습니다. 실제 엔진에서 컴포넌트 참조와 생명주기를 확인합니다. 페이지 모형은 새로고침으로 초기화하며 저장 수명·내보내기 호환성을 입증하지 않습니다.
