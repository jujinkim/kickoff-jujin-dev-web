---
kind: concept
articleId: glassmorphism
lang: en
title: Glassmorphism
summary: >-
  Compare translucent cards across backgrounds, then preserve the task in opaque
  mode.
category: styles
aliases:
  - Glassmorphism
related:
  - theme
  - brutalism
  - neobrutalism
  - neumorphism
  - skeuomorphism
  - flat-design
  - minimalism
status: published
revision: 1
sourceRevision: 1
updated: "2026-09-21"
comparison:
  features: >-
    Translucent fill and background blur create a layered surface with sharp
    foreground text.
  advantages: The example overlay preserves some surrounding visual context.
  limitations: >-
    Changing backgrounds can weaken contrast; two sample backdrops do not prove
    universal readability.
  suitable: A contextual overlay with constrained backgrounds and an opaque alternative.
  combinations: >-
    Use solid flat controls inside glass framing; remove redundant content, not
    task information.
checked: "2026-09-21"
---

## Definition

Glassmorphism suggests a translucent surface between a viewer and a background. Changing the backdrop can change how that surface and its text appear. The introductory decision is therefore not merely which blur looks attractive, but which backgrounds the card must tolerate and how readers can remove transparency.

[NN/g’s explanation](https://www.nngroup.com/articles/glassmorphism/) identifies fill opacity and background blur as separate controls. [IxDF’s account](https://ixdf.org/literature/topics/glassmorphism) likewise describes blurred backgrounds behind semitransparent panels. These accounts support the mechanism, not a promise that glass improves every interface. In this study, blur affects what is behind the card; the foreground text remains sharp and fully opaque.

## Features and examples

**Illustrative example — Background changes affect readability.** Both cards contain **Field notes**, **Three ways to save an article**, **5 min**, and **Save**. The neutral card provides a stable reference. The glass variant adds a material treatment and controls for inspecting its assumptions. This is a fictional study, not a measured readability experiment.

1. **Input:** Keep the shared content and one Save action. Prepare a simple backdrop and a busier patterned backdrop. Their only role is to expose how much the surface depends on what lies behind it.
2. **Initial state:** The glass card begins unsaved over the simple backdrop. Its light-mode fill is white at **88% opacity**, with **12px background blur**. These values belong to this example. The text itself remains opaque; do not apply opacity or blur to the whole card and its children.
3. **Action:** Switch to the busy background, then select opaque mode. Background changes can alter the perceived panel even though the content stays identical. Opaque mode blocks the backdrop; it preserves the title, summary, reading time, and controls. Tab to Save and activate it with Enter or Space.
4. **Result:** The action becomes **Saved** and status text confirms completion without moving focus. The saved result survives changes to background or surface mode within the example. Reset restores the initial study, and refreshing clears its local saved state. No external reading list is changed.

```text
Light glass fill: white at 88%; background blur: 12px
Foreground text: fully opaque; never blurred
Background: simple -> busy
Surface: translucent -> opaque
State: Save -> Saved; Reset -> initial study
```

The visible comparison labels identify the backdrop and surface choices. At 320px the reference comes before the variant vertically; controls and descriptions wrap. Without JavaScript, the initial cards and this full sequence remain readable. The text equivalent explains the opaque result even when the interactive switch is unavailable.

## Advantages and limitations

For a contextual overlay, a translucent frame can leave some surrounding visual context perceptible. That is the intended benefit of this authored example. It is not evidence that readers understand an interface faster or that preserving any particular amount of background is useful.

The constraint is variability. A screenshot over a calm background cannot establish contrast over a photograph, moving image, or differently colored region. NN/g specifically warns that text can overlap areas with different readability in its [contrast discussion](https://www.nngroup.com/articles/glassmorphism/). Our two backdrops are a demonstration of that dependency, not an exhaustive validation set.

A failure example applies low opacity to the entire card, making both text and button fade into a busy image. Increasing background blur alone does not guarantee a readable foreground. Keep text solid, check the actual composite colors, and use an opaque mode when transparency is unsuitable. [W3C’s Contrast Minimum criterion](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) requires 4.5:1 for ordinary text and 3:1 for qualifying large text, with exceptions. Those thresholds address this criterion, not complete conformance.

## Comparison within the category

Use **surface and depth → ornament → information retained → action signifiers → background dependence → state visibility** in that order. Every sibling retains the same task; the statements concern these studies rather than universal rankings.

- [Brutalism](/en/catalog/brutalism/): a plain surface replaces translucency; exposed rules replace material effects; all fields remain; underlines and boundaries identify actions; opaque surfaces limit backdrop influence; Saved stays explicit.
- [Neobrutalism](/en/catalog/neobrutalism/): hard offset depth replaces a glass layer; graphic framing adds ornament; all fields remain; a thick outline bounds Save; opaque panels stabilize the backdrop; wording carries state beyond color and shadow.
- [Neumorphism](/en/catalog/neumorphism/): soft extrusion replaces see-through depth; paired shadows decorate the frame; all fields remain; a separate outlined control provides the cue; surrounding surface tones affect depth rather than showing through; Saved survives shadow removal.
- [Skeuomorphism](/en/catalog/skeuomorphism/): paper supplies a different material reference; a bookmark conveys metaphor; all fields remain; Save names the operation; an opaque paper card blocks the backdrop; the marker supplements explicit Saved text.
- [Flat design](/en/catalog/flat-design/): reduced depth replaces the translucent layer; surface ornament decreases; all fields remain; solid outlined controls identify actions; opaque fills reduce dependence; state stays readable in words.
- [Minimalism](/en/catalog/minimalism/): depth remains optional; unnecessary ornament is removed; unique information stays; the necessary Save action remains; dependence follows its chosen surface; state information cannot be removed merely to simplify appearance.

## Selection and combination conditions

Consider glass for an overlay whose relationship to surrounding content matters and whose backgrounds you can constrain. Define the opaque alternative before tuning transparency. If arbitrary content can appear underneath, the range of necessary checks grows; a fixed favorable screenshot is insufficient evidence.

Flat controls can sit inside a glass frame. In this combination, the panel conveys layering while a solid Save button provides a stable action boundary. Minimalism can remove redundant badges around the card without removing reading time or state. Those are separate decisions about surface treatment and information selection.

Evaluate both themes, the busy backdrop, keyboard focus, and the opaque mode with real text. Keep a visible label for each option so color is not the only way to recognize the current setting. A successful fallback preserves the task even when the glass effect disappears.

## Related reading and sources

The [theme guide](/en/guides/theme/) extends this example into shared surface and foreground tokens. The six peers above help decide whether an overlay needs material depth at all.

Megan Brown, [Glassmorphism: Definition and Best Practices](https://www.nngroup.com/articles/glassmorphism/), published 2024-06-07; Interaction Design Foundation, [What is Glassmorphism?](https://ixdf.org/literature/topics/glassmorphism), citation date 2021-12-09, living topic page. Checked 2026-09-21. The opacity, blur, card behavior, and selection advice here are authored choices, not values required by those definitions.
