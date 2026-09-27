---
articleId: mercurial
lang: ko
sourceRevision: 1
sources:
  - title: "Mercurial: Working with Phases"
    url: "https://www.mercurial-scm.org/help/topics/phases"
    claim: >-
      publishing 원격에 보내면 draft가 public이 되며 non-publishing 저장소는 draft를 교환할 수
      있습니다.
    checked: "2026-09-27"
  - title: Mercurial Guide
    url: "https://www.mercurial-scm.org/guide"
    claim: 로컬 커밋과 push·pull 교환을 설명합니다.
    checked: "2026-09-27"
---

## 선택·비교

Mercurial과 Git 모두 로컬 커밋과 분산 협업을 지원합니다. 기존 hg 자동화와 팀 경험의 가치가 크면 Mercurial 유지가 맞습니다. 필요한 검토 서비스가 Git만 받는다면 이전 비용을 명시적으로 비교합니다. SVN은 중앙에 커밋하고 P4는 기존 바이너리 자산 작업에 맞을 수 있습니다.

## 응용 사례

번역 도구의 문구 수정을 로컬 저장소에 기록합니다. 기본 draft 커밋과 publishing 원격 조합에서는 push 후 public이 됩니다. non-publishing 협업 저장소는 draft를 유지할 수 있습니다. public은 공유 상태이며 비공개 접근 제어는 별개입니다.

## 구현 참고·주의점

이력 수정 확장을 쓰기 전 원격 publishing 설정과 단계를 확인합니다. secret 변경은 보통 교환하지 않지만 단계는 권한 체계나 비밀 저장소가 아닙니다. 지원 확장과 호스팅 호환성을 확인합니다. 팀 도구를 바꾸기 전 사본으로 번역 충돌과 이력 이전을 시험합니다.
