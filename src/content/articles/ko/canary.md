---
kind: concept
articleId: canary
lang: ko
title: 카나리
summary: 제한된 노출을 대조군과 평가합니다.
category: release-replacement
aliases:
  - 카나리
related:
  - shipping
  - rolling
  - blue-green
status: published
revision: 4
sourceRevision: 4
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  features: 제한 노출과 대조군 비교
  advantages: 전체 노출 전에 중단 가능
  limitations: 편향되거나 없는 표본은 위험
  suitable: 결과 측정과 트래픽 제어
  combinations: 롤링·블루그린 완료 전 검사
---

## 왜 필요한가

공연 표 예매 사이트를 운영한다고 가정해 봅시다. 방문자가 좌석을 찾고 예약하는 동안 새 예매 절차를 공개할 준비를 합니다.

공연 표 예약 변경은 실제 방문자 트래픽에서만 실패할 수 있습니다.

테스트를 통과한 변경도 실제 사용자에게는 실패할 수 있습니다. 불확실한 변경을 모두에게 한꺼번에 노출하면 피해가 커집니다.

## 어떻게 해결하는가

가상 집계는 각 집단 요청 1,000건이며 v1 오류 2건, v2 오류 30건입니다. 다음은 0.2%와 3%를 계산하고 이 연습의 1% 초과 중단 규칙을 적용합니다. 후보 트래픽은 v1으로 돌아갑니다. 표본 없음을 선택하면 요청 0건은 성공이 아닌 판단 불가입니다. 이전은 앞 계산으로, 초기화·새로고침은 기본 집계로 돌아갑니다.

## 무엇이라 부르는가

카나리 릴리스는 일부 사용자에게 후보 버전을 노출하고 대조군과 결과를 비교한 뒤 확대를 결정합니다. 유용한 신호에는 대표성 있는 표본이 필요합니다.

예제 기준을 일반화하지 말고 롤링·블루그린과 조합하세요.

[출처](https://sre.google/workbook/canarying-releases/)
