---
kind: "concept"
articleId: "transaction-fees"
lang: "ko"
title: "거래 중개 수수료"
summary: "플랫폼이 중개한 거래에서 일부를 받습니다."
category: "revenue-sources"
aliases: ["거래 중개 수수료", "Transaction fees"]
related:
  [
    "revenue",
    "direct-payment",
    "advertising",
    "sponsorship",
    "affiliate-marketing",
    "merchant-of-record",
  ]
status: "published"
revision: 4
sourceRevision: 4
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  {
    "features": "중개 거래에 수수료 부과",
    "advantages": "거래에 따라 수익 발생",
    "limitations": "분쟁과 운영 비용",
    "suitable": "유용한 양면 장터",
    "combinations": "구독과 판매 책임 계약",
  }
---

## 왜 필요한가

제작자가 물건을 올리고 구매자가 주문하는 수공예 장터를 만든다고 가정해 봅시다. 어떤 제작자는 자주 팔지만 다른 제작자는 몇 주 동안 거래가 없을 수도 있습니다.

수공예 장터는 제작자와 구매자를 연결하지만 고정 요금은 거래가 없는 날에도 부과됩니다.

## 어떻게 해결하는가

가상 수공예 장터에서 100짜리 거래 중 플랫폼에 10, 제작자에게 90을 배분합니다. Stripe Connect는 중개 수수료 흐름의 사례입니다. 도식은 단순 배분이며 실제 이체 순서는 아닙니다. 세금·처리 수수료·환불을 생략했으므로 10은 순이익이 아닙니다.

## 무엇이라 부르는가

**거래 중개 수수료** — 거래 중개 수익은 구매자와 판매자의 거래를 돕고 받는 수수료입니다. 다른 곳으로 방문자를 소개하는 것과 다르며, 수수료 자체가 계약상 판매자를 결정하지는 않습니다.

책임을 정하고 선택적 구독과 조합하세요.

[출처](https://docs.stripe.com/connect/marketplace/tasks/app-fees)
