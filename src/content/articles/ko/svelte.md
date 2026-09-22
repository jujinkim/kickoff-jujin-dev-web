---
kind: concept
articleId: svelte
lang: ko
title: Svelte
summary: 컴파일로 준비하고 실행 중 갱신합니다.
category: web-ui
aliases:
  - Svelte
related:
  - tools
  - react
  - vue
status: published
revision: 2
sourceRevision: 2
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  features: 선언적 컴포넌트 컴파일
  advantages: UI와 동작을 함께 작성
  limitations: 빌드와 서비스 설계 필요
  suitable: 컴파일러 기반 UI 작업
  combinations: Astro 아일랜드 또는 앱 프레임워크
---

## 왜 필요한가

대화형 요소의 상태와 화면을 함께 갱신해야 합니다. DOM을 따로 수정하면 데이터와 표시의 관계가 여기저기 흩어집니다.

## 어떻게 해결하는가

현장 노트 카드 2개가 미저장 상태로 시작합니다. A17 저장을 누르면 해당 카드만 저장됨으로 바뀌고 B04는 그대로입니다. B04도 저장하면 총수가 1에서 2가 됩니다. 같은 ID를 다시 저장해도 총수는 2입니다. 도식은 컴파일과 실행 중 갱신을 구분합니다. 초기화·새로고침은 두 카드를 지웁니다. 영속 저장은 제공하지 않습니다.

## 무엇이라 부르는가

Svelte는 선언적 컴포넌트를 브라우저 코드로 컴파일합니다. UI를 준비한 뒤에도 클릭에 따른 상태 갱신은 실행 중 일어납니다. SvelteKit은 더 넓은 앱 범위를 다룹니다.

라우팅과 영속 저장은 별도로 선택하세요.

[출처](https://svelte.dev/docs/svelte/overview)
