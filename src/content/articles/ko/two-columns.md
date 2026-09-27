---
kind: concept
articleId: two-columns
lang: ko
title: 사이드바 레이아웃
summary: 주 콘텐츠 옆에 탐색·필터·보조 정보를 배치해 함께 볼 수 있게 합니다.
category: columns
aliases:
  - 사이드바 레이아웃
  - 2열
  - Sidebar layout
  - Two columns
related:
  - layout
  - single-column
  - multiple-columns
status: published
revision: 7
sourceRevision: 7
updated: "2026-09-27"
comparison:
  features: 주 영역 옆에 더 좁은 보조 영역 배치
  advantages: 필터와 결과를 함께 확인
  limitations: 읽기 폭이 부족해지면 세로 배치 필요
  suitable: 콘텐츠 옆에서 탐색·필터 유지
  combinations: 주 영역 안에 리스트·그리드 배치 가능
checked: "2026-09-26"
---

## 왜 필요한가

요리법 목록에서 요리하는 사람은 재료와 조리 시간으로 저녁 메뉴를 고릅니다. 음식을 비교하며 필터도 바꿉니다. 끊김 없는 읽기보다 결과 옆의 조작부가 중요합니다. 여러 작업 영역이 동등하게 중요하다면 다른 구성이 필요합니다.

## 어떻게 해결하는가

토마토와 20분 이내를 선택하면 토마토 바질 파스타만 남습니다. 목록에서 요리 메모를 펼쳐 읽습니다. 10분 이내는 결과가 없으며 필터 초기화로 복구합니다. 좁은 화면에서는 필터 다음에 요리법이 이어집니다.

## 무엇이라 부르는가

[**사이드바 레이아웃**](https://design-system.w3.org/layouts/sidebar.html)은 공간이 충분할 때 주 영역 옆에 더 좁은 보조 영역을 둡니다. Flexbox나 Grid로 구현할 수 있습니다. 페이지 구성 방식이며, 본문이 이어지는 CSS 다단과는 다릅니다. 비좁아지기 전에 세로로 쌓습니다.
