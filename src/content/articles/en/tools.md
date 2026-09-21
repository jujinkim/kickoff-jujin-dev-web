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
revision: 1
sourceRevision: 1
updated: "2026-09-21"
aiPrompt: "Classify our candidates as language, library, framework, engine, or a combination. Read the agreed output and runtime constraints. Explain which tools can coexist and compare alternatives at the same layer. Ask about undecided requirements before recommending a stack."
---

## Concept

A language expresses programs. A library supplies callable capabilities. A framework structures application execution and conventions. An engine integrates major runtime systems, often with an editor. Boundaries overlap; product labels are not a universal taxonomy.

## When you need it

Use these distinctions when someone asks whether to use TypeScript or Astro. That is like choosing between a writing system and a printing press. They can belong to the same solution.

## Example

A content website can use TypeScript inside Astro and call a date library. A Godot game can use GDScript for behavior while the engine handles scenes and rendering. The example separates roles, not quality rankings.

```text
Language: TypeScript -> expresses program rules
Library: date utility <- your code calls it
Framework: Astro -> organizes pages and rendering
Engine: Godot -> scene, input, rendering, physics
```

## Options and tradeoffs

A small library leaves structure under your control but requires integration work. A framework gives conventions and tooling but constrains structure and upgrades. An engine saves building runtime systems but adds platform, size, and export considerations.

## When to choose it

Begin with output: article site, interactive app, or game. Then identify runtime and team skills. Compare candidates at the same layer. Do not add a game engine to format a date just because its demo had impressive shadows.

## AI instructions

Classify our candidates as language, library, framework, engine, or a combination. Read the agreed output and runtime constraints. Explain which tools can coexist and compare alternatives at the same layer. Ask about undecided requirements before recommending a stack.

## Related reading and sources

- [Astro, Hugo, Jekyll: three ways to ship HTML](/en/guides/static-sites/)
- [Runtime, distribution, hosting: three questions](/en/guides/shipping/)

- [TypeScript — Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Godot — Introduction](https://docs.godotengine.org/en/stable/getting_started/introduction/introduction_to_godot.html)
- [Astro — Why Astro](https://docs.astro.build/en/concepts/why-astro/)
