# Kickoff deployment

## Domain split — 2026-09-23

The catalog now targets `https://kickoff.jujin.dev`. The repository is `jujinkim/kickoff-jujin-dev-web`; its existing Discussions repository ID and category ID are unchanged. The personal development hub on `https://jujin.dev` is an independent project, maintained outside this repository. See [domain split and publishing](domain-split.md). The historical results below describe the pre-migration deployment and are not proof of the new domains being live.

## Configuration completed

- Astro static origin: `https://kickoff.jujin.dev`, base `/`, trailing slashes for HTML.
- `public/CNAME`: `kickoff.jujin.dev`; `.nojekyll` included in the output. The Pages custom domain is configured separately through the API/settings for Actions deployments.
- GitHub Pages switched from legacy branch publishing to **GitHub Actions** on 2026-09-21.
- Repository Discussions enabled. Shared giscus category: **Announcements** (`DIC_kwDOUitRac4DGCIb`); repository ID `R_kgDOUitRaQ`.
- Giscus app access works: public discussion lookup returned `Discussion not found` for the not-yet-created `srs` thread; the actual Korean widget rendered zero comments and GitHub sign-in. No comments were posted.
- Workflow checks content/types/format, builds and indexes, validates output, then runs browser tests before publishing. Actions are pinned to commit SHAs. Node and direct dependencies are pinned.

## Current public origin — 2026-09-21

The earlier Cloudflare redirect and missing-certificate findings are resolved. Before the styles release, `npm run verify:live` passed all 18 baseline checks on `https://jujin.dev` without redirects. The latest preceding Pages run, [35578936070](https://github.com/jujinkim/kickoff-jujin-dev-web/actions/runs/35578936070), succeeded.

The Pages API reports `status: built`, `build_type: workflow`, CNAME `jujin.dev`, and an approved certificate for `jujin.dev` and `www.jujin.dev` expiring 2026-12-20. `https_enforced` remains false; successful HTTPS requests and certificate approval do not imply that setting is enabled. No DNS or Pages settings were changed during this release.

## Release procedure

1. Run content/type/format checks, build, artifact tests and browser tests against `dist`.
2. Commit and push reviewed content to `main`; inspect the matching Actions run through successful deployment.
3. Run `npm run verify:live` against `https://kickoff.jujin.dev`. It rejects redirects and checks the current design HTML and Markdown paths, category comparison tables, existing guides, AI resources, sitemaps and search assets. The pre-release URLs on `jujin.dev` do not need compatibility redirects.
4. Verify actual Pagefind queries and article interactions on the public origin. Keep comment IDs consistent across translations.
5. Authenticated GitHub sign-in/comment posting remains an owner-driven manual check; this release does not post comments.

The seven-style release was deployed from `82c8247` in [run 35587516744](https://github.com/jujinkim/kickoff-jujin-dev-web/actions/runs/35587516744). Post-deployment checks passed: 63 HTTP checks and five production browser tests covering all 21 localized style articles and search. See [verification](verification.md) for results, commands and remaining limits.

If the GitHub app is later disconnected, install [giscus](https://github.com/apps/giscus) for `jujinkim/kickoff-jujin-dev-web`, preserve Discussions and the existing category, and regenerate configuration at [giscus.app](https://giscus.app/). Never replace stable article IDs merely to reconnect comments.

Official references: [GitHub Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages), [custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site), [giscus configuration](https://giscus.app/).
