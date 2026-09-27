---
articleId: bitbucket
lang: ko
sourceRevision: 1
sources:
  - title: "Atlassian: Integrate Bitbucket and Jira"
    url: >-
      https://support.atlassian.com/bitbucket-cloud/docs/use-bitbucket-cloud-and-jira-together/
    claim: Jira 연동은 작업 항목과 Bitbucket Cloud의 개발 작업을 연결합니다.
    checked: "2026-09-27"
---

## 선택·비교

이 글의 범위는 Bitbucket Cloud입니다. 서비스 운영, PR 흐름, Jira 연동, 요금제 제약과 내보내기를 비교합니다. Jira 연동이 독점 기능은 아니므로 실제 팀 업무에 필요한 연결 수준을 비교합니다. 기존 기여자에는 GitHub, 기존 Azure DevOps 프로젝트에는 Azure Repos가 맞을 수 있습니다.

## 응용 사례

주문 앱의 Jira 작업은 주소 수정을 설명합니다. 브랜치와 PR이 그 키를 참조해 검토자가 채팅을 검색하지 않고 요구사항을 찾습니다. ORDER-12는 예시 연결 식별자이며 실제 작업이 아닙니다. 연결만으로 구현이 요구사항을 만족한다고 증명되지는 않습니다.

## 구현 참고·주의점

올바른 workspace와 Jira 사이트를 연결하고 권한을 확인합니다. 대상 독자에게 브랜치·PR 링크가 보이는지 시험합니다. 브랜치·커밋·PR 제목의 키 사용 규칙을 맞춥니다. 선택 전 현재 요금제·저장 공간·파이프라인 제한을 재확인합니다. Git 이력 이전만으로 Jira 링크·검토 논의·자동화가 옮겨지지는 않습니다.
