---
kind: guide
articleId: "payments"
lang: "ko"
title: "결제 채널과 PG·MoR: 토스·Lemon Squeezy"
summary: "결제 버튼은 서류 작업의 시작입니다."
category: "business"
aliases:
  [
    "PG",
    "MoR",
    "Toss Payments",
    "Lemon Squeezy",
    "결제",
    "토스",
    "전자결제대행",
    "決済",
    "販売責任者",
  ]
related: ["revenue", "shipping"]
example: "payments"
status: "published"
revision: 2
sourceRevision: 2
updated: "2026-09-21"
aiPrompt: "우리 상품과 판매자 소재지에 맞춰 토스페이먼츠 PG, Lemon Squeezy MoR, 필요한 스토어 결제를 비교해줘. 관할·고객·채널의 누락 정보를 질문해줘. 날짜 있는 공식 근거로 자격, 수수료, 세금 범위, 환불, 정산을 확인해줘. 모르는 것은 밝히고 제공자 선택 전에 물어봐. 서버 검증과 멱등 권한 처리를 요구사항에 포함해줘."
checked: "2026-09-21"
---

## 개념

결제 채널은 경로, PG는 결제 처리 서비스, MoR은 고객 거래에서의 법적 판매자입니다.

## 예시

브라우저의 성공 URL은 결제 증명이 아닙니다. 서버가 주문과 금액을 확인한 뒤 이용 권한을 부여합니다.

## 추천 조건

PG와 MoR 계약은 책임을 다르게 배분합니다. 이름만으로 모든 세금·환불·상품 의무가 정해지지는 않습니다. 최신 계약과 허용 채널을 확인하세요. 신뢰할 수 있는 이벤트를 멱등적으로 처리해 재시도에 권한이 중복 부여되지 않게 합니다. [Toss Payments](https://docs.tosspayments.com/guides/v2/payment-widget/integration) · [Lemon Squeezy](https://docs.lemonsqueezy.com/help/payments/merchant-of-record) · [Apple](https://developer.apple.com/app-store/review/guidelines/) · [Google Play](https://support.google.com/googleplay/android-developer/answer/9858738)

출처 확인: 2026-09-21. 조건은 바뀔 수 있습니다.
