---
kind: "concept"
articleId: "microservices"
lang: "ko"
title: "마이크로서비스"
summary: "업무 기능별 서비스를 독립적으로 배포합니다."
category: "service-split"
aliases: ["마이크로서비스"]
related: ["architecture", "monolith", "modular-monolith"]
status: "published"
revision: 5
sourceRevision: 5
updated: "2026-09-26"
checked: "2026-09-22"
comparison:
  {
    "features": "업무 기능별 독립 배포 서비스",
    "advantages": "결제 재빌드 없이 보관함 배포",
    "limitations": "네트워크 장애·데이터 조율 필요",
    "suitable": "안정적인 경계·독립 배포 필요",
    "combinations": "모듈러 모놀리스와 공존 가능",
  }
---

## 왜 필요한가

가족이 행사 안내를 저장하고 참가비를 내는 학교 앱을 만든다고 가정해 봅시다. 자원봉사 태그는 급하지만 결제는 기존 배포 일정을 지켜야 합니다. 한 팀이 태그를 독립 배포하려고 네트워크 조율을 감수합니다. 내부 모듈만 나누면 배포는 여전히 함께입니다.

## 어떻게 해결하는가

1. 한 팀이 카탈로그·보관함·결제를 각각 v1으로 운영합니다. 저장한 학교 행사 안내에는 태그가 없습니다.
2. 호환되는 태그 기능을 보관함 v2로만 배포합니다. 카탈로그·결제는 v1 유지.
3. 보관함이 네트워크로 카탈로그를 조회한 뒤 자체 저장소에 `자원봉사`를 기록합니다. 쓰기 전 조회 시간 초과 시 태그 없음 유지. 실패를 알리고 복구 후 재시도합니다.

## 무엇이라 부르는가

마이크로서비스는 명시적 계약과 데이터 소유권을 갖고 독립 배포하는 업무 기능별 서비스입니다. 프로세스를 나누기만 해서는 독립성이 생기지 않습니다. [Lewis·Fowler](https://martinfowler.com/articles/microservices.html)

네트워크 장애와 서비스 간 데이터는 조율해야 합니다. 나머지 기능은 모듈러 모놀리스로 유지할 수 있습니다.
