# Kickoff domain and repository

This repository owns **Kickoff by jujin** at `https://kickoff.jujin.dev`. Its GitHub repository is `jujinkim/kickoff-jujin-dev-web`. The personal development hub on `jujin.dev` is a separate project; do not add hub pages, builds, deployment jobs, or tests here.

## Release boundary

The owner explicitly excluded support for the old pre-release catalog on `jujin.dev`. Do not add Cloudflare redirect rules, HTML migration pages, Markdown/AI compatibility copies, or old-domain migration checks. Kickoff uses its own origin for canonical URLs, language alternates, sitemaps, AI documents, and copyable startup prompts. Existing paths and reference-only routes within Kickoff remain stable.

The repository rename preserves the Giscus repository ID `R_kgDOUitRaQ`, category ID `DIC_kwDOUitRac4DGCIb`, and article terms. Its configured repository name is `jujinkim/kickoff-jujin-dev-web`. The independent hub now uses `jujinkim/jujin-dev-web`, so Kickoff links must use its current repository name directly.

## Build and publish

The root `/` uses [Country.is](https://country.is/) to select an initial language
from the visitor's IP country: `KR` opens `/ko/`, `JP` opens `/ja/`, and every other
country opens `/en/`. The browser calls `https://api.country.is/` without cookies
or a referrer; the provider receives the visitor's IP, but Kickoff does not store
the response. VPNs and proxies can affect the inferred country. Lookup errors or
a 1.5-second timeout fall back to English. No JavaScript also falls back to English.
The root offers language links while the lookup runs, and a manual choice wins.
Query strings and fragments survive the redirect. Explicit language URLs never
perform a lookup or change language automatically. Link generic entry buttons to
`https://kickoff.jujin.dev/`; retain explicit locale URLs for language choices.

Run sequentially:

```sh
npm run check
npm run build
npm test
npm run test:e2e
```

No article demo or thumbnail changed during this domain split, so thumbnail capture is unnecessary. Browser suites must also run sequentially because they share the Playwright output directory.

Push reviewed changes to `main`; the existing Actions workflow validates and publishes `dist`. GitHub Pages custom domain is `kickoff.jujin.dev`. Cloudflare DNS needs `CNAME kickoff -> jujinkim.github.io`, DNS only. Configure Pages separately: `CNAME` alone does not change the domain for Actions deployments. Confirm the certificate, enable HTTPS enforcement, then run `npm run verify:live` and check the public browser flow.

## References

- [GitHub Pages custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [GitHub repository renaming](https://docs.github.com/en/repositories/creating-and-managing-repositories/renaming-a-repository)
