---
kind: guide
articleId: "architecture"
lang: "ko"
title: "아키텍처: 경계와 역할 정하기"
summary: "모듈의 역할과 소유권을 합의하고, 내부 코드는 AI가 구체화합니다."
category: "planning"
aliases:
  [
    "SOLID",
    "GRASP",
    "architecture",
    "아키텍처",
    "응집도",
    "アーキテクチャ",
    "凝集度",
  ]
related: ["srs", "tools"]
example: "layers"
status: "published"
revision: 3
sourceRevision: 3
updated: "2026-09-23"
aiPrompt: "확정된 요구사항과 제약을 읽어줘. 프로젝트 전체의 모듈, 책임, 데이터·규칙 소유권, 허용 의존 방향, 공개 계약, 실패 복구 담당을 제안해줘. 대안과 유지 비용을 설명하고 미결정 아키텍처만 질문해줘. 승인된 결정은 보존해. 경계 안의 클래스·메서드·자료구조는 스스로 정해줘. UML은 판단을 설명하는 데 필요할 때 작성하고 나에게 작성을 요구하지 마."
---

## 개념

아키텍처는 모듈의 책임, 소유권, 의존 방향을 정합니다. 공개 계약이 명확하면 협력하는 모듈을 깨뜨리지 않고 내부 구현을 바꿀 수 있습니다. [Microsoft](https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/architectural-principles)

## 예시

UI → 사용 사례 → 도메인 규칙. 주문은 확정 규칙, 재고는 수량을 소유합니다. 결제 흐름이 둘과 복구를 조율하고, 데이터베이스 어댑터는 저장을 맡습니다.

## 추천 조건

책임이 여러 기능에 걸칠 때 경계를 합의하세요. 인터페이스는 교체를 돕지만 유지할 코드도 늘어납니다. 규모에 맞게 구성합니다. 이 가이드에서는 사용자가 프로젝트 전체의 역할과 제약을 확인하고, AI가 클래스·메서드와 필요한 UML을 구체화합니다.
