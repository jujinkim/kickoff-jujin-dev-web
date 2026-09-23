---
kind: concept
articleId: hugo
lang: ko
title: Hugo
summary: 콘텐츠와 템플릿을 파일로 만듭니다.
category: static-generators
aliases:
  - Hugo
related:
  - static-sites
  - astro
  - jekyll
status: published
revision: 3
sourceRevision: 3
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  features: 콘텐츠와 Go 템플릿 결합
  advantages: 요청 시 글 렌더러 불필요
  limitations: 템플릿과 위젯은 별도 작업
  suitable: 파일 중심 문서 발행
  combinations: 정적 호스팅과 저장 API
---

## 왜 필요한가

마을 여행 안내는 모든 페이지에 같은 탐색 메뉴가 있어 파일마다 복사하면 수정이 느려집니다.

## 어떻게 해결하는가

마을 여행 안내를 Markdown 글 3개와 레이아웃 하나로 시작합니다. 다음을 누르면 템플릿 처리 후 목록과 글 HTML 3개를 만들고 호스팅을 거쳐 브라우저에 전달합니다. 이 예제에서 레이아웃 누락은 출력 전에 빌드를 멈춥니다. 별도 브라우저 위젯은 저장 API를 호출할 수 있지만 빌드 도구는 독자 요청을 처리하지 않습니다. 이전은 앞 단계로, 초기화·새로고침은 처음으로 돌아갑니다.

## 무엇이라 부르는가

Hugo는 콘텐츠와 템플릿을 결합해 정적 파일을 만듭니다. Go로 구현됐지만 작성자가 글을 Go 프로그램으로 만들 필요는 없습니다.

템플릿 관리와 개인 저장 기능은 별도로 설계하세요.

[출처](https://gohugo.io/about/introduction/)
