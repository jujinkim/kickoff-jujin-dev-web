---
kind: "concept"
articleId: "use-case"
lang: "ko"
title: "유스케이스"
summary: "목표 달성의 성공·실패 경로를 기술합니다."
category: "requirements"
aliases: ["유스케이스", "Use case"]
related: ["srs", "user-story", "job-story"]
status: "published"
revision: 3
sourceRevision: 3
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  {
    "features": "행위자 목표·기본 경로·확장",
    "advantages": "구현 전에 실패 경로 발견",
    "limitations": "점진적 개발을 위한 분할 필요",
    "suitable": "저장·재시도 흐름 설계",
    "combinations": "사용자 스토리 단위와 잡 스토리 맥락",
  }
---

## 왜 필요한가

집에서 요리하는 사람이 주말 요리법을 저장합니다.

## 어떻게 해결하는가

가상 사전 조건: 주말 식사를 준비하는 사람이 주말 요리법 페이지를 아직 저장하지 않았고 저장소를 사용할 수 있습니다.

1. 요리하는 사람이 주말 요리법 링크 저장을 요청합니다.
2. 시스템이 주말 요리법을 확인합니다.
3. 시스템이 항목 1건을 기록합니다.
4. 시스템이 성공을 알립니다.

쓰기 전에 실패하면 미저장을 알리고 1단계부터 재시도합니다. 성공한 저장을 반복해도 1건을 유지합니다. 링크 저장은 오프라인 읽기를 보장하지 않습니다.

## 무엇이라 부르는가

유스케이스는 행위자의 목표를 달성하기 위한 상호작용과 성공·실패 경로를 기술합니다. 다이어그램만으로 전체 이야기를 대신할 수는 없습니다. [출처](https://alistaircockburn.com/Unifying%20us%20uc%20sm.pdf)

사용자 스토리로 개발 단위를 나누고 잡 스토리로 동기를 기록하세요. 품질 요구사항은 별도로 다룹니다.
