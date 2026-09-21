---
kind: concept
articleId: skeuomorphism
lang: en
title: Skeuomorphism
summary: >-
  Physical references can explain a digital action when the metaphor supports an
  explicit label.
category: styles
aliases:
  - Skeuomorphism
related:
  - theme
  - brutalism
  - neobrutalism
  - glassmorphism
  - neumorphism
  - flat-design
  - minimalism
status: published
revision: 1
sourceRevision: 1
updated: "2026-09-21"
comparison:
  features: Physical references inform appearance or interaction; realism is optional.
  advantages: A familiar bookmark can reinforce the meaning of saved status.
  limitations: >-
    Unfamiliar metaphors and unnecessary physical constraints can obscure the
    task.
  suitable: >-
    A reading task whose audience recognizes bookmarks, with explicit Save and
    Saved labels.
  combinations: >-
    Pair a flat bookmark shape with minimal content and independent button
    boundaries.
checked: "2026-09-21"
---

## Definition

Skeuomorphism brings a physical reference into a digital interface. It can borrow appearance, interaction, or both: the Interaction Design Foundation describes objects that resemble real counterparts and draw on recognizable concepts. Here the reference is a paper index card with a bookmark. The digital task remains saving an article. [IxDF: Skeuomorphism](https://ixdf.org/literature/topics/skeuomorphism)

A metaphor and a realistic texture do different jobs. A bookmark can suggest keeping a place even when drawn as a plain outline. Photographic paper grain can decorate a panel without explaining any action. NN/g distinguishes this functional metaphor from realism used for appearance alone. Our study therefore needs neither a photographed desk nor a simulated page-turn animation. [NN/g: Flat Design](https://www.nngroup.com/articles/flat-design/)

This is a scoped example, not a claim that everyone knows bookmarks. The visible Save label carries the action; the physical reference supplies an additional explanation for readers who recognize it.

## Features and examples

**Illustrative example — Bookmark metaphor supports the Save label.** Compare the neutral card with the paper-card variant. Both contain precisely the same reading information. The following sequence is the complete text equivalent of the study.

1. **Input:** title Field notes; summary Three ways to save an article; metadata 5 min; a Save button and a place for the Saved result. Saving is local demonstration state, not an account feature.
2. **Initial state:** the neutral frame has no object reference. The variant uses a paper-colored frame and a bookmark marker. The marker starts unmarked. Nothing requires recognizing the paper or knowing how a physical bookmark works.
3. **Action:** focus Save with the keyboard, then activate it with Enter or Space, or click it. A visible focus outline identifies the control. No dragging, page folding, or precise placement is required.
4. **Result:** Saved appears as text and the bookmark becomes marked. Focus stays on the activated button; the result is announced. The title, summary, and reading time remain intact. Reset, or refreshing the page, returns the demonstration to its initial state.

```text
Physical reference: paper card + bookmark
Digital action: Save
Result: Saved + marked bookmark
Reset: unmarked bookmark + initial save state
```

The changed tokens describe the reference, not a required recipe: paper surface and bookmark shape replace the neutral frame. A bookmark must not cover the title or serve as the only state indicator. With color and shadows removed, the Save/Saved wording still explains what happened. At narrow widths the reference and variant stack in reading order. Without JavaScript the static studies and this sequence remain readable.

## Advantages and limitations

For an audience familiar with bookmarks, a marked bookmark may reinforce the idea of returning to an article. That is our conditional design judgment, not a measured improvement in speed or comprehension. The accompanying label makes the same task possible for someone who sees an unfamiliar ribbon shape.

The metaphor becomes a liability when the object starts dictating unnecessary behavior. A fictional interface that requires dragging a ribbon onto a tiny paper corner would add a precision task unrelated to saving. A realistic crease might also resemble damage or dismissal. Neither physical limitation belongs to the digital task merely because paper inspired its appearance.

Keep meaningful marks separate from decoration. Text still needs sufficient contrast against the paper color; ordinary text generally requires 4.5:1 under WCAG 2.2 SC 1.4.3, with specified exceptions. Texture is not a substitute for checking foreground and background colors. [W3C: Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)

## Comparison within the category

These comparisons use the same card and six axes in order. They describe the proposed studies, not exclusive definitions or rankings.

- **Surface and depth:** [Brutalism](/en/catalog/brutalism/) exposes a raw frame; [neobrutalism](/en/catalog/neobrutalism/) adds hard offset depth; [glassmorphism](/en/catalog/glassmorphism/) layers translucency; [neumorphism](/en/catalog/neumorphism/) models soft extrusion. Skeuomorphism names the object reference. [Flat design](/en/catalog/flat-design/) reduces depth; [minimalism](/en/catalog/minimalism/) selects what remains.
- **Ornament:** raw typography, bold outlines, glass blur, and soft shadows differ from the bookmark reference. Flat treatment can simplify that marker; minimalist editing can remove surrounding decoration while preserving its meaning.
- **Information retained:** all seven retain title, summary, time, and Save. The paper frame adds an analogy, not new article information. Minimalism removes only the explicitly redundant additions in its study.
- **Action signifiers:** brutalist underlines and neobrutalist borders emphasize controls; glass and neumorphic frames need independently clear controls. Our bookmark accompanies Save. Flat controls retain boundaries; minimalist editing retains the original action.
- **Background dependence:** opaque paper limits interference from surrounding imagery. Glass explicitly depends on what lies behind it. Soft extrusion depends on neighboring tones; raw, hard-outline, flat, and minimal variants still need suitable contrast.
- **State visibility:** marked bookmark plus Saved replaces interpretation of decoration alone. Every sibling likewise keeps written state and visible focus, whether its characteristic shadows or color survive or disappear.

## Selection and combination conditions

Use this approach when the reference helps explain the actual task to the intended audience. Ask a reader what the bookmark means before explaining it yourself. If the answer differs from saving for later, retain the label and reconsider the metaphor. Do not infer recognition from your own familiarity.

A flat bookmark icon can coexist with this physical reference because representation does not require realistic depth. Minimal content can surround it when no unique fact is removed. A single-column reading layout can carry either version. These are conditional combinations: each must preserve clear controls, reading order, and the meaning of Saved.

Avoid copying an entire physical system merely to justify one useful analogy. A reading card does not need a wooden cabinet, simulated paper capacity, or a compulsory filing gesture. Start with the smallest reference that supports the task, then assess it alongside the neutral card.

## Related reading and sources

The [theme guide](/en/guides/theme/) puts this choice alongside typography, hierarchy, and other surface treatments. The six sibling studies above let you compare the same task without changing the article information.

Sources checked 2026-09-21: Interaction Design Foundation, _Skeuomorphism_ (living topic page; no publication date displayed for the definition); Kate Moran, NN/g, _Flat Design_ (2015-09-27); and W3C WAI, _Understanding SC 1.4.3_ (living guidance). Source definitions support the stated mechanisms. The paper-card fixture, predicted states, and selection advice are authored illustrations, not research results.
