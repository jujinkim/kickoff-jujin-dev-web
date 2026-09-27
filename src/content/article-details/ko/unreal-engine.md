---
articleId: unreal-engine
lang: ko
sourceRevision: 7
sources:
  - title: "Epic: Blueprint Visual Scripting"
    url: "https://dev.epicgames.com/documentation/en-us/unreal-engine/introduction-to-blueprints-visual-scripting-in-unreal-engine"
    claim: Blueprint 클래스의 시각적 게임플레이 스크립팅을 설명하며 동전 흐름은 브라우저 설명 모형입니다.
    checked: "2026-09-27"
---

## 선택·비교

재사용 시각 이벤트 그래프와 Actor 구성이 게임·팀에 맞을 때 선택합니다. Godot 노드 장면과 Unity 컴포넌트 방식도 함께 비교합니다. 그래픽 목표만으로 정하지 말고 작성·배포·운영 제약을 확인합니다.

## 응용 사례

마을 게임의 동전 Actor는 겹침 이벤트를 받고 소비 여부를 검사한 뒤 점수를 올리고 사라집니다. 반복 접촉에도 점수는 1입니다. Actor의 기능과 이벤트 경로에 작성한 게임 규칙을 구분합니다.

## 구현 참고·주의점

점수·소비 상태의 소유자를 정하고 책임을 숨기는 큰 그래프를 피합니다. 실제 Unreal에서 겹침 설정·중복 이벤트·오브젝트 제거를 검사합니다. 브라우저 모형은 Unreal을 로드하지 않으며 성능·패키징·저장 동작을 입증하지 않습니다.
