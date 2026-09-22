---
kind: "concept"
articleId: "subscription"
lang: "ko"
title: "구독"
summary: "반복 청구와 접근 정책을 함께 정합니다."
category: "billing"
aliases: ["구독", "Subscription"]
related:
  [
    "revenue",
    "one-time-payment",
    "usage-based",
    "prepaid-credits",
    "flat-rate-pricing",
  ]
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-09-22"
checked: "2026-09-22"
comparison:
  {
    "features": "기간별 반복 청구",
    "advantages": "지속 서비스 지원",
    "limitations": "갱신과 실패 처리 필요",
    "suitable": "지속되는 고객 가치",
    "combinations": "사용량 요금 또는 정액",
  }
---

## 개념

구독은 약정된 기간마다 청구를 반복합니다. 사용량 요금을 포함할 수도 있으므로 반복 청구가 정액을 뜻하지는 않습니다.

## 예시

가상 내보내기 도구가 월 12를 청구합니다. 100·300·600회 사용한 세 달의 결제가 모두 성공하면 총 36입니다. 기간을 진행하고 갱신 해제나 결제 실패를 시도하세요. 이 예제는 해제 시 결제한 기간 끝에 접근을 종료하고, 실패 시 재시도 성공까지 접근을 멈춥니다. 세금·수수료·환불은 생략했습니다.

## 추천 조건

가치가 계속 제공될 때 적합합니다. 갱신·실패 정책을 명시하고 사용량이 변하면 계량 과금과 조합하세요.

[출처](https://docs.stripe.com/billing/subscriptions/overview)
