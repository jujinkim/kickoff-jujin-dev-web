# Deployment readiness

## Configuration completed

- Astro static origin: `https://jujin.dev`, base `/`, trailing slashes for HTML.
- `public/CNAME`: `jujin.dev`; `.nojekyll` included in the output.
- GitHub Pages switched from legacy branch publishing to **GitHub Actions** on 2026-09-21.
- Repository Discussions enabled. Shared giscus category: **Announcements** (`DIC_kwDOUitRac4DGCIb`); repository ID `R_kgDOUitRaQ`.
- Giscus app access works: public discussion lookup returned `Discussion not found` for the not-yet-created `srs` thread; the actual Korean widget rendered zero comments and GitHub sign-in. No comments were posted.
- Workflow checks content/types/format, builds and indexes, validates output, then runs browser tests before publishing. Actions are pinned to commit SHAs. Node and direct dependencies are pinned.

## Existing domain blocker

Live check on 2026-09-21:

```text
https://jujin.dev/en/
HTTP 301 Location: https://dev.jujin.kim/en/
Server: cloudflare
Destination: HTTP 404
```

The old Cloudflare redirect must be removed or disabled for `jujin.dev` and its deep paths. Keep the domain pointed at this repository’s GitHub Pages site, not the former blog. Inspect Redirect Rules, Bulk Redirects, Page Rules, or a Worker attached to this hostname to find the actual owner of this response; the response alone does not identify which mechanism is configured. Cloudflare administrative access is not available in this workspace session.

The Pages API reports the correct CNAME but no certificate. Enabling HTTPS returned **“The certificate does not exist yet”**. After DNS/proxy/redirect configuration is corrected, let GitHub provision the certificate, then enable **Enforce HTTPS**. Do not claim that HTTPS at the Cloudflare edge proves origin certificate readiness.

## Release procedure

1. Review and publish this change to `main` to trigger the workflow. This implementation session did not commit or push it.
2. Correct the existing domain redirect and verify the DNS target against GitHub Pages Settings. If proxying blocks certificate provisioning, follow GitHub and Cloudflare’s current official custom-domain instructions.
3. Wait for a successful Actions deployment and certificate provisioning; enable HTTPS enforcement.
4. Run `npm run verify:live` against `https://jujin.dev`. It rejects redirects away from the expected origin and checks deep links, AI resources, SEO, Markdown, sitemap and search assets.
5. Open the domain in a browser; search `requirements`, `요구사항`, and `要件` in their respective catalogs. Reload an article directly. Confirm giscus loads under the production origin with the same `srs` term in all three languages.
6. With the owner’s authenticated GitHub account, manually verify sign-in and one intended comment. Posting is deliberately not automated.

If the GitHub app is later disconnected, install [giscus](https://github.com/apps/giscus) for `jujinkim/jujin-dev-web`, preserve Discussions and the existing category, and regenerate configuration at [giscus.app](https://giscus.app/). Never replace stable article IDs merely to reconnect comments.

Official references: [GitHub Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages), [custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site), [giscus configuration](https://giscus.app/).
