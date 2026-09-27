---
articleId: architecture
lang: ko
sourceRevision: 8
sources:
  - title: "Microsoft: architectural principles"
    url: "https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/architectural-principles"
    claim: 캡슐화와 명시적 의존성은 계약 뒤에서 책임을 바꾸게 하며 도표만으로 실행 장애 격리를 증명하지는 않습니다.
    checked: "2026-09-27"
---

## 선택·비교

규칙·데이터 소유·예상 변경에 맞춰 경계를 정합니다. 계층은 구조, 포트는 외부 계약, 서비스는 배포 경계를 설명하며 함께 적용할 수 있습니다. 독립 배포의 이점이 분산 조율 비용에 못 미치면 모듈러 모놀리스를 고려합니다.

## 응용 사례

상점의 조율자는 주문 확인·재고 예약·결제를 순서대로 묶습니다. 주문은 확정, 재고는 수량, 연동은 결제사 결과 변환을 맡습니다. 시간 초과는 재시도·해제를 뒷받침할 근거까지 미확정으로 둡니다. 화살표는 호출이며 반드시 소스 의존성을 뜻하지는 않습니다.

## 구현 참고·주의점

허용 소스 의존성을 실행 호출·배포 단위·장애 범위와 구분해 기록합니다. 중복 요청·결제 결과 미상·복구 담당을 시험합니다. 가짜 결제사는 계약을 시험하지만 실제 네트워크·결제사·DB의 원자적 복구를 보장하지 않습니다.
