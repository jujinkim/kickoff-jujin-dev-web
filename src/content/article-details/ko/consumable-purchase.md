---
articleId: consumable-purchase
lang: ko
sourceRevision: 6
sources:
  - title: "Apple: in-app purchase types"
    url: "https://developer.apple.com/help/app-store-connect/reference/in-app-purchases-and-subscriptions/in-app-purchase-types"
    claim: 소모품은 사용 시 소진되며 스토어 영수증·지급은 브라우저 모형 밖입니다.
    checked: "2026-09-27"
---

## 선택·비교

낱말 퍼즐에서 힌트마다 개별 사용 가치가 있을 때 맞습니다. 비소모성 구매는 지속 기능을 열고 구독은 기간 접근을 줍니다. 함께 둘 수 있지만 영구 해제를 소모품으로 취급하지 않습니다.

## 응용 사례

플레이어는 힌트 3개 묶음을 사서 한 번에 1개를 씁니다. 0이면 사용을 막고 재구매하면 3개를 더합니다. 묶음 가격과 스토어 판매 조건은 미정이며 구매는 모두 로컬 모형입니다.

## 구현 참고·주의점

영수증을 검증해 거래당 한 번 지급한 뒤 사용을 허용합니다. 기기 간 잔액·환불·오프라인 동작을 정합니다. 로컬 중복 클릭 방지는 서버 원장이나 플랫폼 거래 처리를 대체하지 않습니다.
