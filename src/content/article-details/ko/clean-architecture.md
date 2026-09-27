---
articleId: clean-architecture
lang: ko
sourceRevision: 7
sources:
  - title: "Robert C. Martin: The Clean Architecture"
    url: "https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html"
    claim: 안쪽 소스 의존성과 경계 데이터의 원 설명이며 네 개 폴더를 요구하지 않습니다.
    checked: "2026-09-27"
---

## 선택·비교

업무 규칙이 UI·DB 변경을 견뎌야 할 때 선택합니다. 역할이 안정적이면 단순 계층으로 충분할 수 있고 헥사고날은 안팎의 상호작용 경계를 강조합니다. 같은 시스템을 다른 관점으로 설명할 수 있습니다.

## 응용 사례

가계부 안내는 HTTP·CLI 입력을 SaveArticle로 변환하고 DB 행을 정책 밖에 둡니다. 실행 중 호출 경로와 소스 모듈의 import를 나눕니다. 반복 저장이 한 건인 이유는 앱이 그 식별 규칙을 정했기 때문입니다.

## 구현 참고·주의점

저장 인터페이스는 안쪽이 소유하고 바깥에서 구현하며 조립 시 어댑터를 연결합니다. 실행 호출은 바깥으로 가도 소스 의존성은 안쪽일 수 있습니다. 변환·검사에는 유지 비용이 들며 원형 그림이나 폴더명만으로 규칙을 강제하지 못합니다.
