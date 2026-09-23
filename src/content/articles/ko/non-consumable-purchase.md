---
kind: "concept"
articleId: "non-consumable-purchase"
lang: "ko"
title: "비소모성 구매"
summary: "반복 사용해도 구매한 권한이 유지됩니다."
category: "purchase-types"
aliases: ["비소모성 구매", "Non-consumable purchase"]
related: ["revenue", "consumable-purchase", "one-time-payment", "freemium"]
status: "published"
revision: 4
sourceRevision: 4
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  {
    "features": "유지되는 구매 권한",
    "advantages": "소진 없이 반복 사용",
    "limitations": "구매 복원 구현 필요",
    "suitable": "지속되는 선택 기능",
    "combinations": "프리미엄 무료 모델과 일회성 결제",
  }
---

## 왜 필요한가

어두운 화면 옵션이 있는 야간 퍼즐 앱을 만든다고 가정해 봅시다. 플레이어는 상점에서 테마를 산 뒤 다음에 게임을 열어도 다시 선택할 수 있길 기대합니다.

야간 퍼즐의 어두운 테마를 한 번 산 이용자는 다음 판에서도 계속 쓰길 기대합니다.

## 어떻게 해결하는가

가상 야간 퍼즐 앱의 야간 테마는 처음에 잠겨 있습니다. 한 번 구매하고 반복 적용해도 소유 권한은 유지되고 구매 횟수는 1입니다. 이 예제에서 재구매 시도는 다시 청구하지 않습니다. 실제 구매 복원은 구현 범위 밖입니다. 가격·세금·수수료·환불은 생략했으며 초기화는 예제만 지웁니다.

## 무엇이라 부르는가

비소모성 구매는 사용해도 줄거나 만료되지 않는 이용 권한을 엽니다. 소모성 수량이나 반복 구독과 다릅니다.

무료 접근과 조합하고 구매 복원은 별도로 설계하세요.

[출처](https://developer.apple.com/help/app-store-connect/reference/in-app-purchases-and-subscriptions/in-app-purchase-types)
