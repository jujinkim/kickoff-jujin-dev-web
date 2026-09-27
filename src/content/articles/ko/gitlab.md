---
kind: concept
articleId: gitlab
lang: ko
title: GitLab
summary: 하나의 작업 흐름에서 MR과 설정된 CI를 연결하는 Git 협업.
category: repository-hosting
aliases:
  - GitLab
  - 깃랩
  - ギットラボ
related:
  - git
  - github
  - gitea
  - azure-repos
  - tools
status: published
revision: 1
sourceRevision: 1
updated: "2026-09-27"
checked: "2026-09-27"
comparison:
  features: MR과 설정된 CI 연결
  advantages: 검사 결과 옆에서 변경 논의
  limitations: runner 용량·규칙 설정 필요
  suitable: GitLab 검토·CI를 유지하는 팀
  combinations: Git과 호스팅형·직접 운영형 GitLab
---

## 왜 필요한가

사내 휴가 앱에서 직원이 휴가를 신청합니다. 개발자는 잔여 일수 규칙 변경을 자동 검사와 함께 검토해야 합니다. 다른 호스팅 도입보다 기존 GitLab에서 논의와 CI를 함께 유지하는 일이 중요합니다.

## 어떻게 해결하는가

MR을 열면 설정된 CI 규칙이 runner에서 잔여 일수 검사를 실행합니다. 실패하면 수정하고 다시 실행한 뒤 검토자가 병합을 판단합니다.

## 무엇이라 부르는가

GitLab은 Git 호스팅·MR·CI를 연결합니다. 검사에는 설정과 runner 용량이 필요합니다. MR 파이프라인은 소스 브랜치를 검사하며 병합 결과를 자동 검사하지는 않습니다. 서비스 이용과 직접 운영은 책임이 다릅니다.

[출처](https://docs.gitlab.com/ci/pipelines/merge_request_pipelines/)
