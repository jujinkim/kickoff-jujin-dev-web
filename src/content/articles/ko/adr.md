---
articleId: "adr"
lang: "ko"
title: "Design Decision과 ADR: 결정의 흔적"
summary: "무엇을 골랐고 언제 다시 고를지 기록합니다."
category: "planning"
aliases:
  [
    "ADR",
    "Design Decision",
    "decision record",
    "설계 결정",
    "결정 기록",
    "設計判断",
    "決定記録",
  ]
related: ["srs", "static-sites"]
example: "decision"
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-09-21"
aiPrompt: "우리 렌더링 방식의 ADR을 제안 상태로 작성해줘. 기존 결정을 먼저 읽고 제약, 대안, 비용, 추천, 책임자, 재검토 조건을 적어줘. 채택·거절·다른 선택을 물어봐. 내가 결정하거나 해당 결정을 명시적으로 위임하기 전에는 채택으로 표시하지 마."
---

## 개념

설계 결정은 동작이나 구조를 선택하는 일입니다. ADR은 중요한 선택의 맥락, 대안, 결과를 남기는 기록입니다. 커밋은 무엇이 바뀌었는지 말하지만 탈락한 대안의 이유까지 알려주지는 않습니다.

## 필요한 상황

여러 컴포넌트에 영향을 주거나, 오래 쓸 의존성을 추가하거나, 되돌리기 비싼 선택에 씁니다. 버튼 색상 때문에 헌법 회의를 열 필요는 없습니다. 인증 전략이라면 이야기가 다릅니다.

## 예시

계정 없는 공개 카탈로그라면 미리 생성한 HTML이 후보입니다. 최신성 요구, 요청 시 렌더링 같은 대안, 재빌드 비용을 기록하세요. 아래 예시의 accepted는 책임자가 동의한 뒤에만 붙입니다. AI의 추천은 아직 proposed입니다.

```text
ADR-001: Static catalog
Status: accepted
Context: public articles; no per-user data
Decision: pre-render HTML
Cost: publish requires a build
Revisit: private personalized content becomes required
```

## 선택지와 tradeoff

메모는 빠르지만 잃어버리기 쉽습니다. ADR은 상태와 결과를 드러내지만 관리가 필요합니다. 기각된 대안도 남기면 같은 논쟁을 줄입니다. 사소한 선택까지 전부 기록하면 결정 기록이 쓰레기장이 됩니다.

## 추천 조건

제안, 채택, 기각, 대체 상태를 쓰세요. 고정 번호를 부여하고 후속 기록을 연결합니다. 처음부터 다 알았던 척 과거를 고치지 말고 당시 근거를 보존하세요. 제약 변화에 맞춰 재검토 조건을 둡니다.

## AI 지시 예시

우리 렌더링 방식의 ADR을 제안 상태로 작성해줘. 기존 결정을 먼저 읽고 제약, 대안, 비용, 추천, 책임자, 재검토 조건을 적어줘. 채택·거절·다른 선택을 물어봐. 내가 결정하거나 해당 결정을 명시적으로 위임하기 전에는 채택으로 표시하지 마.

## 관련 글과 출처

- [SRS와 완료 조건: ‘완성’의 뜻부터](/ko/catalog/srs/)
- [Astro·Hugo·Jekyll: HTML을 보내는 세 방법](/ko/catalog/static-sites/)

- [AWS — Architectural decision records](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/welcome.html)
