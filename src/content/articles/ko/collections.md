---
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
revision: 1
sourceRevision: 1
updated: "2026-09-21"
aiPrompt: "상품 선택 기능의 순서, 중복 처리, 조회 키, 직렬화 요구를 확인해줘. 실제 예시 데이터와 연산으로 배열·맵·집합을 비교해줘. 미결정 요구는 질문하고 추천 구조와 결과를 보여줘. 인덱스를 여러 개 유지한다면 동기화 위험도 적어줘."
---

## 개념

배열은 인덱스로 접근하는 순서형 구조입니다. 리스트는 구현이 다양한 순서형 추상화입니다. 맵은 키와 값을 연결하고 집합은 고유한 원소의 포함 여부를 표현합니다. JavaScript에서는 Array를 일상적인 리스트로 씁니다. 모든 언어의 리스트가 같은 성능을 내지는 않습니다.

## 필요한 상황

대기열, 상품 조회, 선택한 태그, 내비게이션을 설계할 때 고릅니다. 순서가 중요한지, 중복이 의미 있는지, 찾고 지우는 방식이 무엇인지 물어보세요.

## 예시

편집 단계는 배열, 상품 ID별 가격은 맵, 선택한 ID는 집합으로 표현합니다. 예시의 book-1 중복은 하나가 됩니다. JavaScript Map의 객체 키와 Set의 객체 원소는 객체 정체성으로 비교하므로 필드가 같아도 별개 객체면 다른 항목입니다.

```text
const queue = ["draft", "review", "publish"];
const prices = new Map([["book-1", 12000]]);
const selected = new Set(["book-1", "book-1"]);
// queue[0] => draft; prices.get("book-1") => 12000
// selected.size => 1
```

## 선택지와 tradeoff

배열은 순서대로 표시하기 쉽지만 ID 검색에 전체 순회가 필요할 수 있습니다. 맵은 키 조회를 명확히 하지만 일반 JSON 직렬화에는 변환이 필요합니다. 집합은 중복을 제거하지만 반복 횟수를 잃습니다. 해시 구현은 보통 평균 조회가 빠르지만 보장은 언어·런타임에 따라 다릅니다.

## 추천 조건

정체성이 중요하면 ID를 키로 쓰세요. 표시 순서는 배열로 유지하고, 조회 비용이나 명확성이 필요할 때만 맵을 추가합니다. 둘을 함께 쓰면 동기화 책임이 생깁니다. 영리한 인덱스보다 실제 부하 측정이 먼저입니다.

## AI 지시 예시

상품 선택 기능의 순서, 중복 처리, 조회 키, 직렬화 요구를 확인해줘. 실제 예시 데이터와 연산으로 배열·맵·집합을 비교해줘. 미결정 요구는 질문하고 추천 구조와 결과를 보여줘. 인덱스를 여러 개 유지한다면 동기화 위험도 적어줘.

## 관련 글과 출처

- [OOAD와 책임 분리: 객체마다 할 일 하나](/ko/catalog/ooad/)
- [SRS와 완료 조건: ‘완성’의 뜻부터](/ko/catalog/srs/)

- [MDN — Keyed collections](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections)
- [MDN — Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
