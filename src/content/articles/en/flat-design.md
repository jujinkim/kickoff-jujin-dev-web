---
kind: concept
articleId: flat-design
lang: en
title: Flat design
summary: >-
  Remove simulated depth while preserving boundaries, labels, focus, and saved
  state.
category: styles
aliases:
  - Flat design
related:
  - theme
  - brutalism
  - neobrutalism
  - glassmorphism
  - neumorphism
  - skeuomorphism
  - minimalism
status: published
revision: 1
sourceRevision: 1
updated: "2026-09-21"
comparison:
  features: "Two-dimensional surfaces reduce gloss, gradients, and simulated depth."
  advantages: "The example uses a small, consistent set of fills and outlines."
  limitations: Removing depth and replacement action cues together can hide controls.
  suitable: >-
    Interfaces with explicit labels, recognizable controls, and visible focus
    and state.
  combinations: >-
    Works with dense lists or minimal content; limited depth can clarify
    selected hierarchy.
checked: "2026-09-21"
---

## Definition

Flat design concerns surface treatment: shapes look two-dimensional rather than glossy, raised, or deeply inset. The Interaction Design Foundation describes simple two-dimensional elements; this article focuses on reduced simulated depth rather than prescribing a bright palette. A flat card may still contain substantial information. [IxDF: Flat Design](https://ixdf.org/literature/topics/flat-design)

Minimalism asks which information and features the task needs. Flat design asks how their surfaces appear. Removing a gradient changes the latter without removing a sentence or button. NN/g explicitly separates these frequently overlapping ideas. A dense table can use flat cells, while a sparse page can use a raised button. [NN/g: Characteristics of Minimalism](https://www.nngroup.com/articles/characteristics-minimalism/)

The practical question is whether the reader can still identify Save after decorative depth disappears. A two-dimensional surface does not require a control to resemble ordinary body text.

## Features and examples

**Illustrative example — Removing depth still requires action cues.** The neutral reference and flat variant use identical content. A separate rejected variant explains what goes wrong when flattening also removes the control boundary.

1. **Input:** a reading card with title Field notes, summary Three ways to save an article, metadata 5 min, Save, and the Saved result. The gloss described here is decorative, not information.
2. **Initial state:** imagine the card with a glossy frame and a visibly bounded Save button. The reference establishes the reading task; the flattened variant retains every word while removing gradients and shadows.
3. **Action:** set the gradient to none and shadow to none, while keeping the Save outline and label. Tab to Save, observe the focus outline, then activate it with Enter or Space, or click it.
4. **Result:** the surface remains flat and the result reads Saved. The control remains identifiable before activation and its focus stays visible. Reset or refresh restores the initial demonstration state; saving does not persist to an account.

```css
/* Illustrative changes, not a universal flat-design specification. */
.flat-card {
  background-image: none;
  box-shadow: none;
}
.flat-card button {
  border: 2px solid currentColor;
}
.flat-card button:focus-visible {
  outline: 3px dashed currentColor;
  outline-offset: 3px;
}
```

The example's 2px border and 3px focus outline are authored choices. The key relation is that removal of depth leaves an independent action cue. The rejected text describes Save after its boundary and other distinguishing cues disappear: it looks like surrounding prose. That is a deliberate counterexample, not an additional control to activate.

At 320px the panels stack rather than shrinking the text. The visible description and static states remain available without JavaScript. Color or shadow removal does not erase Saved or the shape of the control.

## Advantages and limitations

This card can be expressed with a small collection of solid fills and outlines. That makes the example's visual decisions easy to inspect. It does not establish faster loading, better conversion, or automatic accessibility: those claims would need evidence about an actual implementation and audience.

The main risk is removing action signifiers together with depth. NN/g describes the click uncertainty that can follow weakly distinguished controls. A label such as Save, a visible boundary, and a consistent location provide separate cues in our fixture. A hover change alone arrives too late for someone who has not located the action. [NN/g: Flat Design](https://www.nngroup.com/articles/flat-design/)

Our border is a design choice, not a claim that WCAG requires borders on all buttons. W3C explains that visual information needed to identify controls and states needs 3:1 contrast against adjacent colors, with exceptions; sufficiently identifiable text controls need not have an enclosing boundary. Check the actual cues your design relies on. [W3C: Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)

## Comparison within the category

Compare the same reading task along these six ordered axes. No style name alone decides usability.

- **Surface and depth:** [Brutalism](/en/catalog/brutalism/) exposes a raw structure; [neobrutalism](/en/catalog/neobrutalism/) uses hard shadows; [glassmorphism](/en/catalog/glassmorphism/) suggests transparent layers; [neumorphism](/en/catalog/neumorphism/) uses soft relief. Flat treatment reduces these depth cues. [Skeuomorphism](/en/catalog/skeuomorphism/) names a physical reference; [minimalism](/en/catalog/minimalism/) concerns selection.
- **Ornament:** removing gloss differs from raw typography, graphic emphasis, blur, soft shadows, or a bookmark reference. Minimalism can remove unnecessary decorations regardless of which surface remains. A flat bookmark can preserve an object analogy.
- **Information retained:** our flat variant keeps title, summary, time, and Save unchanged, as do the other style studies. Only the minimalist example introduces redundant additions specifically to demonstrate removing them.
- **Action signifiers:** raw underlines and heavy outlines can be flat. Glass and soft frames need independent controls. A skeuomorphic marker supports a label; minimalism preserves the needed action. Our flat Save retains an explicit border.
- **Background dependence:** an opaque flat fill gives a controlled local background. Glass exposes background variation; soft relief needs compatible surrounding tones. Brutalism, neobrutalism, skeuomorphism, and minimalism still require contrast choices rather than receiving a style exemption.
- **State visibility:** Saved text and focus outline remain when depth disappears. The same requirement applies to every sibling: a hard shadow, blur, soft inset, bookmark, or sparse arrangement cannot replace a clear state by itself.

## Selection and combination conditions

Choose flat treatment when the required actions can remain recognizable through labels, shapes, placement, and consistent interaction. Review the default state first: readers must locate Save before they can benefit from its focus or hover styling. Compare the accepted and rejected studies without activating anything.

Flat surfaces suit either a dense list or a minimalist page if the content structure remains intelligible. A flat bookmark icon can preserve the paper metaphor without realistic texture. Flat buttons inside glass or neumorphic frames separate control recognition from decorative depth.

Limited depth can still clarify a selected layer in a predominantly flat interface. Decide what that exception communicates instead of defending purity. Conversely, do not add a shadow simply because a flat control feels unfamiliar; inspect its label, boundary, and position first. These are editorial selection conditions for this fixture, not universal rankings.

## Related reading and sources

The [theme guide](/en/guides/theme/) connects surface choices to typography and hierarchy. Read [minimalism](/en/catalog/minimalism/) to separate removing ornament from removing information, and use the other five siblings above to compare alternative depth and metaphor choices.

Sources checked 2026-09-21: Interaction Design Foundation, _Flat Design_ (living topic page; definition publication date not displayed); Kate Moran, NN/g, _Flat Design_ (2015-09-27) and _The Characteristics of Minimalism in Web Design_ (2015-07-12); W3C WAI, _Understanding SC 1.4.11_ (living guidance). The CSS values and rejected card are authored examples, not measured findings.
