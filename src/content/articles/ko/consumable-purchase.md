---
kind: "concept"
articleId: "consumable-purchase"
lang: "ko"
title: "소모성 구매"
summary: "구매한 수량이 사용하면서 줄어듭니다."
category: "purchase-types"
aliases: ["소모성 구매", "Consumable purchase"]
related: ["revenue", "non-consumable-purchase", "prepaid-credits", "freemium"]
status: "published"
revision: 4
sourceRevision: 4
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  {
    "features": "사용하면 수량 소모",
    "advantages": "반복 구매 가능",
    "limitations": "잔액과 지출 설명 필요",
    "suitable": "선택적 소모 아이템",
    "combinations": "프리미엄 무료 접근",
  }
---

## 왜 필요한가

막혔을 때 힌트를 쓸 수 있는 낱말 퍼즐 앱을 만든다고 가정해 봅시다. 플레이어는 힌트 하나를 받아 같은 퍼즐을 계속 풉니다.

낱말 퍼즐의 힌트는 사용할 때마다 하나씩 줄어드므로 무제한 해제로는 그 소비를 나타낼 수 없습니다.

## 어떻게 해결하는가

가상 낱말 퍼즐 앱의 힌트는 처음에 0개입니다. 3개를 구매하고 반복 사용하면 잔액이 0까지 줄고 추가 사용이 차단됩니다. 다시 묶음을 구매하면 3개가 추가됩니다. 페이지 안의 가상 예제로 실제 구매는 처리하지 않습니다. 가격·세금·수수료·환불은 생략했으며 초기화·새로고침은 예제를 지웁니다.

## 무엇이라 부르는가

소모성 구매는 사용하면 소진되고 다시 구매할 수 있는 단위를 제공합니다. 비소모성 기능 이용 권리와 다릅니다.

무료 접근과 조합하면서 잔액과 지출을 명확히 보여주세요.

[출처](https://developer.apple.com/help/app-store-connect/reference/in-app-purchases-and-subscriptions/in-app-purchase-types)
