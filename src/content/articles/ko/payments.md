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
revision: 1
sourceRevision: 1
updated: "2026-09-21"
aiPrompt: "우리 상품과 판매자 소재지에 맞춰 토스페이먼츠 PG, Lemon Squeezy MoR, 필요한 스토어 결제를 비교해줘. 관할·고객·채널의 누락 정보를 질문해줘. 날짜 있는 공식 근거로 자격, 수수료, 세금 범위, 환불, 정산을 확인해줘. 모르는 것은 밝히고 제공자 선택 전에 물어봐. 서버 검증과 멱등 권한 처리를 요구사항에 포함해줘."
checked: "2026-09-21"
---

## 개념

결제 채널은 웹 체크아웃이나 스토어 결제처럼 고객이 지불하는 경로입니다. PG는 전자결제 처리를 지원합니다. MoR은 고객 거래의 법적 판매 주체입니다. 서로 바꿔 부를 브랜드 이름이 아니라 다른 책임을 설명합니다.

## 필요한 상황

고객, 판매자 소재지, 상품 종류, 배포 채널을 정한 뒤 비교합니다. 세금, 이용 자격, 스토어 정책, 환불, 정산이 가능 여부를 바꿉니다. 실제 관할과 계약의 최신 조건을 확인해야 하며 이 안내서가 개별 사업의 판단을 대신하지 않습니다.

## 예시

토스페이먼츠는 가맹점의 결제 연동을 제공합니다. Lemon Squeezy는 자신을 MoR로 설명하고 서비스 범위에서 판매세·환불 같은 거래 책임을 처리합니다. 일반 PG 계약이 판매자의 모든 의무를 가져간다고 추측하지 마세요. MoR도 제작자의 자체 회계나 상품 책임까지 없애지는 않습니다.

```text
Customer -> permitted checkout channel -> payment provider
Server: verify order + amount -> confirm payment
Verified event -> idempotent entitlement update
Refund / dispute -> reconcile entitlement and records
Never grant access solely from a browser success URL.
```

## 선택지와 tradeoff

PG는 직접 가맹점 결제에 맞지만 직접 운영할 일이 더 남습니다. MoR은 국가 간 거래 업무를 줄일 수 있지만 자격, 정산, 서비스 제약이 있습니다. 모바일 스토어 결제는 별도 정책 문제입니다. 외부 결제 허용은 최신 플랫폼 규칙, 지역, 프로그램에 따라 다릅니다.

## 추천 조건

지원 국가·상품, 정산, 환불, 세금 범위, 수수료, 허용 채널을 최신 계약에서 확인하세요. 보편적인 수수료를 약속하지 마세요. 저장된 주문·금액과 결제를 서버에서 대조하고 신뢰할 수 있는 이벤트를 멱등 처리합니다. 성공 URL은 결제 증명이 아닙니다.

## AI 지시 예시

우리 상품과 판매자 소재지에 맞춰 토스페이먼츠 PG, Lemon Squeezy MoR, 필요한 스토어 결제를 비교해줘. 관할·고객·채널의 누락 정보를 질문해줘. 날짜 있는 공식 근거로 자격, 수수료, 세금 범위, 환불, 정산을 확인해줘. 모르는 것은 밝히고 제공자 선택 전에 물어봐. 서버 검증과 멱등 권한 처리를 요구사항에 포함해줘.

## 관련 글과 출처

- [구독·일회 결제·광고: 가치에 맞춰 청구하기](/ko/guides/revenue/)
- [웹·앱·PC·콘솔: 실행·유통·호스팅 구분](/ko/guides/shipping/)

- [Toss Payments — Payment integration](https://docs.tosspayments.com/guides/v2/payment-widget/integration)
- [Lemon Squeezy — Merchant of Record](https://docs.lemonsqueezy.com/help/payments/merchant-of-record)
- [Apple — App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- [Google Play — Payments policy](https://support.google.com/googleplay/android-developer/answer/9858738)

서비스 문서 확인: 2026-09-21. 제공 범위·정책·계약은 바뀔 수 있으므로 출시 전에 다시 확인하세요.
