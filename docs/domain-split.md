# Kickoff domain and repository

This repository owns **Kickoff by jujin** at `https://kickoff.jujin.dev`. Its GitHub repository is `jujinkim/kickoff-jujin-dev-web`. The personal development hub on `jujin.dev` is a separate project; do not add hub pages, builds, deployment jobs, or tests here.

## Release boundary

The owner explicitly excluded support for the old pre-release catalog on `jujin.dev`. Do not add Cloudflare redirect rules, HTML migration pages, Markdown/AI compatibility copies, or old-domain migration checks. Kickoff uses its own origin for canonical URLs, language alternates, sitemaps, AI documents, and copyable startup prompts. Existing paths and reference-only routes within Kickoff remain stable.

The repository rename preserves the Giscus repository ID `R_kgDOUitRaQ`, category ID `DIC_kwDOUitRac4DGCIb`, and article terms. Its configured repository name is `jujinkim/kickoff-jujin-dev-web`. Keep the previous GitHub repository name unclaimed so repository links can still follow GitHub's rename redirect.

## Build and publish

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
