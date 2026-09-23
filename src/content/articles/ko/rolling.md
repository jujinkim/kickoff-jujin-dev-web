---
kind: concept
articleId: rolling
lang: ko
title: 롤링
summary: 준비된 복제본을 순차 교체합니다.
category: release-replacement
aliases:
  - 롤링
related:
  - shipping
  - blue-green
  - canary
status: published
revision: 3
sourceRevision: 3
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  features: 복제본 점진 교체
  advantages: 준비된 구버전이 계속 처리
  limitations: 혼합 버전 호환성 필요
  suitable: 복제 서비스
  combinations: 카나리 검사 후 롤링 교체
---

## 왜 필요한가

날씨 알림은 복제본 네 개를 바꾸는 동안에도 계속 제공돼야 합니다.

여러 복제본을 한꺼번에 교체하지 않고 업데이트하고 싶습니다. 이전 버전과 새 버전이 섞이는 시간을 다룰 방법이 필요합니다.

## 어떻게 해결하는가

준비된 v1 복제본 4개와 여유 슬롯 하나로 시작합니다. 다음은 v2 추가·준비 검사·v1 제거 순서로 진행합니다. v2 4개가 될 때까지 반복합니다. 준비 실패는 기존 복제본 제거 전에 교체를 멈춥니다. 이전은 앞 단계로, 초기화·새로고침은 v1 4개로 돌아갑니다. 이 예제 정책은 사용 불가 복제본을 0개로 제한하지만 준비 상태가 올바른 동작을 증명하지는 않습니다.

## 무엇이라 부르는가

롤링 릴리스는 복제본을 점진적으로 교체합니다. 구버전과 신버전이 공존하므로 계약과 공유 데이터가 호환되어야 합니다.

교체 전에 카나리 검사를 둘 수 있습니다.

[출처](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)
