---
articleId: azure-repos
lang: ko
sourceRevision: 1
sources:
  - title: "Microsoft: What is Azure Repos?"
    url: >-
      https://learn.microsoft.com/en-us/azure/devops/repos/get-started/what-is-repos?view=azure-devops
    claim: Azure Repos는 Git과 TFVC를 지원하며 Git 저장소에서 PR을 사용합니다.
    checked: "2026-09-27"
  - title: "Microsoft: Branch policies"
    url: >-
      https://learn.microsoft.com/en-us/azure/devops/repos/git/branch-policies?view=azure-devops
    claim: 설정한 정책으로 검토자와 빌드 검증을 요구할 수 있으며 우회 권한을 살펴야 합니다.
    checked: "2026-09-27"
---

## 선택·비교

기존 Azure DevOps 프로젝트·권한·검토 관행이 조율 부담을 줄이면 Azure Repos를 고릅니다. 기존 Jira 흐름에는 Bitbucket이 맞을 수 있고 다른 호스팅도 브랜치 보호 검사를 제공합니다. 코드 저장 위치가 실행 호스팅을 결정한다고 가정하지 말고 운영 주체·연동·요금제 제약·이전 필요를 비교합니다.

## 응용 사례

시설 팀은 main에 최소 검토자 수와 필수 빌드 검증을 설정합니다. 예시 PR은 예약 충돌 검사가 실패한 동안 기다립니다. 수정 후 검토자가 새 결과를 확인하고 PR을 완료합니다. 별도 TFVC 모델이 아닌 Git 예시입니다.

## 구현 참고·주의점

필수 정책, 변경 후 승인 초기화 방식, 검사 우회 권한자를 확인합니다. 빌드 통과가 모든 예약 규칙을 증명하지는 않습니다. 기존 흐름을 위한 중앙 집중형 TFVC도 지원하지만 Git 도식을 그대로 적용하면 안 됩니다. 현재 접근·서비스 제한을 재확인하고 Git 이력과 별도로 검토·정책 이전을 연습합니다.
