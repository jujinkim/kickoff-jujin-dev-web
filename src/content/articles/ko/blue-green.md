---
kind: concept
articleId: blue-green
lang: ko
title: 블루·그린
summary: 트래픽을 돌려도 데이터는 남습니다.
category: release-replacement
aliases:
  - 블루·그린
related:
  - shipping
  - rolling
  - canary
status: published
revision: 4
sourceRevision: 4
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  features: 준비된 두 환경의 트래픽 전환
  advantages: 구환경을 복귀용으로 유지
  limitations: 추가 용량과 데이터 호환 필요
  suitable: 제어 가능한 트래픽 전환
  combinations: 전체 전환 전 카나리 평가
---

## 왜 필요한가

하루 종일 주문이 들어오는 온라인 상점을 운영한다고 가정해 봅시다. 새 버전이 주문 확인 절차를 바꾸므로, 고객에게 적용하기 전에 동작을 확인해야 합니다.

온라인 상점은 결제 트래픽을 옮기기 전에 새 버전을 확인해야 합니다.

운영 환경을 바로 덮어쓰면 이전 상태로 돌아가기 어렵습니다. 대체 환경을 먼저 검증하고 사용자 트래픽을 옮길 수 있어야 합니다.

## 어떻게 해결하는가

처음에는 블루 v1이 모든 트래픽을 받고 그린 v2는 대기합니다. 다음은 그린을 검증한 뒤 트래픽을 전환합니다. 검증 실패는 전환을 막습니다. 전환 후 주문 영수증 저장은 호환되는 공유 데이터에 기록합니다. 장애·복귀는 트래픽을 블루로 돌리지만 주문 영수증은 남깁니다. 이전도 쓰기를 지우지 않고 경로 단계를 되돌립니다. 초기화·새로고침은 시뮬레이션 전체를 지웁니다.

## 무엇이라 부르는가

블루·그린 배포는 환경 두 개를 준비하고 실제 트래픽이 향하는 곳을 바꿉니다. 경로를 되돌려도 데이터베이스 쓰기는 취소되지 않습니다.

데이터 호환성과 복구는 별도로 계획하세요.

[출처](https://martinfowler.com/bliki/BlueGreenDeployment.html)
