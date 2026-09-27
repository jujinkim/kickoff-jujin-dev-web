---
articleId: gitlab
lang: ko
sourceRevision: 1
sources:
  - title: "GitLab: Merge request pipelines"
    url: "https://docs.gitlab.com/ci/pipelines/merge_request_pipelines/"
    claim: MR 파이프라인에는 일치하는 CI 규칙이 필요하며 소스 브랜치를 검사합니다.
    checked: "2026-09-27"
  - title: GitLab plans
    url: "https://docs.gitlab.com/subscriptions/choosing_subscription/"
    claim: GitLab.com과 Self-Managed의 운영 책임과 요금제 선택이 다릅니다.
    checked: "2026-09-27"
---

## 선택·비교

저장소 검토와 설정된 CI를 함께 다루는 가치가 클 때 고릅니다. GitHub 등 다른 호스팅도 검사를 검토에 연결합니다. GitLab.com은 GitLab이 운영하며 Self-Managed는 팀이 인스턴스 책임을 집니다. 기능이 요구사항에 맞는다면 Gitea로 더 작은 직접 운영 서비스를 구성할 수도 있습니다.

## 응용 사례

휴가 앱의 예시 검사는 잔여 일수를 넘는 신청을 거부하는지 확인합니다. MR에는 실패한 실행과 수정 후 통과한 실행이 나타납니다. 그 통과는 검토 근거이며 모든 휴가 규칙의 증명이나 자동 배포 승인이 아닙니다.

## 구현 참고·주의점

.gitlab-ci.yml에 MR 이벤트 규칙을 정의하고 적합한 runner를 마련합니다. 일반 MR 파이프라인은 소스 브랜치를 검사하므로 필요하면 병합 결과 검사도 따로 확인합니다. 호스팅 요금제 허용량과 직접 운영·업데이트·복구 비용을 비교합니다. Git 이력뿐 아니라 이슈·CI 설정·접근 설정도 이전을 연습합니다.
