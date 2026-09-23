---
kind: concept
articleId: monospace
lang: ko
title: 고정폭
summary: 같은 글자·문장·숫자로 서체 비교.
category: character-width
aliases:
  - 고정폭
related:
  - theme
  - proportional
status: published
revision: 5
sourceRevision: 5
updated: "2026-09-23"
comparison:
  features: 고정폭 라틴 글자는 윤곽이 달라도 전진 폭이 같습니다.
  advantages: 같은 라틴 전진 폭이 코드·자료의 열을 맞춥니다.
  limitations: "한·일 문자, 이모지, 결합 문자, 대체 서체는 달라질 수 있어 지원 문자 집합을 확인하세요."
  suitable: 코드나 정렬된 라틴 자료에 어울립니다.
  combinations: 고정폭 코드 옆에 비례폭 설명 본문을 둘 수 있습니다.
---

## 왜 필요한가

날씨 기록을 텍스트 표로 보여주는 화면을 만든다고 가정해 봅시다. 측정값을 열로 비교하려는데 라틴 글자 폭이 제각각이면 위치가 어긋납니다.

## 어떻게 해결하는가

날씨 기록표에 쓸 문구와 iiiWWW 0123, 숫자를 함께 비교합니다. 표본 입력·크기·실측 폭 가이드·숫자 정렬을 조절합니다. 글자는 하나의 문자열로 연결 형태를 유지합니다. 초기화·새로고침하면 처음 글과 48px 크기로 돌아갑니다. 지원되는 라틴 문자는 전진 폭이 같지만 대체 문자는 다를 수 있습니다.

## 무엇이라 부르는가

고정폭 라틴 글자는 윤곽이 달라도 전진 폭이 같습니다.

한·일 문자, 이모지, 결합 문자, 대체 서체는 달라질 수 있어 지원 문자 집합을 확인하세요.

[W3C](https://www.w3.org/TR/css-fonts-3/)
