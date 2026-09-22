---
kind: concept
articleId: vue
lang: ko
title: Vue
summary: 반응형 상태가 템플릿을 갱신합니다.
category: web-ui
aliases:
  - Vue
related:
  - tools
  - react
  - svelte
status: published
revision: 1
sourceRevision: 1
updated: "2026-09-22"
checked: "2026-09-22"
comparison:
  features: 반응형 상태에 연결된 템플릿
  advantages: 로직과 마크업을 함께 작성
  limitations: 공유 상태 소유권 필요
  suitable: 템플릿 중심 UI 팀
  combinations: 프로퍼티·이벤트를 쓰는 Astro 아일랜드
---

## 개념

Vue는 템플릿을 반응형 상태에 연결합니다. 단일 파일 컴포넌트는 로직·템플릿·스타일을 함께 작성하는 형식이며, 네트워크 파일 하나를 보장하지는 않습니다.

## 예시

현장 노트 카드 2개가 미저장 상태로 시작합니다. A17 저장을 누르면 해당 카드만 저장됨으로 바뀌고 B04는 그대로입니다. B04도 저장하면 총수가 1에서 2가 됩니다. 같은 ID를 다시 저장해도 총수는 2입니다. 도식은 반응형 상태와 템플릿을 연결합니다. 초기화·새로고침은 두 카드를 지웁니다. 영속 저장은 제공하지 않습니다.

## 추천 조건

템플릿 중심 컴포넌트 작성에 적합합니다. 공유 상태 소유권과 외부 저장은 별도로 정하세요.

[출처](https://vuejs.org/guide/introduction.html)
