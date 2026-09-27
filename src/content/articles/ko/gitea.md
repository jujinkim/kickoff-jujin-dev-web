---
kind: concept
articleId: gitea
lang: ko
title: Gitea
summary: 서비스 운영을 맡을 팀을 위한 직접 호스팅 가능한 Git 협업.
category: repository-hosting
aliases:
  - Gitea
  - 기티아
  - ギティア
  - self-hosted Git
related:
  - git
  - gitlab
  - github
  - codeberg
  - tools
status: published
revision: 1
sourceRevision: 1
updated: "2026-09-27"
checked: "2026-09-27"
comparison:
  features: 직접 호스팅하는 Git·검토
  advantages: 서비스 인스턴스 통제
  limitations: 업데이트·복구·서버 비용
  suitable: 운영 담당자가 있는 팀
  combinations: Git·자체 서버·백업 절차
---

## 왜 필요한가

동아리 장비 대여 앱이 카메라 대여자를 기록합니다. 개발자는 자체 서버에 코드 저장소를 두고 싶고 운영 담당자도 있습니다. 관리 작업을 줄이기보다 서비스 통제가 중요합니다.

## 어떻게 해결하는가

회원은 동아리 Gitea 서버에 push하고 변경을 검토합니다. 운영자는 권한·업데이트·백업을 관리합니다. 복구 연습에서 저장소·데이터베이스·설정을 함께 확인합니다.

## 무엇이라 부르는가

Gitea는 직접 호스팅 가능한 Git 협업 소프트웨어입니다. 이 인스턴스는 동아리가 운영하므로 서버 비용과 복구 작업이 남습니다. GitLab도 직접 운영할 수 있습니다. 관리할 사람이 없다면 관리형 호스팅이 맞습니다.

[출처](https://docs.gitea.com/)
