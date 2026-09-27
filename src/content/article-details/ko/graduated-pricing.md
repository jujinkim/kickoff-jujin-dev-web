---
articleId: graduated-pricing
lang: ko
sourceRevision: 6
sources:
  - title: "Stripe: tiered pricing"
    url: "https://docs.stripe.com/subscriptions/pricing-models/tiered-pricing"
    claim: 누진 가격은 앞 수량의 가격을 바꾸지 않고 각 구간 금액을 더합니다.
    checked: "2026-09-27"
---

## 선택·비교

학습지 도구가 앞 작업 가격을 유지하면서 추가 출력만 할인하려 할 때 맞습니다. 수량 구간 가격은 경계에서 전체 단가를 바꿉니다. 기본료+초과금은 포함량의 기본료를 받으므로 경계가 같아도 산식이 다릅니다.

## 응용 사례

고객은 월 첫 100회에 각각 0.20, 이후 각각 0.10을 냅니다. 120회는 20+2=22, 101회는 20.10입니다. 이 조건의 0회는 0입니다.

## 구현 참고·주의점

경계 포함 여부를 밝히고 정확한 통화 단위로 계산합니다. 0·100·101·120을 시험합니다. 구간 고정비·권한 집행·판매 의무·수금은 계산 밖이므로 소계 표에서 추정하지 않습니다.
