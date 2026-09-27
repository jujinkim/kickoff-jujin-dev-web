---
kind: concept
articleId: azure-repos
lang: ko
title: Azure Repos
summary: 기존 Azure DevOps 흐름에서 브랜치 정책을 적용하는 저장소 협업.
category: repository-hosting
aliases:
  - Azure Repos
  - Azure DevOps
  - 애저 리포스
  - アジュールリポジトリ
related:
  - git
  - github
  - gitlab
  - bitbucket
  - tools
status: published
revision: 1
sourceRevision: 1
updated: "2026-09-27"
checked: "2026-09-27"
comparison:
  features: Git PR과 설정된 브랜치 정책
  advantages: Azure DevOps 협업 유지
  limitations: 정책·우회 권한 검토 필요
  suitable: 기존 Azure DevOps 팀
  combinations: Git·검토·빌드 검증 조합
---

## 왜 필요한가

시설 예약 앱에서 직원이 회의실을 예약합니다. 팀은 이미 Azure DevOps를 쓰며 예약 충돌 수정을 main 반영 전에 검토하고 싶습니다. 프로젝트의 권한과 검사를 함께 유지하는 점이 선택 이유입니다.

## 어떻게 해결하는가

Git 브랜치를 push하고 PR을 엽니다. 예시의 main은 검토자 승인과 빌드 검증을 요구합니다. 예약 검사 실패 시 완료가 보류되며 수정 후 필수 검사와 검토를 거쳐 병합합니다.

## 무엇이라 부르는가

Azure Repos는 Azure DevOps의 저장소 서비스입니다. Git 브랜치 정책은 설정해야 하며 우회 권한도 중요합니다. TFVC도 지원합니다. 여기에 코드를 보관한다고 앱을 Azure에서 실행해야 하는 것은 아닙니다.

[출처](https://learn.microsoft.com/en-us/azure/devops/repos/get-started/what-is-repos?view=azure-devops)
