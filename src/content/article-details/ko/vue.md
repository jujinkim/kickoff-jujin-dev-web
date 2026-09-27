---
articleId: vue
lang: ko
sourceRevision: 7
sources:
  - title: "Vue: Introduction"
    url: "https://vuejs.org/guide/introduction.html"
    claim: 선언형 템플릿·반응성을 설명하며 브라우저 도표는 Vue 성능 측정이 아닌 자체 JavaScript입니다.
    checked: "2026-09-27"
---

## 선택·비교

HTML형 템플릿과 컴포넌트 내부 로직 배치가 맞을 때 선택합니다. React는 JavaScript 중심 구성, Svelte는 컴파일을 강조합니다. 모두 공유 상태를 다룰 수 있으므로 카운터 동기화만으로 차이를 설명하지 않습니다.

## 응용 사례

읽기 목록은 도서와 정원 글을 저장합니다. 카드마다 라벨을 표시하고 공통 기록 집합에서 합계를 구합니다. 예제의 식별 규칙에 따라 반복 저장은 개수를 늘리지 않습니다.

## 구현 참고·주의점

템플릿을 연결하기 전에 상태 소유자를 정합니다. 별도 숫자를 갱신하지 말고 기록에서 합계를 구합니다. 이 모형은 새로고침 시 초기화하며 기기 간 목록에는 컴포넌트 밖의 인증 저장·실패 처리가 필요합니다.
