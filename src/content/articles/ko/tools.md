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
revision: 2
sourceRevision: 2
updated: "2026-09-21"
aiPrompt: "후보 도구를 언어, 라이브러리, 프레임워크, 엔진 또는 조합으로 분류해줘. 확정된 결과물과 실행 환경 제약부터 읽어줘. 함께 쓸 수 있는 도구를 설명하고 같은 계층의 대안을 비교해줘. 스택 추천 전에 미결정 요구를 질문해줘."
---

## 개념

언어는 프로그램을 표현하고 라이브러리는 호출할 도구를 제공합니다. 프레임워크는 앱을 조직하고 엔진은 실행 시스템을 통합합니다. 경계는 겹칠 수 있습니다.

## 예시

Astro 안에서 TypeScript를 쓰고 날짜 라이브러리를 호출할 수 있습니다. Godot은 장면·입력·렌더링·물리를 통합합니다.

## 추천 조건

라이브러리는 통합을 사용자에게 맡기고 프레임워크는 관례를 더합니다. 엔진은 시스템을 묶지만 플랫폼·내보내기 제약도 따릅니다. 원하는 결과물, 대상 실행 환경, 팀의 기술부터 정하세요. 역할이 다른 도구는 함께 쓸 수 있습니다. [TypeScript](https://www.typescriptlang.org/docs/handbook/intro.html) · [Godot](https://docs.godotengine.org/en/stable/getting_started/introduction/introduction_to_godot.html) · [Astro](https://docs.astro.build/en/concepts/why-astro/)
