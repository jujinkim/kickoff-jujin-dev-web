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
revision: 1
sourceRevision: 1
updated: "2026-09-22"
checked: "2026-09-22"
comparison:
  features: 준비된 두 환경의 트래픽 전환
  advantages: 구환경을 복귀용으로 유지
  limitations: 추가 용량과 데이터 호환 필요
  suitable: 제어 가능한 트래픽 전환
  combinations: 전체 전환 전 카나리 평가
---

## 개념

블루·그린 배포는 환경 두 개를 준비하고 실제 트래픽이 향하는 곳을 바꿉니다. 경로를 되돌려도 데이터베이스 쓰기는 취소되지 않습니다.

## 예시

처음에는 블루 v1이 모든 트래픽을 받고 그린 v2는 대기합니다. 다음은 그린을 검증한 뒤 트래픽을 전환합니다. 검증 실패는 전환을 막습니다. 전환 후 A17 저장은 호환되는 공유 데이터에 기록합니다. 장애·복귀는 트래픽을 블루로 돌리지만 A17은 남깁니다. 이전도 쓰기를 지우지 않고 경로 단계를 되돌립니다. 초기화·새로고침은 시뮬레이션 전체를 지웁니다.

## 추천 조건

두 환경의 용량과 경로 제어가 가능할 때 적합합니다. 데이터 호환성과 복구는 별도로 계획하세요.

[출처](https://martinfowler.com/bliki/BlueGreenDeployment.html)
