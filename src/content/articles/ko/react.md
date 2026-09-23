---
kind: concept
articleId: react
lang: ko
title: React
summary: 상태 변경이 표시 문구를 바꿉니다.
category: web-ui
aliases:
  - React
related:
  - tools
  - vue
  - svelte
status: published
revision: 5
sourceRevision: 5
updated: "2026-09-23"
checked: "2026-09-22"
comparison:
  features: 프로퍼티·이벤트·상태 기반 렌더링
  advantages: 카드 동작 재사용
  limitations: 공유 상태 소유권 설계 필요
  suitable: 컴포넌트 중심 인터페이스
  combinations: Astro 아일랜드와 외부 저장소
---

## 왜 필요한가

가족이 장보기와 식단 항목을 저장하는 계획 앱을 만든다고 가정해 봅시다. 각 카드와 전체 합계가 함께 갱신돼야 합니다. 제작팀은 바뀌는 상태를 바탕으로 JavaScript 함수에서 UI를 표현하려 합니다.

## 어떻게 해결하는가

집안 계획 카드 2개가 미저장 상태로 시작합니다. 장보기 목록 저장을 누르면 해당 카드만 저장됨으로 바뀌고 주간 식단은 그대로입니다. 주간 식단도 저장하면 총수가 1에서 2가 됩니다. 같은 카드를 다시 저장해도 총수는 2입니다. 도식은 이벤트·상태 갱신·렌더링을 연결합니다. 초기화·새로고침은 두 카드를 지웁니다. 영속 저장은 제공하지 않습니다.

## 무엇이라 부르는가

React 컴포넌트는 프로퍼티를 받고 상태로 UI를 표현합니다. 상태 설정 함수는 렌더링을 요청하며, 일반 변수 변경만으로 같은 동작이 생기지는 않습니다.

영속 저장은 별도로 추가하세요.

[출처](https://react.dev/learn)
