---
articleId: gitlab
lang: en
sourceRevision: 1
sources:
  - title: "GitLab: Merge request pipelines"
    url: "https://docs.gitlab.com/ci/pipelines/merge_request_pipelines/"
    claim: MR pipelines require matching CI rules and test source-branch content.
    checked: "2026-09-27"
  - title: GitLab plans
    url: "https://docs.gitlab.com/subscriptions/choosing_subscription/"
    claim: >-
      GitLab.com and Self-Managed have different hosting responsibilities and
      plan choices.
    checked: "2026-09-27"
---

## Selection & comparison

Choose this workflow when the team values keeping repository review and configured CI together. GitHub and other hosts also connect checks to reviews. GitLab.com is operated by GitLab; with Self-Managed, your team takes responsibility for the instance. Gitea may fit a smaller self-operated service when its features meet requirements.

## Applications

The leave app’s example test rejects a request exceeding the employee’s balance. The MR shows the failed run and a later passing run after a fix. Passing that test supplies evidence for review, not proof of every leave rule or automatic approval to deploy.

## Implementation & cautions

Define MR event rules in .gitlab-ci.yml and provide an eligible runner. Normal MR pipelines test source-branch content; verify merged-result behavior separately when needed. Compare hosted plan allowances with the cost of operating, upgrading and restoring your own instance. Rehearse migration of issues, CI configuration and access settings as well as Git history.
