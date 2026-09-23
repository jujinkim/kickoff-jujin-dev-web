---
kind: "concept"
articleId: "user-story"
lang: "ko"
title: "사용자 스토리"
summary: "사용자 가치를 작고 검토 가능한 단위로 나눕니다."
category: "requirements"
aliases: ["사용자 스토리", "User story"]
related: ["srs", "use-case", "job-story"]
status: "published"
revision: 4
sourceRevision: 4
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  {
    "features": "사용자 가치와 인수 기준 대화",
    "advantages": "작은 단위로 전달 가능",
    "limitations": "한 문장만으로 세부 조건은 부족",
    "suitable": "점진적 기능 개발 계획",
    "combinations": "유스케이스 경로와 잡 스토리 맥락",
  }
---

## 왜 필요한가

짧은 지역 안내 글을 읽는 앱을 만든다고 가정해 봅시다. 통근자는 출근길에 글을 보고 나중에 처음부터 검색하지 않고 다시 찾고 싶습니다.

통근자는 아침 산책 글을 다시 찾고 싶지만 전체 읽기 목록 기능은 한 번에 검토하기엔 너무 큽니다.

## 어떻게 해결하는가

1. 가상 상황: 로그인한 통근자, 아직 저장하지 않은 아침 산책.
2. 역할 → 목표 → 가치: “독자로서 나중에 다시 찾을 수 있도록 아침 산책 링크를 저장하고 싶다.”
3. 인수 기준: 저장하면 1건, 반복해도 1건. 쓰기 전 실패하면 미저장을 알리고 재시도를 안내합니다.

링크 저장은 오프라인 읽기를 보장하지 않습니다.

## 무엇이라 부르는가

사용자 스토리는 사용자 가치의 작은 단위를 표현하며, 대화와 인수 기준으로 구체화합니다. 역할·목표·가치 문장은 대화의 시작이지 완전한 명세는 아닙니다. [출처](https://agilealliance.org/glossary/user-stories/)

유스케이스로 실패 경로를, 잡 스토리로 상황과 동기를 보완하세요.
