---
kind: concept
articleId: serverless-functions
lang: ko
title: 서버리스 함수
summary: 호출 실행과 영속 저장을 나눕니다.
category: hosting-models
aliases:
  - 서버리스 함수
related:
  - shipping
  - static-hosting
  - always-on-server
status: published
revision: 3
sourceRevision: 3
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  features: 이벤트 기반 관리형 처리기
  advantages: 플랫폼이 서버 준비 담당
  limitations: 재시도와 수명주기 설계 필요
  suitable: 이벤트 중심 API
  combinations: 정적 프런트엔드와 외부 저장소
---

## 왜 필요한가

축제 일정은 저장 요청이 가끔 들어오므로 상시 실행 앱은 하루 대부분을 대기합니다.

## 어떻게 해결하는가

글 읽기는 처리기를 호출합니다. 축제 일정 저장은 다른 처리기 실행으로 외부 저장소에 기록합니다. 반복 저장도 예제의 독자·글 키에 따라 기록 하나만 유지합니다. 다음 저장 실패는 저장소를 바꾸지 않고 실패를 반환합니다. 처리기 재시작은 실행 상태만 버리고 기록은 유지합니다. 초기화·새로고침은 가상 저장소를 포함한 페이지 메모리 전체를 지웁니다.

## 무엇이라 부르는가

서버리스 함수는 이벤트나 요청에 응답해 관리형 처리기를 실행합니다. 플랫폼이 서버를 관리하지만 앱의 올바른 동작은 개발자의 책임입니다.

중복 처리와 영속 저장을 설계하고 기존 실행 인스턴스가 남아 있다고 가정하지 마세요.

[출처](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)
