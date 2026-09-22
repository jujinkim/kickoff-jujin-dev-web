# Design demos: implementation and extension

All designs belong **inside the article body**. Site header, navigation, title,
description, comments, URLs, and API v1 remain the surrounding catalog. A demo
may choose its own background, typography, material, layout, and controls.
Within each comparison category, keep **scenario, data, labels, initial state,
and basic actions identical**. Change only the concept under comparison:

| Category   | Shared example                                                                       | Variable                                                   |
| ---------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------------- |
| Styles     | Project workspace; navigation, tasks, progress and resource notes                    | Color, type treatment, borders, shadows, material, spacing |
| Layout     | Six resources; topic filter, order, notes, preview width                             | Region composition and list/grid/masonry placement         |
| Typography | The same Latin sentence, localized phrase, `iiiWWW 0123`, numbers, 48px initial size | Typeface and measured advances                             |

Keep material-specific aids (opaque glass), serif terminal marks, and weight
controls as labeled extras. Do not replace the shared task with a weather app,
concert poster, or invitation. Typography shape and width are different axes:
Noto Sans intentionally appears in both sans-serif and proportional examples.
A future candidate joins the relevant shared scenario; an unrelated category
may define its own scenario after documenting why it needs one.

Independent Astro components still own semantic markup and scoped visual rules.
`tasks.ts`, `resource-behavior.ts`, and `type-behavior.ts` share category behavior;
`resources.ts` supplies the identical six-resource data. `comparison-base.css`
scopes basic controls for layout/type demos to `[data-comparison]`. Style demos
keep their control baseline inside each component; they share only data and
behavior. Do not add a global visual theme.

The current release contains 22 design concepts, 15 platform concepts, 24
monetization concepts, 3 requirements concepts, 3 architecture-boundary concepts and 3 service-decomposition concepts: **49 interactive demos and 21 static diagrams**, 210 localized
concept articles and 36 guide articles (246 published documents). Eight
candidates remain planned. Counts describe this release, not runtime allowlists.

Current monetization evidence: [monetization review](monetization-review.md).

Current platform evidence: [platform review](platform-demos-review.md).
Previous screen evidence: [workspace review](design-workspaces-review.md).
Previous release evidence: [shared-example review](design-comparison-review.md).

## Style workspace contract

All eleven styles use `workshop.ts` for translated project data and `tasks.ts`
for behavior. Each Astro file owns its markup, material, typography, spacing,
and layout. No shared runtime style template or page-wide theme.

- Header: Make room, PROJECT / TODAY, project 01. Menu: Overview, Tasks, Resources.
- Overview: identical goal and description. Tasks: the original three checkboxes,
  All/Open/Done filter and empty-result message.
- Supporting content: completed count, native progress and percentage; Reference
  board and Review checklist, each with a native expandable note.
- Footer: three-task/two-resource summary, reset and live status.
- Initial/reset/reload: All; three unchecked tasks; 0 / 3, 0%; closed notes.
  Material extras reset too. Native links and details work without JavaScript.
- Standard structure: header and menu, then overview/tasks beside progress/resources.
  Below **600px of demo content width**, one column in reading order.
- Exceptions preserve all information and actions: Skeuomorphism uses an open
  notebook; Liquid Glass uses a floating navigation layer; Tactile collage uses
  a board; Retro digital uses windows. No overlap over readable text or controls.
- Neumorphism uses same-tone surfaces, upper-left light and lower-right dark
  shadows, inset selected states, and **no resting decorative borders**, including
  browser-default checkbox/select borders. Keep check marks, strike-through,
  counts, keyboard focus outlines and forced-color identification lines.
- Glass supports manual opaque mode, reduced transparency and missing-filter
  fallback. Expressive motion stops under reduced motion.

Component-specific plans live in [design-briefs](design-briefs/), each following
[the template](templates/design-demo-brief.md). Liquid Glass is a web study, not
Apple native rendering. Collage and retro digital are editorial categories;
Canva's 2026 report is evidence of trends, not an invention date.

Cards and category cards use full-width, proportional images capped at 360px,
`object-fit: cover; object-position: top`. Short images keep natural height;
long images crop only the bottom. Keep full demo PNGs and hide images in list view.

## Plan the example

