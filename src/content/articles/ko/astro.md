---
kind: concept
articleId: astro
lang: ko
title: Astro
summary: 정적 페이지에 필요한 아일랜드만 추가합니다.
category: static-generators
aliases:
  - Astro
related:
  - static-sites
  - hugo
  - jekyll
status: published
revision: 1
sourceRevision: 1
updated: "2026-09-22"
checked: "2026-09-22"
comparison:
  features: 선택적 클라이언트 아일랜드
  advantages: 본문은 정적 HTML로 유지
  limitations: 개인 저장에는 별도 서비스 필요
  suitable: 일부 조작이 필요한 콘텐츠
  combinations: UI 아일랜드와 정적 호스팅
---

## 개념

Astro는 콘텐츠를 HTML로 렌더링하고 선택한 아일랜드에 클라이언트 상호작용을 더합니다. 여기서는 정적 출력을 사용하지만 서버 렌더링도 지원합니다.

## 예시

Markdown 글 3개와 레이아웃 하나로 시작합니다. 다음을 누르면 목록과 글 HTML 3개를 만들고 호스팅을 거쳐 브라우저에 전달합니다. 선택적 저장 아일랜드를 켜도 본문은 그대로 읽힙니다. 레이아웃 누락은 빌드를 멈추며, 정적 파일만으로 개인 저장 기록을 유지할 수는 없습니다. 이전은 앞 단계로, 초기화·새로고침은 처음으로 돌아갑니다.

## 추천 조건

소수의 조작 기능이 필요한 콘텐츠에 적합합니다. 아일랜드와 별도 저장 API를 조합하세요.

[출처](https://docs.astro.build/en/concepts/why-astro/)
