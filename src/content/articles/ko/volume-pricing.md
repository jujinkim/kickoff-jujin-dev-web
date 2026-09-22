---
kind: "concept"
articleId: "volume-pricing"
lang: "ko"
title: "전체 수량 구간 단가"
summary: "최종 수량 구간의 단가를 전체에 적용합니다."
category: "pricing-models"
aliases: ["전체 수량 구간 단가", "Volume pricing"]
related:
  [
    "revenue",
    "flat-rate-pricing",
    "per-seat-pricing",
    "feature-tiered-pricing",
    "graduated-pricing",
    "base-plus-overage",
    "usage-based",
  ]
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-09-22"
checked: "2026-09-22"
comparison:
  {
    "features": "전체 수량에 단일 단가",
    "advantages": "전체 수량 할인",
    "limitations": "경계에서 합계가 감소할 수 있음",
    "suitable": "의도한 수량 할인",
    "combinations": "사용량 측정과 구독",
  }
---

## 개념

전체 수량 구간 단가는 최종 수량이 속한 구간의 단가로 모든 단위를 계산합니다. 누진 방식과 달리 경계를 넘으면 합계가 줄어들 수도 있습니다.

## 예시

가상 작업 공간은 3좌석·월 120회 내보내기를 사용합니다. 100회까지 단가 0.20, 초과하면 전체 단가 0.10이므로 120회는 12입니다. 사용량을 바꾸면 100회는 20, 101회는 10.10, 0회는 0입니다. 세금·수수료·환불·구간 고정료는 생략했습니다.

## 추천 조건

전체 수량 할인을 의도할 때 적합합니다. 경계 효과를 보여주고 같은 구간표의 누진 방식과 비교하세요.

[출처](https://docs.stripe.com/subscriptions/pricing-models/tiered-pricing)
