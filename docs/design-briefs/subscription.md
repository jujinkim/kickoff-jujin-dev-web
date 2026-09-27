# Subscription — representative review

- Stable ID: `subscription`; leaf category: `billing`.
- Titles (EN / KO / JA): Subscription / 구독 / サブスクリプション.
- Definition and selection criterion: Charge over recurring periods for continuing value; define renewal, payment failure and access policies.
- Neighbor comparison: see the matching Selection & comparison supplement; choices may coexist.
- Why / situation: Fictional family-photo storage with recurring access and support.
- How / representative action: Advance billing period, turn renewal off, simulate payment failure and retry.
- Initial, changed, repeat, empty, reset and reload: Starts in paid period 1 at 12. Failure pauses access under this authored policy; retry once paid does not charge again. Renewal off expires at boundary. Reset/reload restore initial state.
- Visual structure, incidental choices and mobile order: Album preview provides product context, separate paid total and entitlement. Policies and prices are fictional; taxes, fees and refunds omitted.
- Keyboard: native controls in DOM order, visible focus, polite localized status where interactive; reset retains focus.
- No JavaScript: static explanation and initial screen remain; script-dependent controls stay disabled. Native disclosures work.
- Themes and motion: authored demo colors within neutral shell; no required animation. Check dark surrounding theme, forced colors, focus and 200% text.
- Assets and conditions: public/images/lake-walk.png; provenance in public/images/README.md or font manifest and bundled OFL files.
- Localized visible labels: authored in English, then Korean/Japanese with the same actions and outcomes.
- Revision: 5; each supplement sourceRevision matches.
- Capture: `[data-demo="subscription"]`; screenshots use initial state and loaded fonts/images.
- Evidence inspected 2026-09-26:
  - [Stripe: Subscriptions overview](https://docs.stripe.com/billing/subscriptions/overview): Documents recurring subscription lifecycles. Cancellation and immediate access suspension shown here are authored example policies.
- Verification: check → build → thumbnails → rebuild → unit/output → browser; actual results in [review record](../quality-review.md).

## Strong teaching case — 2026-09-27

Billing period and access entitlement occupy distinct regions; renewal can fail.

Amplification is illustrative, not a new definition or guarantee. Review desktop/mobile captures and preserve the existing failure/fallback contract.
