# Evaluation evidence for prompt promotion

Status: proposed protocol, 2026-10-01. No external-model comparison or user study
has been run. The homepage displays actual prompt composition, not measured AI
outcomes. This document is a repository evaluation plan, not a new required AI
document or a guideline revision.

## Questions and comparison conditions

Primary question: with the same service facts and available user answers, does a
kickoff prompt reach a usable project plan more reliably within a fixed budget?
The companion user study asks whether it reduces the person's total effort from
preparing the request through approving the plan.

Use three conditions for each scenario:

- A: a realistic long free-form request containing all supplied service facts.
- B: the same facts organized into a competent generic prompt. Add no new
  service facts or kickoff documents. Record its exact text.
- C: the same facts entered into kickoff, with its generated prompt and the two
  referenced documents frozen at the evaluated revision.

A versus B measures the effect of organization; B versus C measures the
additional kickoff instruction package. Do not intentionally weaken A or B.
All conditions have access to the same factual answers and project artifacts.
Exclude kickoff-specific defaults from the shared agent instructions so the
comparison conditions do not inherit the treatment.

## Predefined outcome rubric

Fix the rubric and execution limits before running trials. Judge actual content
against service requirements rather than the presence of preferred headings,
documents, classes, technologies, or a specific tool-call sequence.

| Criterion          | Pass condition                                                                                                                                                                                         |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Requirements       | Every must-have behavior and explicit constraint is reflected accurately, without a contradictory choice.                                                                                              |
| Unknowns           | Every consequential unknown is resolved through available answers or explicitly deferred with the affected decision and revisit condition. No unsupported assumption is presented as an accepted fact. |
| Decision ownership | Existing choices and authorization are preserved. Material user-owned choices are accepted or explicitly delegated before being treated as settled. Internal decisions proceed within approved scope.  |
| Usable next steps  | MVP, exclusions, dependency-ordered next work, and measurable completion checks are concrete enough for an independent reviewer to identify the next action. Detail stays proportional to the task.    |

The primary metric is **usable-plan success rate**: trials passing all applicable
criteria within the fixed budget divided by all trials. A trial that times out
or never reaches a plan remains in the denominator. Report per-criterion rates
alongside this metric to locate failures. Track unsupported consequential
decisions separately; strong presentation cannot cancel them out.

Companion metrics:

- Requirement/constraint coverage: correctly reflected applicable items divided
  by all applicable items in the scenario rubric.
- Critical unknown handling: consequential unknowns correctly resolved or
  explicitly deferred before the affected choice, divided by all applicable
  critical unknowns. Include fully specified cases where no question is needed.
- Human effort: active minutes preparing or entering the request, answering
  follow-ups, reviewing the plan, and correcting errors. Track elapsed time
  separately, including model waits and guideline retrieval.
- Resource cost: all input/output tokens, tool use, document retrieval, latency,
  and attributable API cost. Report tool limits or inaccessible documents.

Question count, document count, and checklist compliance are diagnostic measures,
not proof of user benefit. Subsequent development needs a separate evaluation of
implemented behavior and actual verification; planning results alone support no
claim about code quality.

## Initial scenarios

Prepare exact input requests, a private user-answer sheet, applicable acceptance
criteria, and at least one known acceptable plan for each case. Hidden answers
must be obtainable through relevant questions; an explicit justified deferral
may be acceptable. New product preferences must not be invented by a simulator.

| Case | Supplied situation                                                                | Key evaluation focus                                                        |
| ---- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| 1    | A fully specified personal reading list, one device, local storage already chosen | Preserve choices; avoid unnecessary questions and infrastructure.           |
| 2    | A sparse neighborhood book-lending idea                                           | Clarify loan rules and shared availability before consequential choices.    |
| 3    | A small volunteer event page with a fixed launch date and no recurring budget     | Fit scope and operations to constraints.                                    |
| 4    | An existing Astro site needing a plan for one new page                            | Preserve the stack, existing decisions, and stable identities.              |
| 5    | A long request mixing urgent and later features for a club directory              | Recover priorities and distinguish MVP from later work.                     |
| 6    | A request for both offline operation and immediate cross-device updates           | Expose the conflict and ask about the required behavior.                    |
| 7    | A small scheduling service with undecided public participant visibility           | Keep data-exposure decisions with the user.                                 |
| 8    | A free community guide with no monetization goal                                  | Plan proportionate sustainability without imposing subscriptions.           |
| 9    | A project with one scoped delegated architecture choice and a fixed design        | Decide within delegation and preserve unrelated choices.                    |
| 10   | A fully specified plan request for a small static page                            | Check whether extra ceremony increases effort without improving the result. |

Use these as an exploratory pilot: 10 cases × 3 conditions × 3 fresh trials =
90 trials per model/tool configuration. Repetitions measure variability; they do
not turn ten scenarios into ninety independent use cases. Expand the case set
before making broad claims. Keep separate, unseen cases for final confirmation
after changing prompts based on pilot results.

## Trial and user-study controls

Freeze model version, agent/tool version, system instructions, repository state,
available tools, documents, answer policy, and execution limits. Use clean
sessions and isolated working directories. Randomize run order. In C, retrieve
the frozen documents as the real workflow would; count retrieval work and
access failures rather than silently treating instructions as read.

Answer equivalent questions with the same facts. Record the full conversation,
tool calls, resulting plan, failures, and grader reasons. Use a fixed answer
policy for automated trials; calibrate simulated users against human review.

Hide the condition and branding from independent reviewers. Use at least two
reviewers on the pilot and resolve rubric disagreements before relying on an
automated judge. If using AI judges, swap comparison order, require evidence
for each criterion, allow “unknown”, and check agreement with human grading.

Measure real human effort in a separate study with representative novices and
experienced users. Assign comparable tasks and randomize/counterbalance
conditions to control learning effects. Include preparation time in all
conditions and obtain consent before collecting or publishing user data and
testimonials. Agent transcript length cannot substitute for this study.

## Publication and reproducible records

For each trial, save: scenario ID, condition and exact prompt, guideline revision
and document hashes, model/tool versions, environment and limits, answer policy,
transcript/artifact locations, criterion outcomes and reasons, tokens/cost/time,
and failure classification. Record human-study timings separately.

Publish all evaluated cases, wins, ties, failures, sample sizes, and uncertainty.
Aggregate paired comparisons by scenario and report variation across scenarios;
do not treat repeated trials or multiple rubric items as independent users.
Choose material success and effort thresholds before inspecting results.

Allowed now: factual composition claims, such as “Your service description is
combined with requests to clarify requirements, explain choices, plan, and
verify work.”

Allowed after matching evidence: “In [model/tool, revision, sample and task
conditions], [observed success-rate or user-effort difference].” Distinguish
percentage points from relative percentages. Limit each claim to the tested
population and task; do not convert a small pilot into an all-model guarantee.
If results tie, report the tie. If overhead increases on simple tasks, show it
and use it to improve the prompt.

Method references: [Anthropic's agent evaluation guide](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents)
for outcome grading, isolated trials, and human calibration;
[MT-Bench and Chatbot Arena research](https://arxiv.org/abs/2306.05685) for
limitations and biases of AI judges. The kickoff-specific rubric and study
design above are proposals, not measured findings from these sources.
