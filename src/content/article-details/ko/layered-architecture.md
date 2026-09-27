---
articleId: layered-architecture
lang: ko
sourceRevision: 7
sources:
  - title: "Microsoft: N-tier architecture"
    url: "https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/n-tier"
    claim: 논리 계층·물리 티어와 개방형·폐쇄형 계층을 구분합니다. 도표는 단일 프로세스의 폐쇄형 예제입니다.
    checked: "2026-09-27"
---

## 선택·비교

표현·애플리케이션 조율·저장의 책임이 안정적일 때 계층을 씁니다. 외부 연결을 독립적으로 바꾸려면 헥사고날 포트, 안쪽 정책 의존성을 강조하려면 클린 아키텍처를 고려합니다. 계층과 함께 적용할 수 있습니다.

## 응용 사례

도서관 안내는 HTTP·CLI 저장 요청을 같은 애플리케이션 검증으로 보냅니다. 입력 경로를 바꿔도 저장 규칙을 복제하지 않습니다. 정적 화살표는 의존·호출·반환을 구분하며 요청을 실행하지 않습니다.

## 구현 참고·주의점

계층 건너뛰기 허용 여부를 정합니다. 여기서는 의존과 호출이 아래로, 결과가 위로 갑니다. 한 프로세스이므로 프로세스 장애를 공유하며 논리 분리가 배포 경계는 아닙니다. 빈 전달 계층보다 실제 변경을 보호하는 경계 검사를 둡니다.
