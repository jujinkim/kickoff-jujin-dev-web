# Full expansion review — 2026-09-27

This records the first full expansion. Subsequent distinguishing-example and image
delivery changes are documented in [the follow-up review](strong-examples-review.md).

The user approved the common screens and glassmorphism revision 12. This expansion
implements the remaining 57 concepts and 8 guides without an intermediate approval.
The final scope is 64 active concepts, 9 guides and 219 localized articles, with
219 supplementary documents (195 added here). The active list comes from published
content after retirement filtering, not from the earlier representative list.

## Automated evidence

Final sequential verification passed: check → build → 243 thumbnail captures →
rebuild → 48/48 unit/output tests → 161/161 browser tests. Astro check reports
196 files, zero errors, warnings or hints. Content validation covers all 246
published translations; Pagefind indexes the 219 active pages. No checks ran
concurrently with an Astro build.

The browser matrix covers every active article in EN/KO/JA at
320/390/768/1440px in light and dark themes, plus 200% text at 768px.
It verifies supplementary disclosures/evidence, decoded images, page errors,
keyboard/reset behavior, reduced motion and JavaScript-disabled reading.
Action suites cover each new representative interaction, repetition, empty/error
states, reset and reload where applicable. Regression checks cover prompt copy
failure, non-persistence, search/aliases, card/list views and reference routes.
Local fonts and measured widths are verified against the loaded faces.

The first full browser run passed 149 tests and exposed 12 failures. Corrections address long article-title wrapping,
resize settlement before Masonry assertions, the Liquid Glass demo heading,
and a repair-booth fixture count. Direct visual and computed checks also found
selected-button contrast, three guide eyebrow colors inherited from the shared
dark theme, and a small weather-log specimen; these were corrected.

Computed contrast audit: 8,088 visible text samples across all 219 localized
article demos and both site themes pass their applicable 4.5:1 or 3:1 thresholds.
Disabled controls are excluded. The theme guide includes its local dark state and
visible form error. Translucent glass is composited over both black and white and
the lower ratio is retained; collage dots use their darker composited fill.
The audit covers initial screens and those named states, not every possible state.
[Contrast results](../artifacts/quality-review/contrast-audit.json) and
[audit script](../artifacts/quality-review/audit-contrast.mjs) are retained locally.
[Check](../artifacts/quality-review/check-final.log),
[unit/output](../artifacts/quality-review/unit-final.log) and
[browser logs](../artifacts/quality-review/browser-final.log) record the final runs.

## Direct visual review

Every active demo listed below was directly inspected at desktop and 320px mobile
sizes. English desktop captures and full mobile captures were inspected separately
from automated assertions. Layout, image rendering, readable state labels, visual
hierarchy, clipping and overlap were checked. The individual style examples retain
different purposes, composition and interaction. Planning, platform and payment
models retain their own diagrams and explicit simulation boundaries.

All six corrected demos were re-inspected after the final rebuild, including
Korean mobile captures in the dark site theme. The museum, weather log and photo
diary were also re-inspected at 320px. Korean dark-theme captures from the full matrix live under `artifacts/quality-review/`. Generated
artifacts are local, ignored by Git, and must be regenerated when reviewing a new
checkout. Browser coverage uses Chromium; this record does not claim complete WCAG
conformance or untested browser and assistive-technology coverage.

