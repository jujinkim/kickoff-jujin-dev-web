---
kind: guide
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
revision: 2
sourceRevision: 2
updated: "2026-09-21"
aiPrompt: "우리 렌더링 방식의 ADR을 제안 상태로 작성해줘. 기존 결정을 먼저 읽고 제약, 대안, 비용, 추천, 책임자, 재검토 조건을 적어줘. 채택·거절·다른 선택을 물어봐. 내가 결정하거나 해당 결정을 명시적으로 위임하기 전에는 채택으로 표시하지 마."
---

## 개념

아키텍처 결정 기록(ADR)은 중요한 선택과 그 배경, 대안, 결과를 남깁니다.

## 예시

공개 카탈로그가 미리 만든 HTML을 선택합니다. 발행에는 재빌드가 필요하며, 비공개 개인화 콘텐츠가 필요해지면 재검토합니다.

## 추천 조건

간단한 메모는 빠르지만 잃기 쉽습니다. ADR은 판단 근거를 보존하지만 관리가 필요합니다. 담당자와 제안·채택·거절·대체 상태를 기록하세요. 추천은 승인이 아닙니다. [AWS](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/welcome.html)
