---
kind: concept
articleId: mercurial
lang: ko
title: Mercurial
summary: 기존 hg 작업 흐름에 맞는 공유 단계 기반 분산 버전 관리.
category: version-control-systems
aliases:
  - Mercurial
  - hg
  - 머큐리얼
  - マーキュリアル
related:
  - git
  - subversion
  - perforce-p4
  - tools
status: published
revision: 1
sourceRevision: 1
updated: "2026-09-27"
checked: "2026-09-27"
comparison:
  features: 공유 단계가 있는 분산 이력
  advantages: 기존 hg 자동화 유지
  limitations: 호스팅·확장 호환성 확인 필요
  suitable: Mercurial을 이미 쓰는 팀
  combinations: hg 클라이언트와 호환 저장소
---

## 왜 필요한가

번역 도구에서 자원봉사자가 화면 문구를 고칩니다. 유지보수 팀은 이미 hg 스크립트를 씁니다. Git으로 이전하지 않고 수정 가능한 작업과 공유된 이력을 구분하고 싶습니다.

## 어떻게 해결하는가

문구 수정을 로컬에 draft로 커밋합니다. 팀의 publishing 저장소로 push하면 양쪽에서 public 단계가 됩니다. 이력을 고치기 전에 단계를 확인합니다.

## 무엇이라 부르는가

Mercurial은 분산 버전 관리입니다. 단계는 접근 권한이 아닌 공유 상태이므로 public이 인터넷 공개 저장소를 뜻하지 않습니다. non-publishing 원격에서는 draft를 교환할 수 있습니다. 필수 연동이 Git을 요구하면 Git이 더 맞을 수 있습니다.

[출처](https://www.mercurial-scm.org/help/topics/phases)
