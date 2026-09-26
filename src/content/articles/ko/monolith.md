---
kind: "concept"
articleId: "monolith"
lang: "ko"
title: "모놀리스"
summary: "서버 애플리케이션을 하나의 단위로 배포합니다."
category: "service-split"
aliases: ["모놀리스"]
related: ["architecture", "modular-monolith", "microservices"]
status: "published"
revision: 5
sourceRevision: 5
updated: "2026-09-26"
checked: "2026-09-22"
comparison:
  {
    "features": "서버 전체가 하나의 배포 단위",
    "advantages": "작은 팀에 배포 파이프라인 하나",
    "limitations": "배포·프로세스 장애 경계 공유",
    "suitable": "한 팀이 밀접한 기능을 운영",
    "combinations": "내부에 계층과 명시적 모듈 구성 가능",
  }
---

## 왜 필요한가

이웃이 요리책을 찾아 저장하고 부가 기능을 구매하는 요리법 앱을 만든다고 가정해 봅시다. 작은 팀 하나가 저장한 책에 가족 태그를 넣으려 합니다. 별도 배포를 조율하면 일이 늘어나므로 기능별 독립 일정보다 함께 배포하는 편을 우선합니다.

## 어떻게 해결하는가

1. 한 팀이 카탈로그·보관함·결제를 함께 배포합니다. 저장한 동네 요리책에는 태그가 없습니다.
2. 보관함에 태그 기능을 추가하고 앱 v2를 배포합니다. 결제 동작은 그대로지만 같은 배포물에 포함됩니다. 공유 데이터베이스는 앱이 소유합니다.
3. 보관함이 프로세스 내부에서 카탈로그를 조회한 뒤 `가족`을 기록합니다. 쓰기 전 조회 실패 시 태그 없음 유지, 복구 후 재시도.

## 무엇이라 부르는가

모놀리스는 서버 애플리케이션을 하나의 단위로 배포합니다. 같은 배포물의 복제본을 늘려도 모놀리스이며, 내부에 모듈을 둘 수 있습니다. [Lewis·Fowler](https://martinfowler.com/articles/microservices.html)

배포와 프로세스 장애는 공유합니다. 경계가 중요해지면 명시적인 모듈을 추가합니다.
