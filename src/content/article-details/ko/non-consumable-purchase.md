---
articleId: non-consumable-purchase
lang: ko
sourceRevision: 6
sources:
  - title: "Apple: in-app purchase types"
    url: "https://developer.apple.com/help/app-store-connect/reference/in-app-purchases-and-subscriptions/in-app-purchase-types"
    claim: 비소모성 상품은 사용으로 만료·차감되지 않으며 복원에는 플랫폼 권한 처리가 필요합니다.
    checked: "2026-09-27"
---

## 선택·비교

야간 퍼즐 테마는 플레이해도 소진되지 않아 지속 해제에 맞습니다. 소모성 힌트는 줄고 구독은 이용 기간에 따릅니다. 비소모성은 권리 동작을 설명하며 일회 판매의 모든 의무를 정의하지는 않습니다.

## 응용 사례

플레이어는 테마를 한 번 사며 사용하거나 구매 버튼을 다시 눌러도 구매 횟수는 1입니다. 데모 세션 동안 테마를 유지합니다. 가격과 실제 스토어 복원은 모사하지 않습니다.

## 구현 참고·주의점

실제 서비스는 거래 검증·복원·권한 철회를 지원해야 합니다. 새로고침은 교육용 예제를 초기화할 뿐 비소모성 정의를 바꾸지 않습니다. 계정 변경과 환불은 브라우저 저장만이 아니라 명시적 권한 규칙이 필요합니다.
