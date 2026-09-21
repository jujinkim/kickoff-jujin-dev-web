---
kind: guide
articleId: "revenue"
lang: "ko"
title: "구독·일회 결제·광고: 가치에 맞춰 청구하기"
summary: "가격표가 제품까지 구해주지는 않습니다."
category: "business"
aliases:
  [
    "subscription",
    "one-time",
    "advertising",
    "구독",
    "일회 결제",
    "광고",
    "サブスクリプション",
    "買い切り",
    "広告",
  ]
related: ["payments", "srs"]
example: "revenue"
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-09-21"
aiPrompt: "독자와 지속 비용을 기준으로 구독·일회 결제·광고를 비교해줘. 가정을 명시하고 총매출과 비용을 구분해줘. 권한 기간, 해지, 개인정보의 미결정 사항을 물어봐. 위임 없이 수익 모델을 정하지 말고 결정 기록과 완료 조건을 남겨줘."
checked: "2026-09-21"
---

## 개념

구독은 지속적인 접근이나 가치에, 일회 결제는 정해진 권리에 비용을 받습니다. 광고는 관심이나 지면을 판매합니다. 매출은 이익이 아닙니다. 수수료, 환불, 세금, 인프라, 지원 비용은 여전히 존재합니다.

## 필요한 상황

이용 권한, 해지, 계정 삭제를 설계하기 전에 고릅니다. 매달 호스팅비가 든다고 고객이 구독을 원하는 것은 아닙니다. 광고에는 독자와 정책에 맞는 지면이 필요합니다.

## 예시

로컬 내보내기 도구는 특정 버전의 영구 라이선스를 팔 수 있습니다. 호스팅 협업 서비스는 지속 제공 비용을 받을 수 있습니다. 공개 학습 안내서는 독서 경험과 독자 규모가 맞으면 광고를 검토할 수 있습니다. 아래 계산은 비용을 제외한 예시이지 수익 약속이 아닙니다.

```text
Illustrative monthly model, not a forecast:
100 members x $5 = $500 gross recurring revenue
minus fees, refunds, tax, hosting, support, acquisition
One-time: new sales must cover ongoing promises
Ads: eligible traffic x variable realized yield
```

## 선택지와 tradeoff

구독은 지속 서비스에 맞지만 이탈, 결제 실패, 해지 처리가 필요합니다. 일회 결제는 설명이 쉽지만 장기간 지원 비용을 충당하기 어려울 수 있습니다. 광고는 결제 장벽을 낮추지만 규모 의존, 개인정보 선택, 집중 방해를 추가합니다. 혼합 모델은 운영 복잡성이 늘어납니다.

## 추천 조건

무엇을 얼마나 오래 제공하고 해지·결제 실패 뒤에는 어떻게 되는지 적으세요. 보수적인 매출과 전체 운영 비용을 계산합니다. 세 칸짜리 가격표를 다듬기 전에 지불 의사를 확인하세요. 제공자의 이용 자격과 조건은 출시 전에 직접 검토합니다.

## AI 지시 예시

독자와 지속 비용을 기준으로 구독·일회 결제·광고를 비교해줘. 가정을 명시하고 총매출과 비용을 구분해줘. 권한 기간, 해지, 개인정보의 미결정 사항을 물어봐. 위임 없이 수익 모델을 정하지 말고 결정 기록과 완료 조건을 남겨줘.

## 관련 글과 출처

- [결제 채널과 PG·MoR: 토스·Lemon Squeezy](/ko/guides/payments/)
- [SRS와 완료 조건: ‘완성’의 뜻부터](/ko/guides/srs/)

- [Stripe — Billing subscriptions](https://docs.stripe.com/billing/subscriptions/overview)
- [Google — AdSense eligibility](https://support.google.com/adsense/answer/9724)

서비스 문서 확인: 2026-09-21. 제공 범위·정책·계약은 바뀔 수 있으므로 출시 전에 다시 확인하세요.
