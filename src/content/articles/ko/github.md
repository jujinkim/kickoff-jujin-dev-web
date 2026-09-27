---
kind: concept
articleId: github
lang: ko
title: GitHub
summary: 기여자가 이미 GitHub를 쓰는 환경을 위한 Git 호스팅과 PR 협업.
category: repository-hosting
aliases:
  - GitHub
  - 깃허브
  - 깃헙
  - ギットハブ
related:
  - git
  - gitlab
  - codeberg
  - gitea
  - tools
status: published
revision: 1
sourceRevision: 1
updated: "2026-09-27"
checked: "2026-09-27"
comparison:
  features: Git 호스팅과 PR
  advantages: 외부 기여 검토
  limitations: 요금제·권한 확인 필요
  suitable: 기여자가 이미 GitHub를 쓰는 프로젝트
  combinations: 로컬 Git과 호스팅 검토
---

## 왜 필요한가

공개 날씨 위젯이 지역 사이트에 비 예보를 보여 줍니다. 자원봉사자가 표시 수정을 제안합니다. 기여자는 이미 GitHub를 쓰며 서버 운영보다 모두에게 쓰기 권한을 주지 않고 기여를 받는 일이 중요합니다.

## 어떻게 해결하는가

기여자가 자기 fork에 브랜치를 push하고 PR을 엽니다. 관리자는 차이를 검토하고 수정을 요청한 뒤 병합합니다. 제안만으로 main 브랜치에 반영되지는 않습니다.

## 무엇이라 부르는가

GitHub는 Git 저장소와 협업을 제공합니다. Git은 이력을 기록하고 GitHub는 검토·접근 도구를 더합니다. 다른 호스팅도 PR을 지원합니다. 비영리 공동체에는 Codeberg, 직접 운영에는 Gitea가 맞을 수 있습니다.

[출처](https://docs.github.com/en/get-started/start-your-journey/what-is-github)
