---
kind: concept
articleId: git
lang: ko
title: Git
summary: 로컬 작업을 위한 분산 이력·브랜치와 별도로 선택하는 저장소 호스팅.
category: version-control-systems
aliases:
  - Git
  - git
  - 깃
  - ギット
related:
  - github
  - mercurial
  - subversion
  - tools
status: published
revision: 1
sourceRevision: 1
updated: "2026-09-27"
checked: "2026-09-27"
comparison:
  features: 로컬 커밋과 브랜치
  advantages: 공유 전에도 작업 가능
  limitations: 충돌 검토 필요
  suitable: 로컬 이력과 Git 호환 도구가 필요한 팀
  combinations: Git과 저장소 호스팅 조합
---

## 왜 필요한가

여행 일정 웹사이트에서 친구들이 날짜별 방문지를 정합니다. 개발자는 오프라인에서도 실험을 나누고 싶습니다. 로컬 이력과 Git 호환 호스팅이 우선이며, 기존 SVN 도구 유지가 우선이라면 Subversion이 맞습니다.

## 어떻게 해결하는가

로컬 브랜치에 새 방문지를 커밋해도 원격에는 아직 없습니다. 연결 후 브랜치를 push하고 동료가 fetch합니다. 양쪽 이력을 확인하며 push가 거절되면 이력을 조정합니다.

## 무엇이라 부르는가

Git은 분산 버전 관리 시스템입니다. commit은 로컬에 기록하고 push는 다른 저장소와 공유합니다. GitHub 같은 호스팅은 Git에 협업 기능을 더합니다. 충돌 해결에는 판단이 필요합니다.

[출처](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)
