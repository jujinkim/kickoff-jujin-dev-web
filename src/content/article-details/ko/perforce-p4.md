---
articleId: perforce-p4
lang: ko
sourceRevision: 1
sources:
  - title: "P4: Preventing multiple checkouts"
    url: >-
      https://help.perforce.com/helix-core/server-apps/cmdref/current/Content/P4Guide/resolve.lock.exclusive.html
    claim: +l 파일 형식은 동시 열기를 막고 p4 lock은 제출만 제한합니다.
    checked: "2026-09-27"
  - title: "P4: p4 submit"
    url: >-
      https://help.perforce.com/helix-core/server-apps/cmdref/current/Content/CmdRef/p4_submit.html
    claim: 변경 목록 제출과 실패 동작을 설명합니다.
    checked: "2026-09-27"
---

## 선택·비교

시스템 선택 전 자산 특성을 비교합니다. 예시는 경쟁하는 변경의 병합이 어려운 바이너리 모델이며 배타적 접근 설정으로 순서대로 작업합니다. Git·Mercurial은 분산 로컬 이력에, SVN도 잠금 사용에 맞을 수 있습니다. 잠금이 P4만의 기능은 아닙니다. 기존 자산 도구와 팀 작업 흐름이 판단 기준입니다.

## 응용 사례

차량 모델을 명시적으로 binary+l로 지정합니다. 제작자가 열어 편집하고 변경 목록을 depot에 제출하면 다음 제작자가 제출된 버전을 sync합니다. 중앙 P4 흐름의 예시이며 모든 구성을 나타내지는 않습니다. 제출 실패가 다음 제작자의 작업 가능 상태를 보장하지 않습니다.

## 구현 참고·주의점

선택한 자산 형식의 typemap을 검토합니다. 열기를 제한하는 +l과 제출을 제한하는 p4 lock을 구분합니다. 방치된 잠금 해제와 저장소 백업 담당자를 정합니다. 실제 작업량에 맞춰 현재 라이선스·사용자 제한·호스팅 조건을 재확인합니다. 무료 구간이나 가격을 보장하는 글이 아닙니다.
