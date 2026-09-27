---
articleId: godot
lang: ko
sourceRevision: 8
sources:
  - title: "Godot: Nodes and Scenes"
    url: "https://docs.godotengine.org/en/stable/getting_started/step_by_step/nodes_and_scenes.html"
    claim: 노드 구성·장면·인스턴스의 근거이며 과수원은 엔진 내보내기가 아닌 브라우저 모형입니다.
    checked: "2026-09-27"
---

## 선택·비교

재사용 노드 계층이 팀의 사고방식·대상 플랫폼에 맞을 때 선택합니다. Unity는 GameObject·컴포넌트, Unreal은 Actor·Blueprint 흐름을 제공합니다. 도표만으로 정하지 말고 실제 내보내기·입력을 시제품으로 확인합니다.

## 응용 사례

과수원은 시각·접촉 부분으로 사과를 구성합니다. 수집하면 점수가 한 번 오르고 인스턴스가 사라집니다. 반복 접촉 방지는 직접 작성한 보호 로직이며 장면을 쓴다고 자동 보장되지 않습니다.

## 구현 참고·주의점

점수와 수집 완료 상태의 소유자를 정합니다. 신호를 한 번 연결하고 접촉 비활성·반복 이벤트를 검사합니다. 모형은 페이지 메모리이며 저장·물리·네이티브 입력·내보내기는 실제 엔진에서 검증합니다.
