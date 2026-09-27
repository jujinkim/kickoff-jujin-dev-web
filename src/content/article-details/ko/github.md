---
articleId: github
lang: ko
sourceRevision: 1
sources:
  - title: "GitHub: What is GitHub?"
    url: "https://docs.github.com/en/get-started/start-your-journey/what-is-github"
    claim: 저장소 중심 Git 호스팅과 협업을 설명합니다.
    checked: "2026-09-27"
  - title: "GitHub: Pull requests"
    url: "https://docs.github.com/en/pull-requests/reference/pull-requests"
    claim: 브랜치 변경을 제안하고 논의·검토·병합할 수 있습니다.
    checked: "2026-09-27"
---

## 선택·비교

운영 주체, 검토 흐름, 연동, 비용과 이전 경로를 비교합니다. PR이 독점 기능이라서가 아니라 기여자가 이미 모여 있어 GitHub를 고른 예시입니다. Codeberg는 비영리 자유 소프트웨어 공동체, Gitea는 직접 운영에 초점을 맞춥니다. 기존 업무 체계에는 GitLab·Bitbucket·Azure Repos가 맞을 수도 있습니다.

## 응용 사례

fork를 쓰면 날씨 위젯 기여자가 원본 저장소의 쓰기 권한 없이 제안 브랜치를 올립니다. PR에서 논의하고 수정하며 적절한 권한을 가진 사람이 병합 여부를 결정합니다. 검토만으로 위젯이 배포되거나 변경의 정확성이 증명되지는 않습니다.

## 구현 참고·주의점

권한과 필수 검사를 의도적으로 설정합니다. 자동화와 비밀값을 구성할 때 외부 기여 코드를 신뢰하지 않습니다. 요금제를 고르기 전 현재 조건에서 저장소 공개 범위·저장 공간·자동화 허용량을 확인합니다. Git 이력은 다른 Git 호스팅으로 옮길 수 있지만 이슈 논의·권한·자동화는 별도 이전 연습이 필요합니다.
