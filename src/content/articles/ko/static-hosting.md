---
kind: concept
articleId: static-hosting
lang: ko
title: 정적 호스팅
summary: 공개 파일과 개인 저장 경로를 나눕니다.
category: hosting-models
aliases:
  - 정적 호스팅
related:
  - shipping
  - always-on-server
  - serverless-functions
status: published
revision: 4
sourceRevision: 4
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  features: 사전 생성 파일 전달
  advantages: 글 조회 시 앱 렌더러 불필요
  limitations: 개인 쓰기는 API 필요
  suitable: 공개 글과 문서
  combinations: 정적 생성기와 서버 또는 함수
---

## 왜 필요한가

글과 저장 버튼이 있는 동네 소식지 사이트를 만든다고 가정해 봅시다. 모두 같은 글을 읽으므로 읽기마다 코드를 실행하면 운영 일만 늘어납니다.

## 어떻게 해결하는가

글 읽기는 파일 경로를 따릅니다. 동네 소식지 저장은 별도 API를 거쳐 외부 저장소로 갑니다. 반복 저장도 예제의 독자·글 키에 따라 기록 하나만 유지합니다. 다음 저장 실패는 저장소를 바꾸지 않고 실패를 반환합니다. 처리기 재시작 후에도 외부 기록은 남습니다. 초기화·새로고침은 가상 저장소를 포함한 페이지 메모리 전체를 지웁니다.

## 무엇이라 부르는가

정적 호스팅은 미리 만든 HTML·CSS·JavaScript를 전달합니다. 브라우저 조작은 가능하지만 공개 파일이 독자의 개인 기록을 저장하지는 않습니다.

개인 쓰기에는 생성된 파일과 인증 API를 조합하세요.

[출처](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
