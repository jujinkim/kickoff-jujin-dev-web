---
kind: guide
articleId: "srs"
lang: "ko"
title: "SRS와 완료 조건: ‘완성’의 뜻부터"
summary: "막연한 소원을 검증 가능한 요구사항으로 바꿉니다."
category: "planning"
aliases:
  [
    "SRS",
    "requirements",
    "acceptance criteria",
    "요구사항",
    "완료 조건",
    "要件",
    "受け入れ条件",
  ]
related: ["adr", "ooad"]
example: "spec"
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-09-21"
aiPrompt: "서점 장바구니의 확정된 요구사항부터 읽어줘. 재고, 비회원 결제, 실패 동작의 미결정 사항을 나열하고 구현 전에 선택을 물어봐. 번호가 있는 요구사항, 제외 범위, 완료 조건 예시, 작은 작업 목록을 남겨줘. 명시적으로 위임하지 않은 제품 동작은 임의로 결정하지 마."
---

## 개념

SRS는 소프트웨어의 관찰 가능한 동작과 제약을 적은 요구사항 명세입니다. 완료 조건은 요구사항을 확인할 수 있게 만듭니다. ‘직관적으로’는 기분이지 테스트가 아닙니다. 목표, 범위, 제외 사항, 동작, 품질 제약을 나눠 적으세요.

## 필요한 상황

장바구니나 예약처럼 실패 상황이 있는 기능을 AI에게 맡기기 전에 씁니다. 작은 프로젝트라면 한 페이지로 시작해도 됩니다. 문서 무게보다 같은 뜻으로 이해하는 것이 중요합니다.

## 예시

서점의 ‘책을 살 수 있다’에는 재고, 수량, 비회원 결제, 결제 실패가 숨어 있습니다. 아래 장바구니 사례부터 정하세요. 같은 책을 두 번 추가하면 한 행의 수량이 2가 됩니다. 결제 중 재고가 바뀔 때 동작과 결정 책임자도 적습니다.

```text
Given: a visitor with an empty cart
When: they add the same book twice
Then: one cart row has quantity 2
Failure: unavailable stock leaves the cart unchanged
```

## 선택지와 tradeoff

체크리스트는 관리가 쉽지만 상호작용을 놓치기 쉽습니다. 사용자 스토리는 동기를 설명하지만 완료 조건이 별도로 필요합니다. 상세 SRS는 여러 팀의 합의에 좋지만 검수와 갱신 비용이 큽니다. 모호함과 실패의 영향에 맞춰 깊이를 고르세요.

## 추천 조건

작은 단일 팀 기능이라면 번호가 붙은 요구사항마다 성공·실패 사례를 하나씩 쓰세요. 성능 수치는 기기, 부하, 측정 방법과 함께 정합니다. 과학적으로 보인다는 이유로 100ms를 발명하지 마세요.

## AI 지시 예시

서점 장바구니의 확정된 요구사항부터 읽어줘. 재고, 비회원 결제, 실패 동작의 미결정 사항을 나열하고 구현 전에 선택을 물어봐. 번호가 있는 요구사항, 제외 범위, 완료 조건 예시, 작은 작업 목록을 남겨줘. 명시적으로 위임하지 않은 제품 동작은 임의로 결정하지 마.

## 관련 글과 출처

- [Design Decision과 ADR: 결정의 흔적](/ko/guides/adr/)
- [OOAD와 책임 분리: 객체마다 할 일 하나](/ko/guides/ooad/)

- [NASA — Software requirements](https://swehb.nasa.gov/display/SWEHBVD/SWE-050+-+Software+Requirements)
