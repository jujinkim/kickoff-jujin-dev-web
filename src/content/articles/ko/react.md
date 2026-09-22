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
revision: 1
sourceRevision: 1
updated: "2026-09-22"
checked: "2026-09-22"
comparison:
  features: 프로퍼티·이벤트·상태 기반 렌더링
  advantages: 카드 동작 재사용
  limitations: 공유 상태 소유권 설계 필요
  suitable: 컴포넌트 중심 인터페이스
  combinations: Astro 아일랜드와 외부 저장소
---

## 개념

React 컴포넌트는 프로퍼티를 받고 상태로 UI를 표현합니다. 상태 설정 함수는 렌더링을 요청하며, 일반 변수 변경만으로 같은 동작이 생기지는 않습니다.

## 예시

현장 노트 카드 2개가 미저장 상태로 시작합니다. A17 저장을 누르면 해당 카드만 저장됨으로 바뀌고 B04는 그대로입니다. B04도 저장하면 총수가 1에서 2가 됩니다. 같은 ID를 다시 저장해도 총수는 2입니다. 도식은 이벤트·상태 갱신·렌더링을 연결합니다. 초기화·새로고침은 두 카드를 지웁니다. 영속 저장은 제공하지 않습니다.

## 추천 조건

재사용 컴포넌트와 명시적인 공유 상태 소유권이 필요할 때 적합합니다. 영속 저장은 별도로 추가하세요.

[출처](https://react.dev/learn)
