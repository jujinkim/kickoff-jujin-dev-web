# kickoff.md product alignment review

Reviewed scope: 2026-09-26. This document owns the approved purpose, screen roles,
editorial scope, and evidence for this local revision.

## Purpose and audience

kickoff.md helps non-specialists and developers turn a project description into a
custom prompt, learn relevant planning, design, and technology choices, and take
that context to an external AI tool for discussion and work. Prompt preparation
is the primary action. kickoff.md does not provide an AI service.

Core flow: describe a service → review and copy a browser-prepared prompt → paste
into an external AI tool → resolve requirements and choices → agree on a plan →
request work. Learning can happen before or during the external conversation.

## Screen roles and decisions

| Surface           | Keep                                                                           | Reduce or improve                                                                                                                                              |
| ----------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Shared navigation | Prompt creation, catalog, project planning, help                               | Highlight prompt creation; put AI instructions, about, and personal links in the footer                                                                        |
| Home              | Introduction, main action, external-AI handoff, categories, recommended guides | Remove repeated help cards, AI banner, recent list; keep contextual links                                                                                      |
| Prompt builder    | Browser-only composition, preview, copy/fallback/reset, no-script base prompt  | Put required description first, show an unfilled book-lending example, disclose optional inputs and reference/version links, place copy beside preview heading |
| Help              | Existing explanation and anchors                                               | Disclose category descriptions in five native root groups                                                                                                      |
| AI instructions   | Existing two-document request and compatibility routes                         | Explain the secondary path for an existing external AI project; link new users to the builder                                                                  |
| About             | Audience, value, usage flow                                                    | Move production/contribution rules behind contributor links                                                                                                    |
| Articles          | Why → How → What and independent body demos                                    | Add an application step: builder for a new project, article link and selection reason for an existing conversation                                             |
| Search            | Language, article-kind, category isolation                                     | Show current scope; provide reset, parent category, and other resource type when empty                                                                         |

Implementation evidence lives in `Base.astro`, localized pages, `PromptBuilder.astro`,
`Article.astro`, `ArticleListing.astro`, `CategoryTree.astro`, and `public/catalog.js`.
The active inventory remains 64 concepts and 9 guides in EN/KO/JA (219 documents).
Six concepts and three guides remain reference-only (27 documents); total source
inventory is 246 published documents. Demos and taxonomy remain intact.

## Editorial scope

English first; then equivalent Korean/Japanese edits. Only needed fields and
paragraphs change across 27 article IDs (81 localized documents):

- Follow-up requests: `layout`, `srs`, `theme`, `payments`, `static-sites`.
  Use the agreed project context; do not import a sample shop, languages, dark
  mode, provider, or paid model as a requirement.
- Distinct summaries: eleven styles and five typography concepts. State each
  option's priority and fitting use, consistent with the body and comparison.
- Scenario continuity: `hugo`, `monolith`, `modular-monolith`, `microservices`,
  `always-on-server`, `godot`. Establish users and actions before the problem;
  keep the current worked example and demo.

Update article revisions, reviewed source revisions, and dates together. These
article revisions do not change startup guidance obligations or its revision.

## Change criteria and boundaries

Add a feature only when it gives a concrete benefit to prompt preparation,
understanding a choice, or handing context to external AI. Avoid duplicate
instructions and exposing contributor mechanics in ordinary reader flows.

Preserve origin, repository, routes, IDs, comment keys, input types, API schema v1,
the approved Korean slogan, country-based first-language selection, all learning
material and independent demos. Do not auto-fill the example or transfer article
choices through URLs, storage, or a new API. Required AI reading stays at two
English documents with a combined 3,000 o200k_base token limit.

## Completion checks

- All three languages: description alone produces a reviewable, copyable prompt;
  blank name means undecided and blank notes mean clarification needed.
- At 390 × 844, the first required input starts in the initial viewport. Copy is
  reachable without passing long reference material. Mobile controls have room
  for touch and keyboard focus.
- Clipboard denial, editing and copying again, late clipboard completion, reset,
  no JavaScript, keyboard use, and narrow screens remain covered.
- Follow-up requests work for a free, single-language project without prescribing
  payments, multiple languages, or dark mode.
- Search scope and empty-result recovery work with and without a category filter.
- Sequential gates: check → build → thumbnails → rebuild → unit/output → browser.

## Local and production evidence

Baseline supplied by the approved plan: `npm run check` passed and EN/KO/JA
prompt generation and real clipboard copy were checked. At 390px width, the
required input started around 837px and copy around 2,087px. Help was around
6,865px tall, with about 3,161px of category descriptions. These are earlier
observations, not measurements of the changed implementation.

The workspace already contained uncommitted v1 revision 4 guidance work. Preserve
that work. The prior review observed production at revision 3 and local output at
revision 4 (2,366 tokens); production is not reverified by this local task. See
[guidance review](ai-guidance-review.md) for the separate history and earlier
sandbox-blocked checks. No commit, push, or deployment is included here.