| Demo                      | Desktop, 1440px light                                                 | Mobile, 320px light                                                 |
| ------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `advertising`             | [Desktop](../artifacts/design-demos/advertising-1440.png)             | [Mobile](../artifacts/design-demos/advertising-320.png)             |
| `affiliate-marketing`     | [Desktop](../artifacts/design-demos/affiliate-marketing-1440.png)     | [Mobile](../artifacts/design-demos/affiliate-marketing-320.png)     |
| `always-on-server`        | [Desktop](../artifacts/design-demos/always-on-server-1440.png)        | [Mobile](../artifacts/design-demos/always-on-server-320.png)        |
| `architecture`            | [Desktop](../artifacts/design-demos/architecture-1440.png)            | [Mobile](../artifacts/design-demos/architecture-320.png)            |
| `astro`                   | [Desktop](../artifacts/design-demos/astro-1440.png)                   | [Mobile](../artifacts/design-demos/astro-320.png)                   |
| `banner-ads`              | [Desktop](../artifacts/design-demos/banner-ads-1440.png)              | [Mobile](../artifacts/design-demos/banner-ads-320.png)              |
| `base-plus-overage`       | [Desktop](../artifacts/design-demos/base-plus-overage-1440.png)       | [Mobile](../artifacts/design-demos/base-plus-overage-320.png)       |
| `brutalism`               | [Desktop](../artifacts/design-demos/brutalism-1440.png)               | [Mobile](../artifacts/design-demos/brutalism-320.png)               |
| `clean-architecture`      | [Desktop](../artifacts/design-demos/clean-architecture-1440.png)      | [Mobile](../artifacts/design-demos/clean-architecture-320.png)      |
| `consumable-purchase`     | [Desktop](../artifacts/design-demos/consumable-purchase-1440.png)     | [Mobile](../artifacts/design-demos/consumable-purchase-320.png)     |
| `direct-payment`          | [Desktop](../artifacts/design-demos/direct-payment-1440.png)          | [Mobile](../artifacts/design-demos/direct-payment-320.png)          |
| `direct-seller`           | [Desktop](../artifacts/design-demos/direct-seller-1440.png)           | [Mobile](../artifacts/design-demos/direct-seller-320.png)           |
| `feature-tiered-pricing`  | [Desktop](../artifacts/design-demos/feature-tiered-pricing-1440.png)  | [Mobile](../artifacts/design-demos/feature-tiered-pricing-320.png)  |
| `flat-design`             | [Desktop](../artifacts/design-demos/flat-design-1440.png)             | [Mobile](../artifacts/design-demos/flat-design-320.png)             |
| `flat-rate-pricing`       | [Desktop](../artifacts/design-demos/flat-rate-pricing-1440.png)       | [Mobile](../artifacts/design-demos/flat-rate-pricing-320.png)       |
| `free-trial`              | [Desktop](../artifacts/design-demos/free-trial-1440.png)              | [Mobile](../artifacts/design-demos/free-trial-320.png)              |
| `freemium`                | [Desktop](../artifacts/design-demos/freemium-1440.png)                | [Mobile](../artifacts/design-demos/freemium-320.png)                |
| `glassmorphism`           | [Desktop](../artifacts/design-demos/glassmorphism-1440.png)           | [Mobile](../artifacts/design-demos/glassmorphism-320.png)           |
| `godot`                   | [Desktop](../artifacts/design-demos/godot-1440.png)                   | [Mobile](../artifacts/design-demos/godot-320.png)                   |
| `graduated-pricing`       | [Desktop](../artifacts/design-demos/graduated-pricing-1440.png)       | [Mobile](../artifacts/design-demos/graduated-pricing-320.png)       |
| `hexagonal-architecture`  | [Desktop](../artifacts/design-demos/hexagonal-architecture-1440.png)  | [Mobile](../artifacts/design-demos/hexagonal-architecture-320.png)  |
| `hugo`                    | [Desktop](../artifacts/design-demos/hugo-1440.png)                    | [Mobile](../artifacts/design-demos/hugo-320.png)                    |
| `interstitial-ads`        | [Desktop](../artifacts/design-demos/interstitial-ads-1440.png)        | [Mobile](../artifacts/design-demos/interstitial-ads-320.png)        |
| `jekyll`                  | [Desktop](../artifacts/design-demos/jekyll-1440.png)                  | [Mobile](../artifacts/design-demos/jekyll-320.png)                  |
| `layered-architecture`    | [Desktop](../artifacts/design-demos/layered-architecture-1440.png)    | [Mobile](../artifacts/design-demos/layered-architecture-320.png)    |
| `layout`                  | [Desktop](../artifacts/design-demos/layout-1440.png)                  | [Mobile](../artifacts/design-demos/layout-320.png)                  |
| `liquid-glass`            | [Desktop](../artifacts/design-demos/liquid-glass-1440.png)            | [Mobile](../artifacts/design-demos/liquid-glass-320.png)            |
| `list-layout`             | [Desktop](../artifacts/design-demos/list-layout-1440.png)             | [Mobile](../artifacts/design-demos/list-layout-320.png)             |
| `masonry`                 | [Desktop](../artifacts/design-demos/masonry-1440.png)                 | [Mobile](../artifacts/design-demos/masonry-320.png)                 |
| `material-3-expressive`   | [Desktop](../artifacts/design-demos/material-3-expressive-1440.png)   | [Mobile](../artifacts/design-demos/material-3-expressive-320.png)   |
| `merchant-of-record`      | [Desktop](../artifacts/design-demos/merchant-of-record-1440.png)      | [Mobile](../artifacts/design-demos/merchant-of-record-320.png)      |
| `microservices`           | [Desktop](../artifacts/design-demos/microservices-1440.png)           | [Mobile](../artifacts/design-demos/microservices-320.png)           |
| `minimalism`              | [Desktop](../artifacts/design-demos/minimalism-1440.png)              | [Mobile](../artifacts/design-demos/minimalism-320.png)              |
| `modular-monolith`        | [Desktop](../artifacts/design-demos/modular-monolith-1440.png)        | [Mobile](../artifacts/design-demos/modular-monolith-320.png)        |
| `monolith`                | [Desktop](../artifacts/design-demos/monolith-1440.png)                | [Mobile](../artifacts/design-demos/monolith-320.png)                |
| `monospace`               | [Desktop](../artifacts/design-demos/monospace-1440.png)               | [Mobile](../artifacts/design-demos/monospace-320.png)               |
| `multiple-columns`        | [Desktop](../artifacts/design-demos/multiple-columns-1440.png)        | [Mobile](../artifacts/design-demos/multiple-columns-320.png)        |
| `neobrutalism`            | [Desktop](../artifacts/design-demos/neobrutalism-1440.png)            | [Mobile](../artifacts/design-demos/neobrutalism-320.png)            |
| `neumorphism`             | [Desktop](../artifacts/design-demos/neumorphism-1440.png)             | [Mobile](../artifacts/design-demos/neumorphism-320.png)             |
| `non-consumable-purchase` | [Desktop](../artifacts/design-demos/non-consumable-purchase-1440.png) | [Mobile](../artifacts/design-demos/non-consumable-purchase-320.png) |
| `one-time-payment`        | [Desktop](../artifacts/design-demos/one-time-payment-1440.png)        | [Mobile](../artifacts/design-demos/one-time-payment-320.png)        |
| `payments`                | [Desktop](../artifacts/design-demos/payments-1440.png)                | [Mobile](../artifacts/design-demos/payments-320.png)                |
| `per-seat-pricing`        | [Desktop](../artifacts/design-demos/per-seat-pricing-1440.png)        | [Mobile](../artifacts/design-demos/per-seat-pricing-320.png)        |
| `prepaid-credits`         | [Desktop](../artifacts/design-demos/prepaid-credits-1440.png)         | [Mobile](../artifacts/design-demos/prepaid-credits-320.png)         |
| `proportional`            | [Desktop](../artifacts/design-demos/proportional-1440.png)            | [Mobile](../artifacts/design-demos/proportional-320.png)            |
| `react`                   | [Desktop](../artifacts/design-demos/react-1440.png)                   | [Mobile](../artifacts/design-demos/react-320.png)                   |
| `retro-digital`           | [Desktop](../artifacts/design-demos/retro-digital-1440.png)           | [Mobile](../artifacts/design-demos/retro-digital-320.png)           |
| `revenue`                 | [Desktop](../artifacts/design-demos/revenue-1440.png)                 | [Mobile](../artifacts/design-demos/revenue-320.png)                 |
| `rewarded-ads`            | [Desktop](../artifacts/design-demos/rewarded-ads-1440.png)            | [Mobile](../artifacts/design-demos/rewarded-ads-320.png)            |
| `sans-serif`              | [Desktop](../artifacts/design-demos/sans-serif-1440.png)              | [Mobile](../artifacts/design-demos/sans-serif-320.png)              |
| `script`                  | [Desktop](../artifacts/design-demos/script-1440.png)                  | [Mobile](../artifacts/design-demos/script-320.png)                  |
| `serif`                   | [Desktop](../artifacts/design-demos/serif-1440.png)                   | [Mobile](../artifacts/design-demos/serif-320.png)                   |
| `serverless-functions`    | [Desktop](../artifacts/design-demos/serverless-functions-1440.png)    | [Mobile](../artifacts/design-demos/serverless-functions-320.png)    |
| `shipping`                | [Desktop](../artifacts/design-demos/shipping-1440.png)                | [Mobile](../artifacts/design-demos/shipping-320.png)                |
| `single-column`           | [Desktop](../artifacts/design-demos/single-column-1440.png)           | [Mobile](../artifacts/design-demos/single-column-320.png)           |
| `skeuomorphism`           | [Desktop](../artifacts/design-demos/skeuomorphism-1440.png)           | [Mobile](../artifacts/design-demos/skeuomorphism-320.png)           |
| `sponsorship`             | [Desktop](../artifacts/design-demos/sponsorship-1440.png)             | [Mobile](../artifacts/design-demos/sponsorship-320.png)             |
| `srs`                     | [Desktop](../artifacts/design-demos/srs-1440.png)                     | [Mobile](../artifacts/design-demos/srs-320.png)                     |
| `static-hosting`          | [Desktop](../artifacts/design-demos/static-hosting-1440.png)          | [Mobile](../artifacts/design-demos/static-hosting-320.png)          |
| `static-sites`            | [Desktop](../artifacts/design-demos/static-sites-1440.png)            | [Mobile](../artifacts/design-demos/static-sites-320.png)            |
| `subscription`            | [Desktop](../artifacts/design-demos/subscription-1440.png)            | [Mobile](../artifacts/design-demos/subscription-320.png)            |
| `svelte`                  | [Desktop](../artifacts/design-demos/svelte-1440.png)                  | [Mobile](../artifacts/design-demos/svelte-320.png)                  |
| `tactile-collage`         | [Desktop](../artifacts/design-demos/tactile-collage-1440.png)         | [Mobile](../artifacts/design-demos/tactile-collage-320.png)         |
| `theme`                   | [Desktop](../artifacts/design-demos/theme-1440.png)                   | [Mobile](../artifacts/design-demos/theme-320.png)                   |
| `tools`                   | [Desktop](../artifacts/design-demos/tools-1440.png)                   | [Mobile](../artifacts/design-demos/tools-320.png)                   |
| `transaction-fees`        | [Desktop](../artifacts/design-demos/transaction-fees-1440.png)        | [Mobile](../artifacts/design-demos/transaction-fees-320.png)        |
| `two-columns`             | [Desktop](../artifacts/design-demos/two-columns-1440.png)             | [Mobile](../artifacts/design-demos/two-columns-320.png)             |
| `uniform-grid`            | [Desktop](../artifacts/design-demos/uniform-grid-1440.png)            | [Mobile](../artifacts/design-demos/uniform-grid-320.png)            |
| `unity`                   | [Desktop](../artifacts/design-demos/unity-1440.png)                   | [Mobile](../artifacts/design-demos/unity-320.png)                   |
| `unreal-engine`           | [Desktop](../artifacts/design-demos/unreal-engine-1440.png)           | [Mobile](../artifacts/design-demos/unreal-engine-320.png)           |
| `usage-based`             | [Desktop](../artifacts/design-demos/usage-based-1440.png)             | [Mobile](../artifacts/design-demos/usage-based-320.png)             |
| `volume-pricing`          | [Desktop](../artifacts/design-demos/volume-pricing-1440.png)          | [Mobile](../artifacts/design-demos/volume-pricing-320.png)          |
| `vue`                     | [Desktop](../artifacts/design-demos/vue-1440.png)                     | [Mobile](../artifacts/design-demos/vue-320.png)                     |

## Scope and handoff

Stable article IDs, kinds, categories, example keys and reusable prompts were
compared against the checkout's tracked baseline for all 219 changed articles;
none changed. Startup and AI instruction sources remain unchanged. Existing
reference-only routes retain their compatibility and accessibility checks.
No server feature, real payment/ad request, input persistence, commit, push or
deployment is part of this work. The built site is available through the current
LAN preview at `http://192.168.1.111:4322/ko/`.

LAN verification used agent-browser on the actual LAN origin: home navigation to
prompt preparation, input-derived preview, keyboard reset, and the revenue guide
at 390px. Setting paying users to 50 gives gross 250, modeled costs 120 and
remainder 130. No page or console errors were reported; no horizontal overflow
or error overlay appeared. The comments iframe and shared no-AI-service notice
were present. [Home](../artifacts/quality-review/lan-home.png),
[prompt](../artifacts/quality-review/lan-prompt.png) and
[mobile revenue](../artifacts/quality-review/lan-revenue-mobile.png) captures remain
available with the rest of the review artifacts.
