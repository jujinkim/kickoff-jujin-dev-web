---
kind: concept
articleId: unreal-engine
lang: ko
title: Unreal Engine
summary: 액터의 구성과 이벤트를 연결합니다.
category: game-engines
aliases:
  - Unreal Engine
related:
  - tools
  - godot
  - unity
status: published
revision: 2
sourceRevision: 2
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  features: 액터·컴포넌트·Blueprint 이벤트
  advantages: 게임 동작 경로 확인
  limitations: 큰 그래프의 소유권 관리 필요
  suitable: 시각적 게임 스크립팅
  combinations: Blueprint 상호작용과 점수 로직
---

## 왜 필요한가

재사용할 월드 물체와 눈으로 따라갈 수 있는 게임 이벤트 흐름이 필요합니다. 개별 이벤트 처리가 흩어지면 협업이 어려워집니다.

## 어떻게 해결하는가

도식에는 플레이어·바닥·카메라·수집 아이템 액터 하나가 있습니다. 아이템으로 이동을 누르면 작성한 겹침 검사가 점수를 0에서 1로 바꾸고 액터를 제거합니다. 다시 접촉해도 점수는 오르지 않습니다. 이동 전에 접촉 끄기를 선택하면 수집 실패로 점수는 0입니다. 초기화·새로고침은 처음 상태를 복원합니다. 실제 엔진이 아닌 개념 시뮬레이션입니다.

## 무엇이라 부르는가

Unreal Engine은 레벨에 액터를 배치합니다. 컴포넌트가 기능을 제공하고 Blueprint 그래프는 재사용 클래스의 게임 이벤트와 동작을 정의할 수 있습니다.

그래프 책임과 점수 소유권을 명확히 하세요.

[출처](https://dev.epicgames.com/documentation/en-us/unreal-engine/actors-in-unreal-engine) · [출처 2](https://dev.epicgames.com/documentation/en-us/unreal-engine/introduction-to-blueprints-visual-scripting-in-unreal-engine)
