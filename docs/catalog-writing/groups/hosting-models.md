# Hosting execution models / 호스팅 실행 모델 / ホスティング実行モデル

Group ID: `hosting-models` · Checked: 2026-09-21 · Writing designs, not article bodies.

## Shared case and comparison contract

Serve a public article page and handle a Save request for A17. Distinguish public files, executable request handlers and durable saved-record storage.

**Comparison axes, fixed order:** request path; execution lifetime; persistent state location; scaling responsibility; failure handling; build/runtime split.

**Boundary:** Static frontend plus server/function API is valid. Always-on means an intended long-running process, not guaranteed availability. Serverless still uses servers and is broader than functions.

**Visual family:** Numbered request-path diagram with browser, host, handler and store; include a failed Save response.

**Core terms (EN / KO / JA):** Request / 요청 / リクエスト; Runtime / 실행 환경 / ランタイム; Durable state / 영속 상태 / 永続状態.

## Sibling review matrix

All rows use the same case. Features describe mechanisms; benefits and choice advice are conditional editorial judgments. Read each article's evidence map for source-backed boundaries.

| Concept                                                                                        | Distinguishing feature                                   | Conditional advantage                                                           | Limitation                                                                                                           | Suitable context                                                            | Combination                                                                         |
| ---------------------------------------------------------------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [Static hosting / 정적 호스팅 / 静的ホスティング](../articles/static-hosting.md)               | Prebuilt files are published for requests [static].      | Public reading does not need application rendering on each request.             | Personalized writes need another execution and storage path.                                                         | Public documentation and article pages.                                     | Use Astro, Hugo or Jekyll output with a server or function API for Save.            |
| [Always-on server / 상시 서버 / 常時稼働サーバー](../articles/always-on-server.md)             | A listening process handles incoming requests [server].  | The example can host custom long-lived application behavior under one runtime.  | The operator must choose supervision, capacity and restart recovery; the diagram alone proves none.                  | An application needing controlled runtime behavior and an operations owner. | Serve a static frontend separately; keep durable records outside process memory.    |
| [Serverless functions / 서버리스 함수 / サーバーレス関数](../articles/serverless-functions.md) | Events or API calls invoke managed handlers [functions]. | The example delegates server provisioning for the Save handler to the platform. | Execution lifecycle and retries need provider-specific design; durable data cannot rely on an assumed warm instance. | An event-oriented API with a clear external persistence contract.           | Pair with static hosting and a durable store; handle duplicate Save requests by ID. |

## Cross-review decisions

Keep the fixture, comparison-axis order and five frontmatter dimensions consistent across siblings. A benefit in one row must not imply an unqualified defect in all other rows. Do not confuse implementation, abstraction, presentation and commercial responsibility. The scope boundary above resolves overlapping choices; combinations are explicitly permitted in the last column.

Review every English draft in this group together before translation. Confirm the figures preserve identical inputs and label changed assumptions. Reject unsupported speed, revenue, accessibility or popularity rankings. Translate the approved argument with the group terms, not by substituting product marketing language.

[functions]: https://docs.aws.amazon.com/lambda/latest/dg/welcome.html
[server]: https://nodejs.org/en/learn/getting-started/introduction-to-nodejs
[static]: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
