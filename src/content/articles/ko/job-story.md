---
kind: "concept"
articleId: "job-story"
lang: "ko"
title: "잡 스토리"
summary: "해결책을 정하기 전에 상황과 원하는 변화를 설명합니다."
category: "requirements"
aliases: ["잡 스토리", "Job story"]
related: ["srs", "user-story", "use-case"]
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-09-22"
checked: "2026-09-22"
comparison:
  {
    "features": "상황·동기·기대 결과",
    "advantages": "여러 해결책 검토 가능",
    "limitations": "가정한 동기는 조사로 확인 필요",
    "suitable": "UI 선택 전 필요 탐색",
    "combinations": "사용자 스토리 개발 단위와 유스케이스 실패 경로",
  }
---

## 개념

잡 스토리는 해결책을 고르기 전에 상황·동기·기대 결과를 연결합니다. 탐색을 시작하는 문장이며 인수 테스트는 아닙니다. [출처](https://www.intercom.com/blog/using-job-stories-design-features-ui-ux/)

## 예시

가상의 로그인한 통근자, 아직 저장하지 않은 A17:

1. 이동 중 읽기를 멈춰야 할 때,
2. A17로 돌아올 방법을 남기고 싶다.
3. 나중에 마저 읽을 수 있도록.

링크 저장이나 링크를 담은 알림을 검토합니다. 어느 쪽도 오프라인 읽기를 보장하지 않습니다. 저장을 선택한다면 중복 저장과 쓰기 실패는 별도로 논의합니다.

## 추천 조건

상황에 따라 필요가 달라질 때 적합합니다. 가정한 동기는 조사로 확인하고, 사용자 스토리의 개발 단위와 유스케이스의 경로를 보완하세요.
