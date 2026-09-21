---
kind: guide
articleId: "tools"
lang: "en"
title: "Language, library, framework, engine"
summary: "Stop comparing tools that do different jobs."
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
aiPrompt: "Classify our candidates as language, library, framework, engine, or a combination. Read the agreed output and runtime constraints. Explain which tools can coexist and compare alternatives at the same layer. Ask about undecided requirements before recommending a stack."
---

## Concept

Languages express programs; libraries supply callable tools; frameworks organize applications; engines integrate runtime systems. Their boundaries can overlap.

## Example

Astro can use TypeScript and a date library. Godot combines scenes, input, rendering, and physics.

## When to choose it

Libraries leave integration to you. Frameworks add conventions. Engines bundle systems but add platform and export constraints. Start with the desired output, target runtime, and team skills. Tools with different roles can coexist. [TypeScript](https://www.typescriptlang.org/docs/handbook/intro.html) · [Godot](https://docs.godotengine.org/en/stable/getting_started/introduction/introduction_to_godot.html) · [Astro](https://docs.astro.build/en/concepts/why-astro/)
