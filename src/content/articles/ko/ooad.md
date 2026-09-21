---
kind: guide
articleId: "ooad"
lang: "ko"
title: "OOAD와 책임 분리: 객체마다 할 일 하나"
summary: "클래스 숲을 그리기 전에 동작과 소유권을 정합니다."
category: "planning"
aliases:
  [
    "OOAD",
    "responsibility",
    "객체지향",
    "책임 분리",
    "オブジェクト指向",
    "責務",
  ]
related: ["architecture", "srs"]
example: "objects"
status: "published"
revision: 2
sourceRevision: 2
updated: "2026-09-21"
aiPrompt: "우리 결제 흐름의 도메인 개념, 불변 조건, 책임 주체를 정리해줘. 실제 복잡성을 기준으로 트랜잭션 스크립트와 작은 도메인 모델을 비교해줘. 미결정 경계는 질문하고 상속 트리를 기본으로 만들지 마. 책임 표, 호출 순서, 실패 처리 담당, 테스트를 남겨줘."
---

## 개념

객체지향 분석은 도메인 개념과 규칙을 찾고, 설계는 협력하는 객체에 그 규칙을 배치합니다.

## 예시

Order는 주문 확정 규칙, Inventory는 재고를 맡습니다. 결제 흐름은 둘을 조율하고 결제 인프라는 제공자와 통신합니다.

## 추천 조건

절차형 스크립트는 단순합니다. 도메인 모델은 규칙을 모으지만 개념과 간접 참조가 늘어납니다. 사용 사례 하나와 책임표부터 시작하세요. 실패와 되돌리기를 누가 처리하는지도 정합니다. [Microsoft](https://learn.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/microservice-domain-model)
