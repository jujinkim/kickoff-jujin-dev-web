---
articleId: github
lang: en
sourceRevision: 1
sources:
  - title: "GitHub: What is GitHub?"
    url: "https://docs.github.com/en/get-started/start-your-journey/what-is-github"
    claim: Git hosting and collaboration around repositories.
    checked: "2026-09-27"
  - title: "GitHub: Pull requests"
    url: "https://docs.github.com/en/pull-requests/reference/pull-requests"
    claim: "Proposed branch changes can be discussed, reviewed and merged."
    checked: "2026-09-27"
---

## Selection & comparison

Compare the operator, review flow, integrations, costs and migration path. This example chooses GitHub because contributors already collaborate there, not because pull requests are unique to it. Codeberg emphasizes a nonprofit free-software community; Gitea supports operating your own service. GitLab, Bitbucket and Azure Repos may fit existing work systems.

## Applications

A fork lets a weather-widget volunteer publish a proposed branch without direct write permission to the upstream repository. A pull request collects discussion and revisions. Someone with suitable permission decides whether to merge. Review alone does not deploy the widget or prove the change is correct.

## Implementation & cautions

Set permissions and required checks deliberately. Treat outside contribution code as untrusted when configuring automation and secrets. Before adopting a plan, check repository visibility, storage and automation allowances in current terms. Git history can move to another Git host; issue discussions, permissions and automation need a separate migration rehearsal.
