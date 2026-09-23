---
kind: "concept"
articleId: "clean-architecture"
lang: "ko"
title: "클린 아키텍처"
summary: "소스 코드 의존성이 정책을 향하도록 만듭니다."
category: "boundaries"
aliases: ["클린 아키텍처"]
related: ["architecture", "layered-architecture", "hexagonal-architecture"]
status: "published"
revision: 3
sourceRevision: 3
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  {
    "features": "소스 의존성은 안쪽으로",
    "advantages": "정책이 프레임워크 데이터와 독립",
    "limitations": "경계 데이터 변환의 관리 비용",
    "suitable": "UI·데이터베이스보다 오래갈 정책",
    "combinations": "외부 경계에 헥사고날 포트 적용 가능",
  }
---

## 왜 필요한가

가계부 안내의 저장 규칙은 화면이나 데이터베이스가 바뀌어도 유지되어야 하지만 직접 참조하면 정책까지 묶입니다.

## 어떻게 해결하는가

1. 가상 단일 프로세스: 하나, 가계부 안내 미저장. HTTP·CLI 컨트롤러가 ID를 SaveArticle에 전달하고 SavedArticle이 검증합니다.
2. SaveArticle은 메모리·내장 데이터베이스 어댑터가 구현한 SaveRepository를 호출합니다. 소스 참조는 어댑터 → 유스케이스 계약 → 도메인으로, 호출은 바깥 저장소로 향합니다. 경계에는 단순 데이터만 전달하며 ORM 행은 밖에 둡니다.
3. 저장 완료: 0 → 1건, 반복해도 1건. 빈 ID나 쓰기 전 실패는 0건 유지, 문제 수정 후 재시도.

## 무엇이라 부르는가

클린 아키텍처는 소스 의존성을 정책 쪽으로 향하게 합니다. 실행 중 호출은 안쪽 소유 인터페이스를 통해 바깥으로 나갈 수 있습니다. [Martin](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

헥사고날 포트와 결합할 수 있습니다. 폴더 네 개가 필수는 아닙니다.

경계의 데이터 변환은 관리 비용이 듭니다.
