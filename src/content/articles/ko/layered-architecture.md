---
kind: "concept"
articleId: "layered-architecture"
lang: "ko"
title: "계층형 아키텍처"
summary: "명시적인 의존 규칙으로 책임을 나눕니다."
category: "boundaries"
aliases: ["계층형 아키텍처"]
related: ["architecture", "hexagonal-architecture", "clean-architecture"]
status: "published"
revision: 4
sourceRevision: 4
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  {
    "features": "책임별 계층과 아래쪽 의존성",
    "advantages": "검증이 위치할 곳이 명확함",
    "limitations": "단순 전달 계층도 관리 비용 발생",
    "suitable": "표현·애플리케이션·저장 책임이 안정적인 경우",
    "combinations": "포트와 의존성 역전 추가 가능",
  }
---

## 왜 필요한가

대출 규칙을 읽고 저장하는 도서관 앱을 만든다고 가정해 봅시다. 화면이 검증과 저장을 직접 맡으면 명령줄 기능에서 규칙이 중복되고 저장소 변경도 화면에 번집니다.

## 어떻게 해결하는가

1. 가상 단일 프로세스: 독자 준, 대출 규칙 글 미저장. 메모리 또는 내장 데이터베이스 사용.
2. HTTP·CLI 표현 계층이 애플리케이션 검증 코드를 참조·호출하고, 애플리케이션은 저장 계층을 참조·호출합니다. 이 폐쇄형 예시는 계층 건너뛰기를 금지합니다.
3. 저장 완료가 위로 반환됩니다. 0 → 1건, 반복해도 1건. 빈 ID나 쓰기 전 실패는 0건 유지, 문제 수정 후 재시도.

HTTP를 CLI로 바꿔도 검증 위치는 유지됩니다.

## 무엇이라 부르는가

계층형 아키텍처는 책임을 나누고 계층 간 의존성을 제한합니다. 논리 계층마다 별도 서버가 필요한 것은 아닙니다. [Microsoft](https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/n-tier)

포트로 저장 의존성을 역전할 수 있습니다. 폴더 이름만으로 규칙이 강제되지는 않습니다.

단순 전달 계층도 관리 비용이 듭니다.
