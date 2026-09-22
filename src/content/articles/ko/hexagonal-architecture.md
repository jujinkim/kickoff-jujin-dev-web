---
kind: "concept"
articleId: "hexagonal-architecture"
lang: "ko"
title: "헥사고날 아키텍처"
summary: "기술과 독립적인 포트로 애플리케이션 동작을 감쌉니다."
category: "boundaries"
aliases: ["헥사고날 아키텍처"]
related: ["architecture", "layered-architecture", "clean-architecture"]
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-09-22"
checked: "2026-09-22"
comparison:
  {
    "features": "애플리케이션 포트와 외부 어댑터",
    "advantages": "메모리 어댑터로 저장 동작 테스트",
    "limitations": "포트·어댑터로 간접 단계 증가",
    "suitable": "진입점이나 저장 구현이 여러 개인 경우",
    "combinations": "내부 정책에 클린 아키텍처 적용 가능",
  }
---

## 개념

헥사고날 아키텍처는 포트와 기술별 어댑터로 애플리케이션을 연결합니다. 육각형이 구성요소 여섯 개를 요구하는 것은 아닙니다. [Cockburn](https://alistair.cockburn.us/hexagonal-architecture)

## 예시

1. 가상 단일 프로세스: R1, A17 미저장. HTTP·CLI 어댑터가 입력 포트로 SaveArticle을 호출합니다.
2. SaveArticle이 ID를 검증한 뒤 SaveRepository를 통해 메모리·내장 데이터베이스 어댑터를 호출합니다. 두 저장 어댑터는 애플리케이션 소유 포트에 의존합니다. 애플리케이션은 구현을 직접 참조하지 않습니다.
3. 저장 완료: 0 → 1건, 반복해도 1건. 빈 ID나 쓰기 전 실패는 0건 유지, 문제 수정 후 재시도.

## 추천 조건

외부 연결부의 테스트·교체에 유용하지만 포트로 간접 단계가 늘어납니다. 내부 정책에는 클린 아키텍처의 의존 규칙을 적용할 수 있습니다.
