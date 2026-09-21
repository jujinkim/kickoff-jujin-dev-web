---
kind: guide
articleId: "static-sites"
lang: "ko"
title: "Astro·Hugo·Jekyll: HTML을 보내는 세 방법"
summary: "벤치마크 트로피보다 집필과 유지보수 기준으로 고릅니다."
category: "development"
aliases: ["Astro", "Hugo", "Jekyll", "SSG", "정적 사이트", "静的サイト"]
related: ["tools", "shipping", "adr"]
example: "generators"
status: "published"
revision: 2
sourceRevision: 2
updated: "2026-09-21"
aiPrompt: "확정된 집필 흐름을 기준으로 Astro·Hugo·Jekyll을 비교해줘. 다국어, 예시 미리보기, 검색, 배포를 각각 어떻게 처리하는지 보여줘. 유지 비용과 공식 근거를 포함하고 스택 변경 전에 추천 채택·거절·다른 후보를 물어봐."
checked: "2026-09-21"
---

## 개념

정적 사이트 생성기는 방문자가 오기 전에 파일을 만듭니다. 정적 페이지에서도 상호작용하는 JavaScript를 실행할 수 있습니다.

## 예시

Markdown + 템플릿 → 빌드 → HTML·CSS·JavaScript. 이 카탈로그는 재사용하는 미리보기에 Astro 컴포넌트를 씁니다.

## 추천 조건

Astro는 컴포넌트, Hugo는 Go 템플릿, Jekyll은 Liquid를 사용합니다. 각각 고유한 도구와 관리 작업이 따릅니다. 팀의 기술, 다국어 콘텐츠, 미리보기, 발행 흐름을 비교하세요. 최신 배포·플러그인 지원을 확인합니다. [Astro](https://docs.astro.build/en/concepts/islands/) · [Hugo](https://gohugo.io/about/introduction/) · [Jekyll](https://jekyllrb.com/docs/github-pages/)

출처 확인: 2026-09-21. 조건은 바뀔 수 있습니다.
