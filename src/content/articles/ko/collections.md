---
kind: guide
articleId: "collections"
lang: "ko"
title: "배열·리스트·맵·집합: 연산으로 고르기"
summary: "순서, 조회, 중복 제거는 서로 다른 일입니다."
category: "data"
aliases:
  [
    "array",
    "list",
    "map",
    "set",
    "배열",
    "리스트",
    "맵",
    "집합",
    "配列",
    "リスト",
    "マップ",
    "集合",
  ]
related: ["ooad", "srs"]
example: "collections"
status: "published"
revision: 2
sourceRevision: 2
updated: "2026-09-21"
aiPrompt: "상품 선택 기능의 순서, 중복 처리, 조회 키, 직렬화 요구를 확인해줘. 실제 예시 데이터와 연산으로 배열·맵·집합을 비교해줘. 미결정 요구는 질문하고 추천 구조와 결과를 보여줘. 인덱스를 여러 개 유지한다면 동기화 위험도 적어줘."
---

## 개념

배열은 인덱스 순서, 맵은 키와 값의 연결, 집합은 중복 없는 항목을 담습니다. 리스트 구현은 언어마다 다릅니다.

## 예시

배열: 초안 → 검토 → 발행. 맵(Map): book-1 → 12000. 집합: book-1을 두 번 넣어도 항목은 하나입니다.

## 추천 조건

배열은 순서를 보존하고 맵은 키 조회를 드러냅니다. 집합은 중복 횟수를 잃습니다. JavaScript의 객체 키는 동일성으로 구분합니다. 동일성에는 안정적인 ID를 쓰세요. 이점이 동기화 비용보다 클 때만 여러 인덱스를 유지합니다. [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections) · [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
