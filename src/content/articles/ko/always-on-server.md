---
kind: concept
articleId: always-on-server
lang: ko
title: 상시 서버
summary: 프로세스와 데이터의 수명은 다릅니다.
category: hosting-models
aliases:
  - 상시 서버
related:
  - shipping
  - static-hosting
  - serverless-functions
status: published
revision: 4
sourceRevision: 4
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  features: 장기 실행 요청 대기 프로세스
  advantages: 실행 환경 직접 제어
  limitations: 감시와 복구 담당자 필요
  suitable: 맞춤 실행 동작
  combinations: 외부 영속 저장소와 정적 프런트엔드
---

## 왜 필요한가

도서관 이용자가 책을 찾고 읽기 목록을 저장하는 앱을 만든다고 가정해 봅시다. 운영 시간 동안 서로 다른 시각에 들어오는 저장 요청이 같은 목록에 반영돼야 합니다.

도서관 읽기 목록은 운영 시간 내내 저장 요청을 받고, 팀은 계속 대기하는 프로세스를 직접 관리해야 합니다.

## 어떻게 해결하는가

글 읽기와 도서관 읽기 목록 저장은 대기 중인 프로세스로 들어갑니다. 저장은 외부 저장소에 기록합니다. 반복 저장도 예제의 독자·글 키에 따라 기록 하나만 유지합니다. 다음 저장 실패는 저장소를 바꾸지 않고 실패를 반환합니다. 처리기 재시작은 프로세스만 바꾸고 기록을 유지합니다. 초기화·새로고침은 가상 저장소를 포함한 페이지 메모리 전체를 지웁니다.

## 무엇이라 부르는가

상시 서버는 프로세스가 계속 요청을 기다리도록 운영하는 방식입니다. 재시작할 수 있으므로 이름이 무중단 가용성을 보장하지는 않습니다.

영속 데이터는 외부에 두고 감시·용량·복구를 맡을 담당자를 정합니다.

[출처](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