### Final implementation review

All planned screen and editorial changes are implemented locally. The 81 changed
article documents preserve IDs, categories, related links, aliases, examples,
publication state, and original source-check dates. Each article revision advanced
once; translations point to the reviewed English revision. All 246 sources remain
published, with 219 in active discovery. Independent demo components and their
registry are unchanged.

Reviewed the five follow-up requests against a free, single-language book club:
layout preserves the agreed screen/language scope; requirements does not assume
checkout; theme uses only selected languages/themes; payments stays out of scope
when absent from the agreed business model; static-site comparison assesses
languages, search, and interactions only when required. Reviewed the existing
worked scenarios as well. This is a wording and translation review, not a claim
that an external AI executed or obeyed the requests.

### Mobile measurements

Measured the built output in Chromium at **390 × 844 CSS px**, light theme, empty
builder, optional fields and reference panels closed. Positions are from the top
of the document, rounded to the nearest pixel. All three languages have no
horizontal overflow; the first required input begins inside the initial viewport.
Copy precedes the preview text and the guideline/version reference panel.

| Language | Required input starts | Copy starts | Help document height | Collapsed taxonomy height |
| -------- | --------------------: | ----------: | -------------------: | ------------------------: |
| EN       |                 731px |     1,135px |              4,817px |                     471px |
| KO       |                 711px |     1,097px |              4,245px |                     448px |
| JA       |                 734px |     1,190px |              4,547px |                     486px |

Korean before/after comparison uses the supplied earlier observation, not a new
baseline run: input ~837 → 711px, copy ~2,087 → 1,097px, help ~6,865 → 4,245px.
The five native category groups start closed and retain all category descriptions
and links when opened, including without JavaScript.

Visual evidence: [Korean mobile builder](screenshots/product-alignment-start-ko-mobile.png)
and [Korean desktop home](screenshots/product-alignment-home-ko.png).
Agent-browser inspected these pages and found no page errors or console errors.
The existing preview process on port 4322 was traced to this repository and used
to serve its freshly built `dist`; no unrelated server was stopped.

### Verification gates

- `npm run check`: passed; 184 checked files, zero errors/warnings/hints,
  246 published articles validated, formatting passed.
- `npm run build`: passed; 401 static pages and 219 indexed articles in three
  languages.
- `npm run thumbnails`: captured 225 localized demos. Restored 163 generated PNG
  differences because unchanged demos produced raster/rounding drift; retained
  the existing approved thumbnails. Rebuilt successfully afterward.
- Rechecked after final copy shortening. `npm test`: **45/45 passed**, including
  isolated publication builds and stable URL/API/translation compatibility.
- Final built required AI documents: startup **1,390**, assistant rules **976**,
  total **2,366 / 3,000 o200k_base tokens**. Measured with
  `scripts/measure-ai-input.py` using tiktoken 0.12.0.
- Full `npm run test:e2e`: **134 cases exercised; 127 passed, 7 initially failed**.
  Fixed English version-history text overflowing by 12px at 320px, replaced the
  outdated fixed guideline heading count with the plan/development heading check,
  and corrected the new search test to navigate through a category rather than
  expecting search on the catalog landing page. Also removed duplicated category
  names from the selected search scope label.
- After those narrow fixes: check → build → unit/output **45/45** → the four
  affected browser files (`startup`, `product-alignment`, `catalog`,
  `catalog-scope`). **46/49 passed**; the remaining three exposed test-fixture
  assumptions about a decorative heading period and a hyphenated “no-match”
  query that Pagefind could match as separate words. The test now compares the
  navigation label and uses a single absent token. The final
  `tests/browser/product-alignment.spec.ts` rerun passed **9/9**.
  All initially failing cases have passing follow-up evidence. The full 134-case
  suite was not rerun as a single command after these narrow fixes; unrelated
  demo cases retain their successful full-run results.
- Final browser coverage includes real clipboard writes, denied-copy selection,
  edit/copy/reset, late completion, input privacy, keyboard interaction,
  JavaScript-disabled reading/disclosures, scoped search/reset/parent/type links,
  compatible versioned routes, and 320/768/1440 light/dark layouts. Mobile entry
  checks additionally cover 390 × 844 in all three languages.

The pre-existing uncommitted guidance source, contributor rules, guidance review,
and modified unit tests (`tests/startup.test.mjs` and
`tests/catalog-scope.test.mjs`) match the initial workspace bytes. README retains the
existing revision 4 explanation alongside this review. No guideline obligation,
revision, prompt composition input type, or public API was changed by this task.

No commit, push, deployment, new live-origin check, external-model behavior study,
native-speaker review, screen-reader listening, or non-Chromium testing is claimed.
