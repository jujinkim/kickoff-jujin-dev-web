---
kind: guide
articleId: "srs"
lang: "ko"
title: "SRS와 완료 조건: ‘완성’의 뜻부터"
summary: "막연한 소원을 검증 가능한 요구사항으로 바꿉니다."
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
related: ["adr", "ooad"]
example: "spec"
status: "published"
revision: 2
sourceRevision: 2
updated: "2026-09-21"
aiPrompt: "서점 장바구니의 확정된 요구사항부터 읽어줘. 재고, 비회원 결제, 실패 동작의 미결정 사항을 나열하고 구현 전에 선택을 물어봐. 번호가 있는 요구사항, 제외 범위, 완료 조건 예시, 작은 작업 목록을 남겨줘. 명시적으로 위임하지 않은 제품 동작은 임의로 결정하지 마."
---

## 개념

소프트웨어 요구사항 명세(SRS)는 관찰 가능한 동작과 제약을 설명합니다. 인수 기준은 요구사항을 확인할 수 있게 만듭니다.

## 예시

빈 장바구니에 같은 책을 두 번 넣으면 한 행의 수량이 2가 됩니다. 재고가 없으면 장바구니를 바꾸지 않습니다.

## 추천 조건

체크리스트는 가볍고 사용자 이야기는 동기를 설명합니다. 상세 명세는 팀 간 조율을 돕지만 관리가 더 필요합니다. 성공·실패 사례를 갖춘 번호 요구사항을 쓰세요. 근거 있는 측정 방법이 있을 때만 수치 제한을 추가합니다. [NASA](https://swehb.nasa.gov/display/SWEHBVD/SWE-050+-+Software+Requirements)
