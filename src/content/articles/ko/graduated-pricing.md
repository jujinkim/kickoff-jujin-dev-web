---
kind: "concept"
articleId: "graduated-pricing"
lang: "ko"
title: "구간별 누진 단가"
summary: "각 구간의 사용량을 따로 계산해 더합니다."
category: "pricing-models"
aliases: ["구간별 누진 단가", "Graduated pricing"]
related:
  [
    "revenue",
    "flat-rate-pricing",
    "per-seat-pricing",
    "feature-tiered-pricing",
    "volume-pricing",
    "base-plus-overage",
    "usage-based",
  ]
status: "published"
revision: 4
sourceRevision: 4
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  {
    "features": "구간별 계산 후 합산",
    "advantages": "이전 단위의 가격 유지",
    "limitations": "계산 설명이 더 필요",
    "suitable": "단계적인 사용량 할인",
    "combinations": "사용량 측정과 구독",
  }
---

## 왜 필요한가

교사가 학습지를 만들어 내보내는 도구를 만든다고 가정해 봅시다. 한 학급은 몇 장만 쓰지만 학교 전체는 한 달에 수백 장을 요청할 수 있습니다.

학습지 제작 도구는 처음 백 회 이후의 내보내기를 할인하면서 이미 사용한 분의 요금은 유지하려 합니다.

## 어떻게 해결하는가

가상 학습지 제작 도구는 3좌석·월 120회 내보내기를 사용합니다. 처음 100회는 회당 0.20, 이후는 0.10입니다. 따라서 100 × 0.20 + 20 × 0.10 = 22입니다. 사용량을 바꾸면 100회는 20, 101회는 20.10, 0회는 0입니다. 세금·수수료·환불·구간 고정료는 생략했습니다.

## 무엇이라 부르는가

구간별 누진 단가는 각 구간의 사용량을 해당 단가로 계산한 뒤 합산합니다. 더 저렴한 구간에 도달해도 이전 단위의 가격은 바뀌지 않습니다.

같은 경계로 전체 수량 구간 단가와 비교하세요.

[출처](https://docs.stripe.com/subscriptions/pricing-models/tiered-pricing)
