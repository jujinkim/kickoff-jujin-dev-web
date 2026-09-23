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
revision: 4
sourceRevision: 4
updated: "2026-09-23"
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

## 왜 필요한가

정원 일을 준비하며 읽는 심기 안내 사이트를 만든다고 가정해 봅시다. 독자는 재배 순서를 살피다가 글을 다 읽기 전에 자리를 떠나기도 합니다.

정원사가 심기 안내를 읽다 떠나며 저장 버튼을 요청합니다.

## 어떻게 해결하는가

가상의 동네 정원사, 아직 저장하지 않은 정원 기록:

1. 정원에서 심기 안내를 다 읽기 전에 돌아갈 때,
2. 정원 기록으로 돌아올 방법을 남기고 싶다.
3. 집에서 심기 계획을 마칠 수 있도록.

링크 저장이나 링크를 담은 알림을 검토합니다. 어느 쪽도 오프라인 읽기를 보장하지 않습니다. 저장을 선택한다면 중복 저장과 쓰기 실패는 별도로 논의합니다.

## 무엇이라 부르는가

잡 스토리는 해결책을 고르기 전에 상황·동기·기대 결과를 연결합니다. 탐색을 시작하는 문장이며 인수 테스트는 아닙니다. [출처](https://www.intercom.com/blog/using-job-stories-design-features-ui-ux/)

가정한 동기는 조사로 확인하고, 사용자 스토리의 개발 단위와 유스케이스의 경로를 보완하세요.
