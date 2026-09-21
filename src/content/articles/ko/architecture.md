---
kind: guide
articleId: "architecture"
lang: "ko"
title: "아키텍처와 SOLID·GRASP: 약어 숭배 금지"
summary: "약어를 외우는 대신 변경의 비용을 따져봅니다."
category: "planning"
aliases:
  [
    "SOLID",
    "GRASP",
    "architecture",
    "아키텍처",
    "응집도",
    "アーキテクチャ",
    "凝集度",
  ]
related: ["ooad", "adr"]
example: "layers"
status: "published"
revision: 2
sourceRevision: 2
updated: "2026-09-21"
aiPrompt: "실제 변경 하나가 우리 코드를 통과하는 경로를 추적해줘. 의존 방향과 잘못 배치된 책임을 보여줘. 어떤 SOLID·GRASP 원칙이 도움이 되는지, 복잡성은 얼마나 늘어나는지 설명해줘. 경계를 바꾸기 전에 질문하고 가장 작은 리팩터링과 동작 보존 검증을 제안해줘."
---

## 개념

아키텍처는 경계와 의존 방향을 정합니다. SOLID와 GRASP는 책임 배치를 돕는 원칙이지 폴더 양식이 아닙니다.

## 예시

UI → 사용 사례 → 도메인 규칙. 데이터베이스 어댑터가 저장 인터페이스를 구현하며, 도메인 규칙은 데이터베이스 드라이버를 가져오지 않습니다.

## 추천 조건

직접 호출은 단순합니다. 인터페이스는 교체와 테스트를 돕지만 관리할 추상화가 늘어납니다. 관련 규칙을 모으세요. 계층을 늘리기보다 실제 변경이 어려운 지점에 경계를 둡니다. [Microsoft](https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/architectural-principles) · [Craig Larman](https://www.craiglarman.com/wiki/index.php?title=Books_by_Craig_Larman)
