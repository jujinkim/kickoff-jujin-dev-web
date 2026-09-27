---
articleId: srs
lang: ko
sourceRevision: 8
sources:
  - title: "NASA: How to Write a Good Requirement"
    url: "https://www.nasa.gov/reference/appendix-c-how-to-write-a-good-requirement/"
    claim: 명확하고 검증 가능한 요구사항을 뒷받침합니다. 장바구니 결과는 직접 만든 예제이며 NASA 요구사항이 아닙니다.
    checked: "2026-09-26"
  - title: "AWS: Architectural decision record process"
    url: "https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html"
    claim: >-
      아키텍처 결정 기록의 결정·맥락·결과와 생명주기를 설명합니다. 예제 장바구니 정책을 정하거나 AI 산출물의 품질을 보장하지 않습니다.
    checked: "2026-09-26"
---

## 선택·비교

기능 이름에는 동의해도 예상 결과가 다르다면 동작을 따라가 봅니다. 사용자 스토리는 가치를, 유스 케이스는 성공·실패 경로를 정리할 수 있지만 관찰 가능한 결과의 합의를 대신하지는 못합니다. 가정과 확인 방법이 분명하면 짧은 요구사항으로 충분할 수 있습니다. 문서 길이는 준비 수준이 아닙니다.

## 응용 사례

책방 장바구니에 책 A 한 권이 있습니다. 의도한 새 추가는 수량 2, 이미 처리한 요청의 재전송은 수량 1을 유지합니다. 재고 부족 응답은 장바구니를 보존하고 문제를 알립니다. 같은 버튼도 요청 전달 상황이 다르므로 각각 검토하세요. 합의한 규칙에 고유 번호를 붙여 작업과 검증에서 참조합니다.

## 구현 참고·주의점

각 확인 조건을 초기 상태·행동·예상 결과로 적고 필요한 안내와 데이터 보존을 포함합니다. 미정 동작은 추측해 코딩하지 말고 질문으로 남깁니다. 성능이 프로젝트에 중요할 때만 측정 가능한 기준에 합의하세요. 범위가 바뀌면 요구사항·영향받는 작업·검증을 함께 갱신합니다. 배열·맵·문서 형식은 AI가 정할 수 있고 제품 동작은 사용자가 결정합니다.
