---
articleId: "static-sites"
lang: "ko"
title: "Astro·Hugo·Jekyll: HTML을 보내는 세 방법"
summary: "벤치마크 트로피보다 집필과 유지보수 기준으로 고릅니다."
category: "development"
aliases: ["Astro", "Hugo", "Jekyll", "SSG", "정적 사이트", "静的サイト"]
related: ["tools", "shipping", "adr"]
example: "generators"
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-09-21"
aiPrompt: "확정된 집필 흐름을 기준으로 Astro·Hugo·Jekyll을 비교해줘. 다국어, 예시 미리보기, 검색, 배포를 각각 어떻게 처리하는지 보여줘. 유지 비용과 공식 근거를 포함하고 스택 변경 전에 추천 채택·거절·다른 후보를 물어봐."
checked: "2026-09-21"
---

## 개념

정적 사이트 생성기는 독자가 오기 전에 원문과 템플릿을 파일로 만듭니다. 정적 출력에도 JavaScript 상호작용을 넣을 수 있습니다. 자아가 생긴 스크린샷이라는 뜻은 아닙니다.

## 필요한 상황

빌드로 내용을 갱신할 수 있는 문서, 카탈로그, 출판물에 적합합니다. 사용자별 비밀과 인증 동작에는 적절한 서버 서비스가 필요합니다. 버튼을 숨기는 것은 권한 검사가 아닙니다.

## 예시

이 카탈로그에서는 Markdown으로 글 HTML과 다운로드용 Markdown을 만듭니다. Astro 컴포넌트는 미리보기를, 작은 스크립트는 테마와 검색을 담당합니다. Hugo는 Go 템플릿, Jekyll은 Ruby 환경의 Liquid를 사용합니다. 셋 모두 GitHub Pages용 파일을 만들 수 있습니다.

```text
Markdown + templates -> build -> HTML / CSS / JS
Astro: components + optional interactive islands
Hugo: Go templates + content pipelines
Jekyll: Liquid templates + Ruby ecosystem
```

## 선택지와 tradeoff

Astro는 컴포넌트 중심 레이아웃과 선택적 상호작용에 맞지만 Node 도구 관리를 요구합니다. Hugo는 콘텐츠 도구와 독립 실행 생성기를 주지만 Go 템플릿 관례를 배워야 합니다. Jekyll은 기존 Liquid 테마·GitHub 흐름에 맞지만 Ruby 의존성과 플러그인 호환성을 봐야 합니다. 남의 속도 그래프 대신 내 콘텐츠를 재보세요.

## 추천 조건

팀 경험, 미리보기 복잡성, 다국어, 갱신 흐름으로 고르세요. 여기서는 재사용할 시각 예시와 TypeScript 때문에 Astro를 골랐습니다. 모든 블로그에 대한 판결이 아닙니다. 최신 배포·플러그인 지원은 공식 문서로 확인하세요.

## AI 지시 예시

확정된 집필 흐름을 기준으로 Astro·Hugo·Jekyll을 비교해줘. 다국어, 예시 미리보기, 검색, 배포를 각각 어떻게 처리하는지 보여줘. 유지 비용과 공식 근거를 포함하고 스택 변경 전에 추천 채택·거절·다른 후보를 물어봐.

## 관련 글과 출처

- [언어·프레임워크·라이브러리·엔진 구분](/ko/catalog/tools/)
- [웹·앱·PC·콘솔: 실행·유통·호스팅 구분](/ko/catalog/shipping/)
- [Design Decision과 ADR: 결정의 흔적](/ko/catalog/adr/)

- [Astro — Islands architecture](https://docs.astro.build/en/concepts/islands/)
- [Hugo — Introduction](https://gohugo.io/about/introduction/)
- [Jekyll — GitHub Pages](https://jekyllrb.com/docs/github-pages/)

서비스 문서 확인: 2026-09-21. 제공 범위·정책·계약은 바뀔 수 있으므로 출시 전에 다시 확인하세요.
