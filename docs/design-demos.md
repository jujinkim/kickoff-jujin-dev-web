# Design demos: implementation and extension

All designs belong **inside the article body**. Site header, navigation, title,
description, comments, URLs, and API v1 remain the surrounding catalog. A demo
may choose its own background, typography, material, layout, and controls.
Within each comparison category, keep **scenario, data, labels, initial state,
and basic actions identical**. Change only the concept under comparison:

| Category   | Shared example                                                                       | Variable                                                   |
| ---------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------------- |
| Styles     | Three-task checklist; completion and status filter                                   | Color, type treatment, borders, shadows, material, spacing |
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
scopes basic controls to `[data-comparison]`. Do not add a global visual theme.

The current release contains 18 designs / 54 translated design articles plus
36 guide articles. Forty candidates remain planned. Counts here describe this
release, not runtime allowlists.

Current screen evidence: [shared-example review](design-comparison-review.md).

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
   design leaf category in `src/data/categories.json`. Add a leaf if needed;
   descendants of `design` participate in publication validation automatically.
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
   `DesignId` derives from registry keys. Registry maps only component, caption,
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
The generator rejects unknown `--id`, waits for mount and fonts, restores the
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
