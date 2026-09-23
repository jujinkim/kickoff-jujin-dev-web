---
kind: "concept"
articleId: "usage-based"
lang: "ko"
title: "사용량 기반 과금"
summary: "사용 단위를 측정해 요금을 계산합니다."
category: "billing"
aliases: ["사용량 기반 과금", "Usage-based billing"]
related:
  [
    "revenue",
    "one-time-payment",
    "subscription",
    "prepaid-credits",
    "volume-pricing",
  ]
status: "published"
revision: 4
sourceRevision: 4
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  {
    "features": "측정한 사용 단위 과금",
    "advantages": "소비량에 따라 요금 변화",
    "limitations": "사용량에 따라 청구액 변동",
    "suitable": "측정 가능한 소비",
    "combinations": "정기 수금 또는 선불 크레딧",
  }
---

## 왜 필요한가

보고서용 지도 이미지를 내보내는 도구를 만든다고 가정해 봅시다. 한 고객은 발표 한 번에 몇 장만 필요하지만 다른 고객은 매일 지도를 만듭니다.

지도 이미지 내보내기 고객 중 한 명은 몇 장만, 다른 고객은 수백 장을 만들기에 같은 요금은 어울리지 않을 수 있습니다.

## 어떻게 해결하는가

가상 지도 이미지 내보내기 도구가 회당 0.02를 청구합니다. 월 100·300·600회라면 2·6·12, 합계 20입니다. 첫 달 사용량을 바꾸거나 1회 추가하면 해당 월 요금과 합계가 변합니다. 이 예제에서 사용량 0은 요금도 0입니다. 세금·수수료·환불은 생략했습니다.

## 무엇이라 부르는가

사용량 기반 과금은 측정한 소비량으로 요금을 계산합니다. 과금 단위와 수금 주기는 별도로 정하며 구독 안에서도 사용할 수 있습니다.

측정 방식과 예산 변동을 설명하고 선불 크레딧과 비교하세요.

[출처](https://docs.stripe.com/billing/usage-based)