Copy [the brief](templates/design-demo-brief.md). Define the concept, its nearest
neighbor, visible distinguishing features, scenario, representative action,
initial/changed/reset states, mobile order, and sources. Record the shared
comparison category, fixed content, and exactly which visual property changes. Explain why the example
demonstrates the concept. Keep decorative choices distinct from universal rules.

Sources for implementation: [Astro scoped styles](https://docs.astro.build/en/guides/styling/),
[CSS font classification and metrics](https://www.w3.org/TR/css-fonts-3/), and
[W3C reflow guidance](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html).
Style names are editorial categories; CSS documentation explains mechanisms,
not the history or universal definition of a visual movement. Historical
research lives in [catalog-writing](catalog-writing/README.md).

## Add one design

1. Register a stable candidate in `src/data/candidates.json` and an existing
   leaf category in `src/data/categories.json`. Add a leaf if needed; descendants
   of `design`, all five platform groups, all seven monetization groups and
   `requirements`, `boundaries` and `service-split` participate in publication validation.
   Extend `platformCategories` when introducing a new platform comparison group.
2. Run `npm run content:new -- --id <id>` for all three draft files. The command
   prints this guide and template paths. Never overwrite an existing original.
3. Write and review English first, then translate Korean and Japanese. Keep
   `Concept`, `Example`, `When to choose it` (localized) and the one-minute
   budget. Describe actions and results in Markdown, because static exports
   cannot run the application. Demo text and exploration time are separate.
4. Write `src/components/demos/YourDesign.astro`. Own the markup, styles, state,
   events, and reset, using the category behavior helper where applicable. Use semantic controls; enable JS-dependent controls only
   after mount. State belongs to the current page, never account/server/storage.
5. Add one entry to `src/data/design-demos.json`. The renderer uses an Astro
   glob to resolve the component; **do not edit `DesignDemo.astro` or Card**.
   `DesignId` derives from registry keys. Registry maps only component, caption, mode,
   and capture selector; do not place application state or visual variants here.
6. Review translations and comparison summaries. Set matching `revision` and
   `sourceRevision`; increment the English revision on material changes. Once
   ready for local capture, mark all three reviewed files `published` locally.
7. Capture thumbnails, validate, then retain published status only if every
   completion criterion below passes. Normal builds reject incomplete public
   designs. First-capture workflow below temporarily bypasses **only missing
   thumbnail files**, never missing components or translations.

```json
{
  "your-design": {
    "component": "YourDesign",
    "caption": { "en": "Try the example", "ko": "예제 체험", "ja": "例を試す" },
    "capture": "[data-demo=\"your-design\"]"
  }
}
```

## Component contract

Props: `{ lang: Lang }`. The wrapper receives `{ articleId, lang }`, renders
the caption and local-state/no-JavaScript notes, and excludes demo application
strings from Pagefind. Each component has one `[data-demo="stable-id"]` root.
All DOM queries after discovery use that root. Never mutate `body`, `:root`,
site theme, or other examples. Astro `<style>` scopes selectors to the component.
Dynamic elements need a root-qualified `:global(...)` rule where appropriate.

```astro
---
import type { Lang } from "../../lib/i18n";
import { local } from "./shared";
interface Props {
  lang: Lang;
}
const { lang } = Astro.props;
const t = local(lang);
---

<section
  data-demo="your-design"
  lang={lang}
  data-reset-message={t("Reset", "초기화", "リセット")}
>
  <!-- Design the actual initial screen here, not a generic saved card. -->
  <button
    type="button"
    data-action
    data-interactive
    disabled
    aria-pressed="false"
  >
    {t("Activate", "켜기", "オン")}
  </button>
  <button type="button" data-reset data-interactive disabled>
    {t("Reset", "초기화", "リセット")}
  </button>
  <p role="status" aria-live="polite" aria-atomic="true"></p>
</section>
<script>
  import { mount } from "./shared";
  mount("your-design", (root, say) => {
    const button = root.querySelector<HTMLButtonElement>("[data-action]")!;
    let active = false;
    const update = () => {
      button.setAttribute("aria-pressed", String(active));
      say(`${button.textContent}: ${active ? "✓" : "—"}`);
    };
    button.addEventListener("click", () => {
      active = !active;
      update();
    });
    return () => {
      active = false;
      update();
    };
  });
</script>
<style>
  section {
    min-width: 0;
    overflow-wrap: anywhere;
  }
  button:focus-visible {
    outline: 3px dashed currentColor;
    outline-offset: 4px;
  }
</style>
```

`mount` handles enablement, reset announcement, duplicate mount protection, and
`data-ready`. The callback owns the application and returns its reset function.
Reset keeps focus on the reset button. Localize every instruction, label, empty
state, and announcement; proper names and explicitly Latin specimens may stay
Latin. Give every input an accessible name. Never insert user text with HTML.

Reference implementations: [Brutalism](../src/components/demos/Brutalism.astro)
for task completion/filter/empty states, [Masonry](../src/components/demos/Masonry.astro)
for DOM-preserving height measurement and native details. The latter uses
ResizeObserver after fonts load, shortest-column placement, no DOM reordering,
and a normal CSS grid without JavaScript. Narrow boards become one column.

## Fonts and measurements

`public/fonts/manifest.json` records upstream URLs, original SHA-256 values,
licenses, and exact subset character sets. OFL license files accompany every
family. [fonts.css](../src/components/demos/fonts.css) is imported only by type
specimens. Noto Serif/Sans provide Latin; Noto Serif/Sans KR and JP provide
localized CJK. Dancing Script demonstrates Latin handwriting; JetBrains Mono
demonstrates Latin fixed advances. Unsupported characters use explicit fallbacks.

Rebuild fonts with `python3 -m venv /tmp/design-fonts`, then
`/tmp/design-fonts/bin/pip install fonttools brotli` and
`/tmp/design-fonts/bin/python scripts/subset-design-fonts.py`. The script verifies
the recorded upstream hash before subsetting; changing upstream requires explicit
manifest review. CJK coverage follows demo source text, not all Unicode.
After adding localized text, regenerate and inspect the specimen. All type examples
use DOM Range measurements over one text node after `document.fonts.ready`.
Overlay guides preserve shaping and ligatures; a character range is not an
independent glyph advance when a ligature or contextual shaping is present. Do not confuse glyph ink width, advance, and terminal cell width.

## Commands and capture

For an existing design, run sequentially from repository root:

```sh
npm run check
npm run build
# In another terminal, serve the built files during capture:
node scripts/serve-dist.mjs
npm run thumbnails -- --id masonry
# Omit --id to capture every registered published design in all languages.
# Stop that server before rebuilding dist; browser tests start their own server.
npm run build
npm test
npm run test:e2e
```

When a new design lacks its first thumbnails, use `npm run build:demo-preview`
for the initial local build. Capture, then run the complete normal sequence
above. Never use the preview command in deployment CI. It sets `DESIGN_CAPTURE=1`
to bypass only thumbnail existence checks. Component, caption, translation, and
content checks remain active. Do not publish a preview build.

`STYLE_PREVIEW_ORIGIN` overrides the capture server URL (default port 4322).
The generator rejects unknown `--id`, waits for fonts and interactive mount, restores the
initial state, selects light site theme, clears the reset announcement, and
captures the registry selector. It writes `public/thumbnails/<id>-<lang>.png`.
Cards, previews, and list markup use that same path. Rebuild to copy captures
into `dist`. Thumbnail dimensions may differ because the actual screens differ.

## Completion and debugging

- Same-category demos retain identical content, basic actions, and initial state.
  Browser tests compare their actual text and reset behavior across three languages.
- Visible structure, material, and typography demonstrate the declared concept.
  Compare desktop and mobile captures side by side; a passing build is not a
  visual review. Browser tests save captures in `artifacts/design-demos/`.
- Representative action, repetition, reset, reload, empty inputs, and no results
  work. Keyboard focus stays visible; native reading order and status make sense.
- Check 320/768/1440px, light/dark site themes, no JavaScript, opaque fallback,
  reduced motion, and no shadows. Demo surfaces may retain their authored palette
  in either site theme. Content and controls must remain recognizable.
- Masonry: no overlap after details/resize/font load, unchanged DOM and keyboard
  order, one narrow column. Typography: fonts actually loaded, supported CJK
  glyphs use correct family, measured advances and numeric alignment are correct.
- Three current translations, matching concise Markdown, local thumbnails,
  Pagefind, sitemap, AI catalog, canonical links, and comment identities pass.

| Failure                        | Inspect                                                             |
| ------------------------------ | ------------------------------------------------------------------- |
| Missing registration/component | `src/data/design-demos.json`, filename, `DesignDemo.astro` glob     |
| Missing/stale translation      | three frontmatters, English revision, `validateDesigns`             |
| Missing thumbnail              | capture selector, server build, `npm run thumbnails -- --id …`      |
| Capture waiting for ready      | browser error, root ID, `mount` callback, enabled controls          |
| Overflow or overlap            | component CSS, container breakpoint, ResizeObserver, font readiness |
| Wrong glyph or width           | fonts.css, manifest coverage, network response, DOM Range result    |
| Long overview or absent search | Markdown and `reading-budget.mjs`; rebuild Pagefind                 |
| Expected old article counts    | derive from published articles/registry; avoid new fixed arrays     |

Publication validation lives in `scripts/design-registry.mjs` and is called by
`validate-content.mjs`. Tests mutate missing registration, caption, component,
thumbnail, and translation cases. Future unfinished designs cannot silently pass
the regular build. Rendering, capture discovery, and validation have no fixed
7-design or 18-design allowlist.

## Copyable implementation request

> Implement candidate `<id>` using `docs/design-demos.md` and
> `docs/templates/design-demo-brief.md`. Read candidate scope and neighboring
> concepts. Join the category shared scenario and build an independent article-body Astro demo with localized initial,
> changed, reset, empty, keyboard, mobile, and no-JavaScript states. Review English
> then Korean/Japanese, register through `src/data/design-demos.json`, capture the
> real screens, and complete the documented checks. Preserve IDs, URLs, comments,
> API v1, and the one-minute overview. Record screenshots and actual verification
> results. Scope: local implementation and verification; no deployment.

## Platform concept simulations

The platform groups use the same registry, `{ lang }`, caption and capture contract.
Each Astro component owns its diagram and scoped visual rules. Shared TypeScript
modules implement category behavior; `platform-controls.css` styles controls only.
No real engine, cloud API, or extra UI framework runs inside these simulations.

| Group               | Fixed fixture                                                            | Mechanism under comparison                                            |
| ------------------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------- |
| Static generators   | A17/B04/C99 Markdown + shared layout → index + three article HTML files  | Astro islands, Hugo templates, Jekyll Ruby build                      |
| Web UI              | Two Field notes cards A17/B04; independent saved IDs; total 0→1→2        | React state/render, Vue reactivity/template, Svelte compile/runtime   |
| Game engines        | Player, floor, camera, one collectible; score 0→1, item removed          | Godot node/scene, Unity GameObject/components, Unreal Actor/Blueprint |
| Hosting models      | Article read, Save A17, failure before write, restart, duplicate request | Public files/API, listening process, managed invocations              |
| Release replacement | Four v1 replicas, candidate v2, compatible shared data                   | Rolling sequence, blue-green route switch, canary evaluation          |

Use Previous/Next/Reset for step diagrams; disable unavailable steps and never
auto-advance. Keep direct-action controls mounted so repeat actions can be tested
without moving focus. Number and name states in addition to color. Reset/reload
clears all page state. Hosting restart preserves the simulated external store;
blue-green route reversal and Previous preserve writes until Reset/reload.
Canary's 1,000 samples per cohort are matched illustrative windows, not a traffic
split. Its >1% stop rule is specific to this exercise; zero samples never pass.
Rolling's one spare slot and zero unavailable replicas are example constraints,
not Kubernetes defaults or automatic rollback promises.

Add all three articles, item brief, source refresh and browser state tests before
capturing. The gate rejects missing components, captions, translations and PNGs
for every published member of these five groups. Preview bypasses only absent
first PNGs. Platform screenshots cover every language/width/theme plus forced
colors; registry-wide tests also cover JavaScript-disabled reading and search.

## Static diagrams and monetization

`mode` is optional in `src/data/design-demos.json`: omitted or `"interactive"`
retains the existing lifecycle. `"static"` selects a complete server-rendered
HTML/SVG explanation. Each item still owns a separate Astro component, caption,
capture root, localized text and three thumbnails. Static mode has no script,
`data-interactive`, reset control, mount wait or interaction/no-JavaScript note.
Never label a static component interactive merely to satisfy a capture tool.
The publication gate validates both modes and rejects unknown mode values.

Static example:

```json
{
  "banner-ads": {
    "component": "BannerAds",
    "mode": "static",
    "caption": { "en": "Ad placement", "ko": "광고 배치", "ja": "広告配置" },
    "capture": "[data-demo=\"banner-ads\"]"
  }
}
```

Monetization uses seven independent comparison groups under `business`.
[Source refresh](catalog-writing/monetization-sources.md) and individual
[briefs](design-briefs/) record their shared fixtures. Billing keeps the
100/300/600-export scenario; pricing uses 3 seats and 120 monthly exports.
All prices and outcomes are fictional, with omitted costs stated. Define
billing period, price calculation, access and seller duties separately.
No payment, advertising SDK, account or persistence is connected.

`monetization-math.mjs` uses integer hundredths; pricing components own their
formulas and layouts. Category helpers share behavior, not a page-wide visual
template. Invalid numbers never yield a charge, balances cannot overspend,
non-consumable purchase is idempotent, and each completed ad attempt grants
exactly one hint. Local reset is not a real purchase cancellation/restoration.

The normal sequence remains check → build → thumbnails → rebuild → unit/output
checks → browser tests. Use the first-capture exception only for absent PNGs.
Retain local published status only after all gates pass. See
`tests/monetization.test.mjs` and `tests/browser/monetization.spec.ts`.

## Requirements expression diagrams

The `requirements` group uses one signed-in commuter, unsaved A17 and a need to return later. Its independently composed static diagrams compare a user story's value/acceptance card, a use case's main path/extensions and a job story's situation/motivation/outcome before solution choice. `requirements.ts` shares only the localized fixture and scope boundary. Components own markup and scoped styles.

Acceptance rules and failure-before-write outcomes are authored examples, not guarantees of the description format. Link saving does not promise offline reading. Each English Markdown body carries the corresponding numbered textual explanation. Static mode needs no Save control, artificial tab stops or reset; all content works without JavaScript.

Read [source refresh](catalog-writing/requirements-sources.md), individual [briefs](design-briefs/) and [verification](requirements-review.md). The `requirements` category uses the same complete-publication gate as other demo categories. The normal sequential checks and first-thumbnail exception above apply.

## Architecture boundary diagrams

The `boundaries` group shares SaveArticle(R1, A17), initially unsaved, in one process. HTTP/CLI and memory/embedded database are alternative edges. Three independent static components show responsibility bands, ports and adapters, and nested policy boundaries. `boundaries.ts` shares only fixture text and terminology; it does not provide a visual template.

Solid relations label source dependencies, dashed relations label runtime calls, and dotted enclosures label one process. Closed-layer dependencies descend; hexagonal storage adapters depend on the application-owned port; clean architecture distinguishes inward imports from calls outward through SaveRepository. All diagrams retain the same success, repeat, empty-ID and before-write failure policies. Static diagrams do not execute persistence or imply storage migration.

Read the [source refresh](catalog-writing/boundaries-sources.md), [individual briefs](design-briefs/) and [release record](boundaries-review.md). The category participates in publication validation. Check localized reading order, pattern labels, forced colors, narrow widths and JavaScript-disabled output; normal sequential gates and the initial-thumbnail exception apply.

## Service decomposition diagrams

The `service-split` group shares a reading app with Catalog, Library and Billing, one initial team and no tag on A17. The change adds a compatible Library tag feature while Billing behavior stays the same. `service-split.ts` shares fixture strings only; three components own their layouts and scoped styles.

Monolith shows one artifact release and application-owned storage. Modular monolith shows API gates and module-owned tables within one release; the database may be shared. Microservices shows three release units with owned stores, changing only Library from v1 to v2, plus a Catalog-read timeout before the tag write. Deployment enclosures do not specify physical-machine counts; independent releases do not guarantee failure isolation.

Static diagrams retain the complete release and lookup success/failure traces without controls or JavaScript. Read the [source refresh](catalog-writing/service-split-sources.md), [individual briefs](design-briefs/) and [release record](service-split-review.md). Publication validation includes the `service-split` category; normal sequential gates and the first-thumbnail exception apply.
