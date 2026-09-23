---
kind: concept
articleId: jekyll
lang: ko
title: Jekyll
summary: Ruby로 빌드하고 파일을 호스팅합니다.
category: static-generators
aliases:
  - Jekyll
related:
  - static-sites
  - astro
  - hugo
status: published
revision: 5
sourceRevision: 5
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  features: Ruby 빌드와 재사용 레이아웃
  advantages: 여러 글이 레이아웃 공유
  limitations: 빌드 의존성 관리 필요
  suitable: 기존 Jekyll 발행 흐름
  combinations: CI 빌드와 정적 호스팅
---

## 왜 필요한가

가족이 Markdown으로 요리법을 더하는 사이트를 만든다고 가정해 봅시다. 제작팀은 이미 Ruby 템플릿을 관리합니다. 요리 글을 통째로 복사하지 않고 공통 레이아웃 변경을 모든 페이지에 적용하려 합니다.

## 어떻게 해결하는가

가족 요리법 보관함을 Markdown 글 3개와 레이아웃 하나로 시작합니다. 다음을 누르면 Ruby 빌드로 목록과 글 HTML 3개를 만들고 호스팅을 거쳐 브라우저에 전달합니다. 이 예제에서 레이아웃 누락은 출력 전에 빌드를 멈춥니다. 파일을 읽을 때는 Ruby 요청 처리기가 필요 없습니다. 개인 저장 기록에는 별도 API가 필요합니다. 이전은 앞 단계로, 초기화·새로고침은 처음으로 돌아갑니다.

## 무엇이라 부르는가

Jekyll은 Ruby 빌드 과정에서 Markdown과 레이아웃을 정적 사이트로 바꿉니다. 생성과 호스팅은 별도 선택입니다.

빌드 의존성과 호스팅을 구분해 관리하세요.

[출처](https://jekyllrb.com/docs/)
