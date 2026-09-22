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
revision: 1
sourceRevision: 1
updated: "2026-09-22"
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

## 개념

모놀리스는 서버 애플리케이션을 하나의 단위로 배포합니다. 같은 배포물의 복제본을 늘려도 모놀리스이며, 내부에 모듈을 둘 수 있습니다. [Lewis·Fowler](https://martinfowler.com/articles/microservices.html)

## 예시

1. 가상 독서 앱: 한 팀, 앱 v1에 카탈로그·보관함·결제 포함. A17은 태그 없음.
2. 보관함에 태그 기능을 추가하고 앱 v2를 배포합니다. 결제 동작은 그대로지만 같은 배포물에 포함됩니다. 공유 데이터베이스는 앱이 소유합니다.
3. 보관함이 프로세스 내부에서 카탈로그를 조회한 뒤 `travel`을 기록합니다. 쓰기 전 조회 실패 시 태그 없음 유지, 복구 후 재시도.

## 추천 조건

배포 파이프라인 하나로 운영할 때 유용합니다. 배포와 프로세스 장애는 공유합니다. 경계가 중요해지면 명시적인 모듈을 추가합니다.
