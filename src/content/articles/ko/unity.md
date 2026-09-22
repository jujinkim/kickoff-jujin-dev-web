---
kind: concept
articleId: unity
lang: ko
title: Unity
summary: 컴포넌트가 오브젝트 동작을 만듭니다.
category: game-engines
aliases:
  - Unity
related:
  - tools
  - godot
  - unreal-engine
status: published
revision: 2
sourceRevision: 2
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  features: GameObject에 컴포넌트 부착
  advantages: 동작별 책임 구분
  limitations: 참조·수명주기 검증 필요
  suitable: 컴포넌트 중심 게임 팀
  combinations: 점수 로직과 표현 분리
---

## 왜 필요한가

게임 물체들은 비슷한 기능을 서로 다르게 조합합니다. 물체마다 큰 스크립트 하나로 만들면 같은 책임이 반복됩니다.

## 어떻게 해결하는가

도식에는 플레이어·바닥·카메라·수집 아이템 하나가 있습니다. 아이템으로 이동을 누르면 작성한 접촉 로직이 점수를 0에서 1로 바꾸고 아이템을 제거합니다. 다시 접촉해도 점수는 오르지 않습니다. 이동 전에 접촉 끄기를 선택하면 수집 실패로 점수는 0입니다. 초기화·새로고침은 플레이어와 아이템을 복원합니다. 실제 엔진이 아닌 개념 시뮬레이션입니다.

## 무엇이라 부르는가

Unity의 GameObject는 컴포넌트를 담습니다. Transform·렌더링·충돌·직접 작성한 스크립트가 책임을 나누며, 이름만으로 게임 동작이 생기지는 않습니다.

점수 소유권을 명확히 하고 컴포넌트 참조를 검증하세요.

[출처](https://docs.unity3d.com/Manual/GameObjects.html)
