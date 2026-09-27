---
articleId: payments
lang: ko
sourceRevision: 8
sources:
  - title: "Stripe: fulfill orders"
    url: "https://docs.stripe.com/checkout/fulfillment"
    claim: 지급은 반복 실행에 안전해야 하며 리디렉션이 아닌 신뢰할 결제 상태를 사용해야 합니다.
    checked: "2026-09-27"
  - title: "Lemon Squeezy: merchant of record"
    url: "https://docs.lemonsqueezy.com/help/payments/merchant-of-record"
    claim: 대행 판매 의무를 설명하며 남는 상품 책임과 자격은 실제 계약으로 확인합니다.
    checked: "2026-09-27"
---

## 선택·비교

상품·시장·판매자 소재를 확인한 뒤 결제 구조를 선택합니다. 직접 판매는 거래 의무를 유지하고 공식 판매 대행은 계약 범위의 판매자 역할을 맡습니다. 스토어 결제는 해당 유통 경로에 적용됩니다. 결제 업체 이름이 모든 책임을 정하지는 않습니다.

## 응용 사례

온라인 강좌는 주문·결제사 결제·권한 기록을 연결합니다. 대기 결과는 강좌를 열지 않습니다. 검증 이벤트가 중복돼도 권한은 하나이며 지급에 실패한 결제 완료 주문은 재청구 없이 복구할 수 있어야 합니다.

## 구현 참고·주의점

신뢰할 서버에서 서명과 주문 금액·통화·신원·완료 상태를 검증합니다. 동시 처리에도 멱등성을 영속 기록하고 누락 이벤트를 대조하며 환불 후 접근을 정합니다. 도표는 제공자에 연결하지 않으며 자격·세금 준수·거래 보안을 입증하지 않습니다.
