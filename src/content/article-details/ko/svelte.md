---
articleId: svelte
lang: ko
sourceRevision: 7
sources:
  - title: "Svelte: Overview"
    url: "https://svelte.dev/docs/svelte/overview"
    claim: 선언형 컴포넌트의 컴파일을 설명하며 컴파일 후에도 실행 중 상호작용은 필요합니다.
    checked: "2026-09-27"
---

## 선택·비교

컴파일러를 활용한 컴포넌트 작성이 빌드·관리 흐름에 맞을 때 선택합니다. Vue는 반응형 템플릿, React는 JavaScript 구성을 강조합니다. 컴파일이 실행 작업을 모두 없애거나 모든 앱을 빠르게 만든다고 주장하지 않습니다.

## 응용 사례

여행 계획은 버스 시간표와 등산 경로를 저장합니다. 컴파일은 갱신 코드를 준비하고 이후 클릭이 실행 중 기록·라벨을 바꿉니다. 도표는 Svelte를 로드하지 않고 그 단계를 설명합니다.

## 구현 참고·주의점

컴파일 단계와 실행 중 상태 소유를 구분합니다. 안정된 키로 중복을 막고 합계를 구합니다. 라우팅·서버 렌더링·영속 저장은 프로젝트에서 정하며 SvelteKit의 앱 범위는 Svelte보다 넓습니다.
