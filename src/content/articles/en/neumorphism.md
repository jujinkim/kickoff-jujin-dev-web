---
kind: concept
articleId: neumorphism
lang: en
title: Neumorphism
summary: "Separate soft surface depth from action boundaries, focus, and saved state."
category: styles
aliases:
  - Neumorphism
related:
  - theme
  - brutalism
  - neobrutalism
  - glassmorphism
  - skeuomorphism
  - flat-design
  - minimalism
status: published
revision: 1
sourceRevision: 1
updated: "2026-09-21"
comparison:
  features: Paired soft highlights and shadows suggest raised or inset same-tone forms.
  advantages: >-
    A decorative frame gives the example tactile character without photographic
    texture.
  limitations: >-
    Subtle boundaries and shadow-only state changes can obscure controls and
    outcomes.
  suitable: A decorative panel whose controls remain independently clear.
  combinations: >-
    Place flat outlined controls inside the soft frame and limit redundant
    ornament.
checked: "2026-09-21"
---

## Definition

Neumorphism uses soft highlights and shadows to suggest a shape raised from, or pressed into, a similar-toned surface. It can give a panel tactile visual character, but a surface impression does not by itself communicate whether a control is focused or an article is saved.

[IxDF’s explanation](https://ixdf.org/literature/topics/neumorphism) describes the soft treatment and its weak-boundary risk. [Michał Malewicz’s construction account](https://hype4.academy/articles/design/neumorphism-in-user-interfaces) explains opposing light and dark shadows around a surface. Here we keep that decoration on the frame and give Save an independent outline. This separates a stylistic experiment from the functional requirement to locate an action.

Soft extrusion differs from glass transparency and from a crisp neobrutalist offset shadow. These names overlap in practice; none is a complete specification, accessibility guarantee, or requirement to imitate a real physical object.

## Features and examples

**Illustrative example — Shadows describe surface; labels describe state.** The reference and variant contain **Field notes**, **Three ways to save an article**, **5 min**, and **Save**. They show the same fictional task. The variant changes the impression of its frame while keeping the control’s meaning independent.

1. **Input:** Keep the title, summary, metadata, and one Save button in that order. The control always has a **2px outline** in this study, so its boundary does not rely on shadow.
2. **Initial state:** The card is unsaved and the frame looks raised. Opposing shadows use **6px offsets** and **12px blur**: a light edge toward the upper left and a darker edge toward the lower right. These values illustrate one lighting arrangement, not a required recipe.
3. **Action:** Focus Save with the keyboard, then activate it. Compare the raised frame with the inset option; finally remove shadows. Changing the surface option does not save or unsave the article. A decorative depression must not masquerade as the only evidence of successful saving.
4. **Result:** **Saved** wording and the outlined control remain in every surface mode, including no shadows. Status changes are announced without moving focus. Reset returns the example to its initial raised, unsaved state; refreshing also clears this local state. The example does not write to a real account.

```text
Raised frame: paired light/dark shadows; offsets ±6px; blur 12px
Inset frame: paired shadows drawn inward
No shadows: frame depth disappears; button outline remains
Save boundary: 2px; state: Save -> Saved
Reset: raised frame and unsaved state
```

A reader should be able to identify the light direction, then ignore it and still complete the task. The figure’s caption and labels distinguish surface from state. On a narrow screen, the reference precedes the variant vertically. Without JavaScript, the initial study and this numbered description remain available; no interactive result is needed to understand the shadow-free fallback.

## Advantages and limitations

For a decorative reading panel, soft extrusion can establish a tactile visual voice without a photographic texture. That is the intended benefit of this example, not evidence of improved conversion or easier interaction. Keep the treatment limited enough that a reader can tell which boundaries are decoration and which enclose controls.

Subtle shadow differences can become poor action cues. IxDF’s [accessibility discussion](https://ixdf.org/literature/topics/neumorphism) warns that low contrast and weak distinctions can make buttons difficult to discern. The response here is not to declare every soft surface unusable, but to provide independent labels, borders, and focus indicators.

Consider the failed alternative: Save is an unlabeled soft bump, and completion merely reverses its shadows. With shadows removed, the control and its state become indistinguishable from the background. Even with shadows present, a pressed appearance might describe a momentary interaction rather than a lasting saved result. State wording resolves that ambiguity in our card.

Check ordinary text contrast against the actual surface. [W3C’s Contrast Minimum explanation](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) distinguishes ordinary and qualifying large text. Its thresholds do not certify a whole interface; controls, focus, keyboard behavior, and reflow need their own checks.

## Comparison within the category

The fixed sequence is **surface and depth → ornament → information retained → action signifiers → background dependence → state visibility**. All six comparisons preserve this study’s reading task and allow styles to be combined.

- [Brutalism](/en/catalog/brutalism/): a plain surface replaces soft extrusion; raw rules replace shadows; all fields remain; conventional boundaries and underlines expose actions; opaque surfaces control the backdrop; Saved stays explicit without material effects.
- [Neobrutalism](/en/catalog/neobrutalism/): hard offset depth replaces soft depth; graphic borders provide ornament; all fields remain; a thick boundary identifies Save; opaque panels reduce backdrop dependence; words distinguish saved state from the permanent shadow.
- [Glassmorphism](/en/catalog/glassmorphism/): a translucent layer replaces extrusion; blur supplies material decoration; all fields remain; solid controls preserve cues; the background shows through and affects appearance; Saved must survive both backdrop changes and opaque mode.
- [Skeuomorphism](/en/catalog/skeuomorphism/): paper supplies a recognizable object reference; a bookmark adds metaphor; all fields remain; Save names the action; an opaque card limits background effects; the marker accompanies explicit Saved text.
- [Flat design](/en/catalog/flat-design/): simulated depth is reduced; outlines replace paired shadows; all fields remain; a bounded button preserves action cues; opaque fills stabilize the backdrop; words retain state without lighting effects.
- [Minimalism](/en/catalog/minimalism/): depth is optional; redundant ornament is removed; unique task information remains; the necessary control survives; dependence follows the selected material; saved status remains necessary information.

## Selection and combination conditions

Consider the style for a decorative panel whose controls are independently clear. Start with usable outlined controls and then add soft treatment around them. If removing the treatment breaks the task, the frame has been given too much responsibility.

A flat Save button inside a neumorphic card is a deliberate combination: the frame establishes tone while the button supplies an explicit boundary. Minimal content can keep the panel from becoming crowded, provided it preserves the title, reading time, summary, and one action. Neither decision requires every element to share the same shadow treatment.

Avoid using faint shadow reversal as the only cue for an important action. Inspect focus separately from pressed appearance and persistent saved state. Test the no-shadow version and grayscale rendering, then check the actual light and dark palettes. Keeping those distinctions explicit is more useful than enforcing stylistic purity.

## Related reading and sources

The [theme guide](/en/guides/theme/) explains how shared tokens express surface, text, and focus roles. The sibling articles above compare other ways to give the same card character without changing its task.

Interaction Design Foundation, [What is Neumorphism?](https://ixdf.org/literature/topics/neumorphism), citation date 2021-12-09, living topic page; Michał Malewicz, [Neumorphism in user interfaces](https://hype4.academy/articles/design/neumorphism-in-user-interfaces), publication date not displayed in the inspected page. Checked 2026-09-21. Shadow values, the control boundary, and selection advice are authored illustration choices.
