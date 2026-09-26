---
kind: concept
articleId: proportional
lang: ko
title: 비례폭
summary: "소식지 본문의 글자 형태에 맞춰 폭을 달리하고, 숫자는 등폭으로 정렬할 수 있습니다."
category: character-width
aliases:
  - 비례폭
related:
  - theme
  - monospace
status: published
revision: 6
sourceRevision: 6
updated: "2026-09-26"
comparison:
  features: 비례폭 글자는 서로 다른 전진 폭을 씁니다.
  advantages: 서로 다른 전진 폭이 글자별 비율을 반영합니다.
  limitations: 지원 문자·숫자 기능이 다르므로 이름으로 추정하지 말고 로드된 서체를 측정하세요.
  suitable: 자연스럽게 이어지는 본문에 어울립니다.
  combinations: 세리프·산세리프 모두 비례폭일 수 있고 숫자만 고정폭도 가능합니다.
---

## 왜 필요한가

긴 문단이 있는 정원 소식지를 만든다고 가정해 봅시다. 독자가 이어진 글을 읽을 때 좁고 넓은 글자에 같은 폭을 주면 간격이 어색해질 수 있습니다.

## 어떻게 해결하는가

정원 소식지에 쓸 문구와 iiiWWW 0123, 숫자를 함께 비교합니다. 표본 입력·크기·실측 폭 가이드·숫자 정렬을 조절합니다. 글자는 하나의 문자열로 연결 형태를 유지합니다. 초기화·새로고침하면 처음 글과 48px 크기로 돌아갑니다. 실측 i와 W의 전진 폭이 다르며 숫자는 별도로 열 정렬할 수 있습니다.

## 무엇이라 부르는가

비례폭 글자는 서로 다른 전진 폭을 씁니다.

지원 문자·숫자 기능이 다르므로 이름으로 추정하지 말고 로드된 서체를 측정하세요.

[W3C](https://www.w3.org/TR/css-fonts-3/)
