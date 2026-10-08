---
kind: "concept"
articleId: "openspec"
lang: "ko"
title: "OpenSpec"
summary: "합의한 동작을 바꿀 때 현재 명세와 검토한 변경 제안·차이를 함께 유지합니다."
category: "agent-workflows"
aliases: ["openspec", "OpenSpec", "오픈스펙", "オープンスペック"]
related: ["no-extra-skills", "spec-kit", "superpowers", "tools", "srs"]
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-10-08"
checked: "2026-10-08"
comparison:
  {
    "features": "현재 명세와 제안한 변경 차이",
    "advantages": "바뀌는 규칙과 보존할 규칙이 드러남",
    "limitations": "기록과 코드를 일치시켜야 함",
    "suitable": "합의한 동작의 검토 가능한 변경",
    "combinations": "범위가 정해진 실행 스킬과 기존 프로젝트 규칙",
  }
---

## 왜 필요한가

도예 수업 사이트에서 회원은 수업을 예약하고 확인을 받습니다. 일정 변경을 추가해도 기존 확인 규칙은 유지해야 합니다. 관리자는 바뀌는 내용을 정확히 검토하고 결정을 남기고 싶습니다. 문구 수정만이라면 더 적은 기록이 맞습니다.

## 어떻게 해결하는가

현재 예약 확인 요구를 유지합니다. 일정 변경 규칙과 새 시나리오·작업을 제안하고 검토·구현한 뒤 두 동작을 점검합니다. 명세를 일치시키고 변경 기록을 보관합니다.

## 무엇이라 부르는가

OpenSpec은 코딩 에이전트를 위해 명세·변경 산출물을 관리합니다. 이해가 깊어지면 기록을 수정할 수 있고 새 프로젝트도 지원합니다. 변경 차이의 유지와 설치 비용이 이점을 뒷받침해야 합니다.

[출처](https://github.com/Fission-AI/OpenSpec)
