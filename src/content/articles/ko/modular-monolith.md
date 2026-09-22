---
kind: "concept"
articleId: "modular-monolith"
lang: "ko"
title: "모듈러 모놀리스"
summary: "하나의 배포 안에서 모듈 소유권을 지킵니다."
category: "service-split"
aliases: ["모듈러 모놀리스"]
related: ["architecture", "monolith", "microservices"]
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-09-22"
checked: "2026-09-22"
comparison:
  {
    "features": "단일 배포 안의 명시적 모듈 API",
    "advantages": "보관함 변경을 API 뒤에 한정",
    "limitations": "경계 강제 필요·배포는 공유",
    "suitable": "원격 호출 없이 명확한 소유권",
    "combinations": "모듈 내부에 클린·헥사고날 적용 가능",
  }
---

## 개념

모듈러 모놀리스는 하나의 배포 안에 명시적인 내부 경계를 둡니다. 모듈 API가 소유한 내부 구현을 보호합니다. 여전히 모놀리스입니다. [Fowler](https://martinfowler.com/bliki/MonolithFirst.html)

## 예시

1. 가상 독서 앱: 한 팀, 앱 v1에 카탈로그·보관함·결제 포함. A17은 태그 없음.
2. 보관함 소유 테이블에 태그 저장을 추가하고 앱 v2를 배포합니다. 결제 동작은 그대로입니다. 데이터베이스는 하나지만 테이블은 모듈별 소유, 다른 모듈의 직접 접근은 금지합니다.
3. 보관함이 카탈로그 API를 프로세스 내부에서 호출한 뒤 `travel`을 기록합니다. 조회 실패 시 태그 없음 유지, 복구 후 재시도.

## 추천 조건

원격 호출 없이 소유권을 나눌 때 유용합니다. 폴더 구분 이상의 경계 강제가 필요하며 배포·프로세스 장애는 공유합니다. 모듈 내부에 헥사고날 포트를 둘 수 있습니다.
