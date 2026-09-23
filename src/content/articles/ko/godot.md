---
kind: concept
articleId: godot
lang: ko
title: Godot
summary: 노드로 재사용 씬을 구성합니다.
category: game-engines
aliases:
  - Godot
related:
  - tools
  - unity
  - unreal-engine
status: published
revision: 3
sourceRevision: 3
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  features: 노드로 만든 재사용 씬
  advantages: 아이템 구성 재사용
  limitations: 접촉 로직 검증 필요
  suitable: 씬 기반 프로토타입
  combinations: 플레이어와 아이템 씬 분리
---

## 왜 필요한가

과수원 게임의 사과 여러 개가 같은 점수를 줍니다.

## 어떻게 해결하는가

도식에는 플레이어·바닥·카메라·사과 인스턴스 하나가 있습니다. 아이템으로 이동을 누르면 작성한 접촉 로직이 점수를 0에서 1로 바꾸고 아이템을 제거합니다. 다시 접촉해도 점수는 오르지 않습니다. 이동 전에 접촉 끄기를 선택하면 수집 실패로 점수는 0입니다. 초기화·새로고침은 플레이어와 아이템을 복원합니다. 실제 엔진이 아닌 개념 시뮬레이션입니다.

## 무엇이라 부르는가

Godot는 노드를 씬으로 구성하고 다른 씬 안에 인스턴스로 배치합니다. 씬은 재사용 사과일 수도, 게임 시작점일 수도 있습니다.

게임 로직과 내보내기 결과는 따로 검증하세요.

[출처](https://docs.godotengine.org/en/stable/getting_started/step_by_step/nodes_and_scenes.html)
