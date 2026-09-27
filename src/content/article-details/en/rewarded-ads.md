---
articleId: rewarded-ads
lang: en
sourceRevision: 6
sources:
  - title: "Google AdMob: rewarded ad policies"
    url: "https://support.google.com/admob/answer/7313578?hl=en"
    claim: Requires clear opt-in and reward terms; allowed rewards and implementation depend on current provider policy.
    checked: "2026-09-27"
---

## Selection & comparison

A language quiz fits a rewarded ad when the player can choose one extra hint and continue normally without it. Interstitial ads do not require this reward exchange. The choice must stay voluntary and the promised benefit understandable before viewing.

## Applications

The player opts in for one non-transferable hint. Completing the simulated viewing grants it once; interruption grants zero. Advertiser payment and platform settlement are separate, and no real ad or cash reward exists here.

## Implementation & cautions

Deduplicate reward events and validate completion with the supported provider mechanism. Handle no-fill, interruption and retries without blocking ordinary play. The local state machine cannot establish real ad completion or validate production policy compliance.
