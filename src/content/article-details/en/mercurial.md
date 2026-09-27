---
articleId: mercurial
lang: en
sourceRevision: 1
sources:
  - title: "Mercurial: Working with Phases"
    url: "https://www.mercurial-scm.org/help/topics/phases"
    claim: >-
      Draft changes become public on a publishing remote; non-publishing
      repositories can exchange drafts.
    checked: "2026-09-27"
  - title: Mercurial Guide
    url: "https://www.mercurial-scm.org/guide"
    claim: Local commits and exchange through push and pull.
    checked: "2026-09-27"
---

## Selection & comparison

Both Mercurial and Git support local commits and distributed collaboration. Prefer retaining Mercurial when existing hg automation and team knowledge have value. If required review services accept only Git, compare migration effort explicitly. SVN instead records commits centrally; P4 may fit established binary-asset workflows.

## Applications

The translation tool records a wording fix in a local repository. With default draft commits and a publishing remote, pushing advances its phase to public. A non-publishing collaboration repository can retain draft changes. Public records sharing status; private access controls remain a separate concern.

## Implementation & cautions

Check remote publishing configuration and the phase before using history-editing extensions. Secret changes are not normally exchanged, but phases are not an authorization system or secret store. Verify supported extensions and host compatibility. Test translated text conflicts and history migration with a copy before changing the team’s tools.
