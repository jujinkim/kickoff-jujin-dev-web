---
kind: concept
articleId: subversion
lang: ko
title: Apache Subversion
summary: 기존 SVN 저장소와 작업 흐름을 유지하는 팀을 위한 중앙 집중형 버전 관리.
category: version-control-systems
aliases:
  - Apache Subversion
  - Subversion
  - SVN
  - svn
  - 서브버전
  - サブバージョン
related:
  - git
  - mercurial
  - perforce-p4
  - tools
status: published
revision: 1
sourceRevision: 1
updated: "2026-09-27"
checked: "2026-09-27"
comparison:
  features: 작업 사본과 중앙 이력
  advantages: 기존 SVN 도구 유지
  limitations: 중앙 커밋에 저장소 접근 필요
  suitable: 기존 중앙 집중형 협업
  combinations: SVN 클라이언트와 SVN 서버
---

## 왜 필요한가

사내 업무 매뉴얼은 직원에게 장비 신청 방법을 안내합니다. 편집자는 기존 SVN 저장소로 문서를 수정합니다. 연결 없이 로컬 커밋하기보다 중앙 작업 흐름 유지가 중요합니다.

## 어떻게 해결하는가

작업 사본을 update하고 신청 안내를 고친 뒤 차이를 확인합니다. commit하면 중앙 저장소에 기록되고 다른 편집자가 update해 받습니다. 충돌하면 수정 내용을 조정한 뒤 다시 시도합니다.

## 무엇이라 부르는가

Apache Subversion, 즉 SVN은 중앙 집중형 버전 관리입니다. 오프라인 편집은 가능하지만 이력 커밋에는 저장소 접근이 필요합니다. 로컬 커밋에는 Git·Mercurial이 맞으며 전환 시 도구와 이력도 이전해야 합니다.

[출처](https://subversion.apache.org/)
