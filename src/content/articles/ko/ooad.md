---
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
revision: 1
sourceRevision: 1
updated: "2026-09-21"
aiPrompt: "우리 결제 흐름의 도메인 개념, 불변 조건, 책임 주체를 정리해줘. 실제 복잡성을 기준으로 트랜잭션 스크립트와 작은 도메인 모델을 비교해줘. 미결정 경계는 질문하고 상속 트리를 기본으로 만들지 마. 책임 표, 호출 순서, 실패 처리 담당, 테스트를 남겨줘."
---

## 개념

객체지향 분석은 도메인의 개념과 규칙을 찾고, 설계는 규칙을 협력자에게 배정합니다. Manager라는 이름이 복잡성을 관리해 주지는 않습니다. 사실을 아는 주체, 불변 조건을 지키는 주체, 흐름을 조율하는 주체를 구분하세요.

## 필요한 상황

검증 로직이 화면마다 복제되거나 규칙 하나를 바꾸느라 무관한 코드를 고칠 때 씁니다. 클래스가 없는 함수 중심 코드에서도 책임과 소유권은 필요합니다.

## 예시

Order는 주문 확정 가능 여부를, Inventory는 재고를 책임집니다. 결제 애플리케이션 서비스가 흐름을 조율합니다. 결제 인프라는 외부 제공자와 통신하지만 판매할 책을 정하지 않습니다. 아래 화살표는 상속이 아니라 호출입니다.

```text
Checkout -> Order.place()
Order -> Inventory.reserve(items)
Order -> Payment.authorize(total)
Receipt <- Order.confirm()
```

## 선택지와 tradeoff

단일 트랜잭션 스크립트는 작은 흐름을 읽기 쉽지만 규칙이 반복되면 어긋납니다. 도메인 모델은 규칙을 모으지만 개념과 간접 참조가 늘어납니다. 상속은 동작을 강하게 묶고, 합성은 명시적인 연결 비용으로 협력자 교체를 쉽게 합니다.

## 추천 조건

책임 표와 실제 사용 사례 하나부터 시작하세요. 반복되는 규칙이나 보호할 불변 조건이 생기면 객체로 분리합니다. 영수증만 출력하는 기능에 추상 팩토리를 들이밀 필요는 없습니다. 실패·되돌리기의 책임도 적으세요.

## AI 지시 예시

우리 결제 흐름의 도메인 개념, 불변 조건, 책임 주체를 정리해줘. 실제 복잡성을 기준으로 트랜잭션 스크립트와 작은 도메인 모델을 비교해줘. 미결정 경계는 질문하고 상속 트리를 기본으로 만들지 마. 책임 표, 호출 순서, 실패 처리 담당, 테스트를 남겨줘.

## 관련 글과 출처

- [아키텍처와 SOLID·GRASP: 약어 숭배 금지](/ko/catalog/architecture/)
- [SRS와 완료 조건: ‘완성’의 뜻부터](/ko/catalog/srs/)

- [Microsoft — Domain model design](https://learn.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/microservice-domain-model)
