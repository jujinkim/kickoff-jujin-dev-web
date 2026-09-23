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
revision: 3
sourceRevision: 3
updated: "2026-09-23"
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

학교 행사 앱에는 이번 주 자원봉사 태그가 필요하지만 결제 담당 팀은 다른 배포 일정을 갖고 있습니다.

## 어떻게 해결하는가

1. 가상 학교 행사 앱: 한 팀, 카탈로그·보관함·결제 각각 v1. 학교 행사는 태그 없음.
2. 호환되는 태그 기능을 보관함 v2로만 배포합니다. 카탈로그·결제는 v1 유지.
3. 보관함이 네트워크로 카탈로그를 조회한 뒤 자체 저장소에 `자원봉사`를 기록합니다. 쓰기 전 조회 시간 초과 시 태그 없음 유지. 실패를 알리고 복구 후 재시도합니다.

## 무엇이라 부르는가

마이크로서비스는 명시적 계약과 데이터 소유권을 갖고 독립 배포하는 업무 기능별 서비스입니다. 프로세스를 나누기만 해서는 독립성이 생기지 않습니다. [Lewis·Fowler](https://martinfowler.com/articles/microservices.html)

네트워크 장애와 서비스 간 데이터는 조율해야 합니다. 나머지 기능은 모듈러 모놀리스로 유지할 수 있습니다.
