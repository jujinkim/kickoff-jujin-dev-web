---
kind: guide
articleId: "tools"
lang: "ko"
title: "언어·프레임워크·라이브러리·엔진 구분"
summary: "하는 일이 다른 도구끼리 결승전을 열지 마세요."
category: "development"
aliases:
  [
    "language",
    "framework",
    "library",
    "engine",
    "언어",
    "프레임워크",
    "라이브러리",
    "엔진",
    "言語",
    "フレームワーク",
    "ライブラリ",
    "エンジン",
  ]
related: ["static-sites", "shipping"]
example: "tools"
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-09-21"
aiPrompt: "후보 도구를 언어, 라이브러리, 프레임워크, 엔진 또는 조합으로 분류해줘. 확정된 결과물과 실행 환경 제약부터 읽어줘. 함께 쓸 수 있는 도구를 설명하고 같은 계층의 대안을 비교해줘. 스택 추천 전에 미결정 요구를 질문해줘."
---

## 개념

언어는 프로그램을 표현하고, 라이브러리는 호출할 기능을 제공합니다. 프레임워크는 실행 구조와 관례를 정합니다. 엔진은 주요 런타임 시스템을 통합하며 편집기를 제공하기도 합니다. 경계는 겹치며 제품 이름이 절대적인 분류는 아닙니다.

## 필요한 상황

TypeScript와 Astro 중 무엇을 쓸지 묻는 상황에서 유용합니다. 문자 체계와 인쇄기 중 하나를 고르는 셈입니다. 둘은 한 해결책 안에 함께 들어갈 수 있습니다.

## 예시

콘텐츠 사이트는 Astro 안에서 TypeScript를 쓰고 날짜 라이브러리를 호출할 수 있습니다. Godot 게임은 GDScript로 행동을 작성하고 엔진에 장면과 렌더링을 맡깁니다. 아래 예시는 순위가 아니라 역할 분리입니다.

```text
Language: TypeScript -> expresses program rules
Library: date utility <- your code calls it
Framework: Astro -> organizes pages and rendering
Engine: Godot -> scene, input, rendering, physics
```

## 선택지와 tradeoff

작은 라이브러리는 구조를 직접 정할 수 있지만 연결 작업이 필요합니다. 프레임워크는 관례와 도구를 주지만 구조와 업그레이드에 제약이 생깁니다. 엔진은 런타임 구현을 줄이는 대신 플랫폼·용량·내보내기 조건을 추가합니다.

## 추천 조건

글 사이트, 대화형 앱, 게임 중 결과물부터 정하세요. 실행 환경과 팀 경험을 확인한 뒤 같은 계층의 후보를 비교합니다. 그림자가 멋있다고 날짜 포맷에 게임 엔진을 넣지는 마세요.

## AI 지시 예시

후보 도구를 언어, 라이브러리, 프레임워크, 엔진 또는 조합으로 분류해줘. 확정된 결과물과 실행 환경 제약부터 읽어줘. 함께 쓸 수 있는 도구를 설명하고 같은 계층의 대안을 비교해줘. 스택 추천 전에 미결정 요구를 질문해줘.

## 관련 글과 출처

- [Astro·Hugo·Jekyll: HTML을 보내는 세 방법](/ko/guides/static-sites/)
- [웹·앱·PC·콘솔: 실행·유통·호스팅 구분](/ko/guides/shipping/)

- [TypeScript — Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Godot — Introduction](https://docs.godotengine.org/en/stable/getting_started/introduction/introduction_to_godot.html)
- [Astro — Why Astro](https://docs.astro.build/en/concepts/why-astro/)
