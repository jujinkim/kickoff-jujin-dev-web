---
kind: concept
articleId: brutalism
lang: en
title: Brutalism
summary: >-
  Keep raw surfaces readable with plain rules, conventional controls, and
  explicit saved state.
category: styles
aliases:
  - Brutalism
related:
  - theme
  - neobrutalism
  - glassmorphism
  - neumorphism
  - skeuomorphism
  - flat-design
  - minimalism
status: published
revision: 1
sourceRevision: 1
updated: "2026-09-21"
comparison:
  features: "Raw typography, plain borders, and underlined links expose structure."
  advantages: Few decorative decisions keep this card’s content and action roles apparent.
  limitations: >-
    Rough tone may not fit readers; hiding controls or reading order defeats the
    example.
  suitable: An editorial publication deliberately choosing a utilitarian voice.
  combinations: >-
    Pair with minimal information selection and single-column reading; retain
    semantic controls.
checked: "2026-09-21"
---

## Definition

A raw-looking page can still make Save obvious: keep its structure and controls legible while reducing visual polish. Web brutalism describes deliberately unadorned, exposed presentation. It does not require broken navigation, hostile motion, or scrambled reading order. Kate Moran distinguishes this approach from deliberately disorienting antidesign in [NN/g’s account](https://www.nngroup.com/articles/brutalism-antidesign/).

Here, brutalism means plain rules, an unembellished heading, and conventional underlined links. This is a working interpretation for an introductory study, not a certification checklist. A sparse interface is not automatically brutalist, and choosing a monospace font does not settle its identity. Ask which visual decisions expose the document’s structure and which merely add a rough texture.

## Features and examples

**Illustrative example — Raw surface, unchanged task.** Both cards contain the title **Field notes**, summary **Three ways to save an article**, metadata **5 min**, and a **Save** button. They are fictional studies, not service screenshots or usability measurements. The neutral reference establishes the task; the variant changes its presentation.

1. **Input:** Use those three text fields and one saving action. Keep their order: title, summary, reading time, action. The underlined title is a link; Save is a native button with a visible boundary.
2. **Initial state:** Both cards are unsaved. The reference has a conventional panel; the brutalist variant uses a 1px straight border, no decorative shadow, and a raw-looking heading. Its rule separates the card from surrounding content without implying a raised material.
3. **Action:** Tab to Save, inspect its focus outline, then press Enter or Space. An underline identifies the title link even without color. It must not be added to every ordinary sentence, which would weaken the distinction between prose and navigation.
4. **Result:** The button says **Saved** and the visible status confirms the change. Focus stays on the activated control. Reset returns the example to its initial state; refreshing also clears this local demonstration. No real reading list is written.

```text
Content: Field notes / Three ways to save an article / 5 min
Surface: 1px straight border; no decorative shadow
Link: underline retained
State: Save -> Saved; Reset -> Save
```

The heading, rule, and underline perform different jobs: identify content, establish grouping, and signal navigation. Removing a shadow does not remove any of those jobs. At a narrow width, the reference precedes the variant vertically, so comparison does not demand tiny type or sideways reading. The numbered sequence remains the complete text equivalent when JavaScript or the visual study is unavailable.

## Advantages and limitations

For this card, a small set of visible rules makes the presentation straightforward to explain and maintain. A reviewer can trace every treatment to a content or action role. That is an editorial advantage of this example, not evidence that brutalist sites are universally faster, cheaper, or easier to use.

Rough presentation can conflict with the voice of a publication. Test it with the actual article titles, long translations, and intended readers. A heading that looks forceful in a short English sample might become several dense lines in another language. Preserve wrapping and separation instead of imposing an arbitrary one-line shape.

A counterexample is a page that removes the Save boundary, hides its focus ring, and shuffles metadata above unrelated controls to look unconventional. The content still exists, but the task has become harder to locate. This is outside the goal of the study. Keyboard access is a functional requirement independent of style; [W3C’s Keyboard criterion](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html) supplies the relevant basis.

## Comparison within the category

Read these comparisons in one fixed order: **surface and depth → ornament → information retained → action signifiers → background dependence → state visibility**. Each peer keeps the same reading task; differences describe these authored studies, not exclusive rules for every design bearing a label.

- [Neobrutalism](/en/catalog/neobrutalism/): hard offset depth replaces the plain surface; graphic framing adds ornament; all fields remain; a thick button outline reinforces Save; opaque panels limit backdrop effects; Saved still communicates completion in words.
- [Glassmorphism](/en/catalog/glassmorphism/): a translucent layer suggests depth; blur adds a material effect; all fields remain; a solid control preserves the action cue; the backdrop influences the panel; explicit Saved text must survive backdrop changes.
- [Neumorphism](/en/catalog/neumorphism/): soft raised or inset forms replace raw rules; paired shadows decorate the frame; all fields remain; an outlined control supplies a separate cue; surface tones affect perceived depth; state wording survives shadow removal.
- [Skeuomorphism](/en/catalog/skeuomorphism/): a paper reference supplies material meaning; a bookmark adds metaphor; all fields remain; Save names the action; an opaque card controls its backdrop; the bookmark supplements Saved rather than replacing it.
- [Flat design](/en/catalog/flat-design/): simulated depth is reduced; surface ornament is limited; all fields remain; a border and label preserve Save; opaque fills stabilize the background; explicit state text remains necessary.
- [Minimalism](/en/catalog/minimalism/): depth is optional; redundant decoration is removed; unique task information remains; the necessary Save control stays; dependence follows the chosen surface; Saved cannot be discarded as clutter.

## Selection and combination conditions

Consider this approach for an editorial project deliberately choosing a utilitarian voice. Start with a readable single-column document, then introduce raw visual treatments. Keep the logical order in the underlying content. A desktop arrangement should not force a different keyboard sequence from the narrow layout.

Combine it with minimalism when duplicate actions or badges distract from reading. Remove those redundancies, not the article’s summary or only Save control. Combine it with a single column when uninterrupted reading fits the task. Neither combination requires a particular font width. Test the result with color and shadows removed: title, action boundary, focus, and state should still have distinct roles.

## Related reading and sources

The [theme guide](/en/guides/theme/) explains how shared surface, text, and focus tokens keep these decisions consistent across languages and light or dark themes. The six peers above broaden the comparison from raw presentation to material, graphic, and information-selection choices.

Definition sources: Kate Moran, [Brutalism and Antidesign](https://www.nngroup.com/articles/brutalism-antidesign/), published 2017-11-05; Hayat Sheikh, [Neobrutalism](https://www.nngroup.com/articles/neobrutalism/), published 2025-04-11. Sources checked 2026-09-21. Their terminology informs the boundaries; the card, predicted outcomes, and selection advice are authored illustrations and conditional judgments.
