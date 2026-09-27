---
kind: concept
articleId: perforce-p4
lang: ko
title: Perforce P4
summary: 배타적 파일 편집 설정이 필요한 자산 작업 흐름에 맞는 버전 관리.
category: version-control-systems
aliases:
  - Perforce P4
  - P4
  - Helix Core
  - Perforce
  - 퍼포스
  - ヘリックスコア
related:
  - git
  - subversion
  - mercurial
  - tools
status: published
revision: 1
sourceRevision: 1
updated: "2026-09-27"
checked: "2026-09-27"
comparison:
  features: 서버·작업 공간·변경 목록
  advantages: 병합 어려운 자산 조율
  limitations: 잠금 대기와 서버 운영
  suitable: 바이너리 모델을 공유하는 팀
  combinations: 자산 도구와 파일 형식 설정
---

## 왜 필요한가

레이싱 게임 팀이 3D 차량 모델을 만듭니다. 같은 바이너리 모델에 두 제작자가 가한 변경은 유용하게 병합하기 어렵습니다. 텍스트 브랜치 병렬 작업보다 배타적 편집 조율이 중요합니다.

## 어떻게 해결하는가

모델 파일 형식을 binary+l로 설정합니다. 한 제작자가 편집을 위해 열면 다른 제작자의 열기는 거절됩니다. 완성한 변경 목록을 submit한 뒤 다음 제작자가 sync하고 편집합니다.

## 무엇이라 부르는가

Perforce P4는 이전 이름이 Helix Core인 버전 관리로 서버와 작업 공간을 사용합니다. 배타적 열기에는 +l 설정이 필요하며 p4 lock만으로 다른 열기를 막지는 않습니다. 잠금 대기와 서버 운영·라이선스를 고려해야 합니다.

[출처](https://help.perforce.com/helix-core/server-apps/cmdref/current/Content/P4Guide/resolve.lock.exclusive.html)
