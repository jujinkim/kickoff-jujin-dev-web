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
revision: 1
sourceRevision: 1
updated: "2026-09-21"
aiPrompt: "실제 변경 하나가 우리 코드를 통과하는 경로를 추적해줘. 의존 방향과 잘못 배치된 책임을 보여줘. 어떤 SOLID·GRASP 원칙이 도움이 되는지, 복잡성은 얼마나 늘어나는지 설명해줘. 경계를 바꾸기 전에 질문하고 가장 작은 리팩터링과 동작 보존 검증을 제안해줘."
---

## 개념

아키텍처는 경계와 의존 방향을 정합니다. SOLID는 단일 책임, 개방·폐쇄, 치환 가능성, 인터페이스 분리, 의존성 역전을 다룹니다. GRASP는 정보 전문가, 생성자, 컨트롤러, 낮은 결합도, 높은 응집도 같은 책임 배정 지침입니다. 만들 폴더 목록이 아니라 던질 질문입니다.

## 필요한 상황

저장소를 바꾸면 업무 규칙이 깨지거나, UI가 가격을 정하거나, 모든 테스트에 DB가 필요할 때 씁니다. 새 계층을 추가하기 전에 실제로 아픈 변경부터 찾으세요.

## 예시

가격 계산은 세금 정책 인터페이스에 의존하고 애플리케이션이 구현을 주입합니다. DB 어댑터는 저장 포트를 구현합니다. 그러면 DB 없이 계산을 검사할 수 있습니다. 의존성 역전은 소스 의존 방향이지 사용자의 클릭 순서를 뒤집는 일이 아닙니다.

```text
UI -> use case -> domain rules
         |
         v
     storage port <- database adapter
Domain rules do not import the UI or database driver.
```

## 선택지와 tradeoff

직접 호출은 코드가 적지만 구현에 묶입니다. 포트는 교체와 검증을 쉽게 하지만 유지할 추상화가 늘어납니다. SRP는 파일마다 메서드 하나가 아니라 일관된 변경 이유 하나입니다. 리스코프 치환은 메서드 이름뿐 아니라 동작 계약도 지켜야 합니다.

## 추천 조건

관련 규칙은 모으고, 고객 코드가 요구하는 기능이 다를 때 인터페이스를 나누세요. 실제 외부 경계에 포트를 둡니다. GRASP 정보 전문가로 규칙에 필요한 정보를 가진 곳에 책임을 놓고 컨트롤러로 사용 사례를 조율하세요. 상자 19개보다 측정 가능한 개선 하나가 낫습니다.

## AI 지시 예시

실제 변경 하나가 우리 코드를 통과하는 경로를 추적해줘. 의존 방향과 잘못 배치된 책임을 보여줘. 어떤 SOLID·GRASP 원칙이 도움이 되는지, 복잡성은 얼마나 늘어나는지 설명해줘. 경계를 바꾸기 전에 질문하고 가장 작은 리팩터링과 동작 보존 검증을 제안해줘.

## 관련 글과 출처

- [OOAD와 책임 분리: 객체마다 할 일 하나](/ko/guides/ooad/)
- [Design Decision과 ADR: 결정의 흔적](/ko/guides/adr/)

- [Microsoft — Architecture principles](https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/architectural-principles)
- [Craig Larman — Applying UML and Patterns](https://www.craiglarman.com/wiki/index.php?title=Books_by_Craig_Larman)
