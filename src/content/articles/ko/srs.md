---
kind: guide
articleId: "srs"
lang: "ko"
title: "요구사항·완료 조건: 원하는 동작 합의하기"
summary: "사용자는 동작을 설명하고, AI가 요구사항과 결정 기록을 작성합니다."
category: "planning"
aliases:
  [
    "SRS",
    "requirements",
    "acceptance criteria",
    "요구사항",
    "완료 조건",
    "要件",
    "受け入れ条件",
  ]
related: ["architecture", "shipping"]
example: "spec"
status: "published"
revision: 3
sourceRevision: 3
updated: "2026-09-23"
aiPrompt: "확정된 요구사항을 읽어줘. 중복 처리, 순서, 재고, 비회원 결제, 실패 복구 등 미결정 제품 동작과 제약만 질문해줘. 답을 번호 있는 요구사항·완료 조건·작업으로 정리해줘. 사용자 스토리·유스케이스·잡 스토리는 필요한 형식을 스스로 골라 작성하고, 나에게 문서 형식 선택을 요구하지 마. 주요 결정의 대안·상태·재검토 조건을 기록해줘. 내부 자료구조는 스스로 정하되 제품 규칙이 빠졌다면 추측하지 마."
---

## 개념

요구사항은 관찰 가능한 동작과 제약을 설명하고, 완료 조건은 이를 확인 가능하게 만듭니다. [NASA](https://swehb.nasa.gov/spaces/SWEHBVD/pages/102695421/SWE-050%2B-%2BSoftware%2BRequirements)

## 예시

빈 장바구니에 같은 책을 두 번 넣으면 한 행에 수량 2가 됩니다. 재고가 없으면 그대로 유지합니다. 사용자는 이 동작을 확인하고, AI가 저장 구조를 정합니다.

## 추천 조건

개발 전에 범위, 동기, 성공·실패 동작을 합의하세요. AI가 적절한 스토리나 시나리오로 작성하며 사용자는 문서 형식을 고를 필요가 없습니다. 중요한 선택은 배경·결과와 함께 기록하되 유지 부담을 고려합니다. AI가 결정 기록과 완료 조건을 함께 정리합니다. [AWS](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)
