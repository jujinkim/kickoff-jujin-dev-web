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
revision: 2
sourceRevision: 2
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

성공할 때의 기능 설명만으로는 저장 실패와 재시도가 빠집니다. 목표 달성 여부를 경로별로 따라가 볼 필요가 있습니다.

## 어떻게 해결하는가

가상 사전 조건: 로그인한 통근자, 미저장 A17, 처음에는 저장소 이용 가능.

1. 독자가 A17 링크 저장을 요청합니다.
2. 시스템이 A17을 확인합니다.
3. 시스템이 항목 1건을 기록합니다.
4. 시스템이 성공을 알립니다.

쓰기 전에 실패하면 미저장을 알리고 1단계부터 재시도합니다. 성공한 저장을 반복해도 1건을 유지합니다. 링크 저장은 오프라인 읽기를 보장하지 않습니다.

## 무엇이라 부르는가

유스케이스는 행위자의 목표를 달성하기 위한 상호작용과 성공·실패 경로를 기술합니다. 다이어그램만으로 전체 이야기를 대신할 수는 없습니다. [출처](https://alistaircockburn.com/Unifying%20us%20uc%20sm.pdf)

사용자 스토리로 개발 단위를 나누고 잡 스토리로 동기를 기록하세요. 품질 요구사항은 별도로 다룹니다.
