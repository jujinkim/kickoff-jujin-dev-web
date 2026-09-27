---
articleId: static-sites
lang: ko
sourceRevision: 7
sources:
  - title: "Astro: islands architecture"
    url: "https://docs.astro.build/en/concepts/islands/"
    claim: 미리 만든 콘텐츠와 브라우저 상호작용은 함께 쓸 수 있으며 인증된 서버 데이터는 별도 설계가 필요합니다.
    checked: "2026-09-27"
  - title: Hugo introduction
    url: "https://gohugo.io/about/introduction/"
    claim: Hugo는 콘텐츠·템플릿으로 사이트를 생성하며 배포 정책은 별도입니다.
    checked: "2026-09-27"
  - title: Jekyll documentation
    url: "https://jekyllrb.com/docs/"
    claim: Jekyll은 텍스트·레이아웃으로 정적 출력을 만들며 호스트 지원은 환경에 따릅니다.
    checked: "2026-09-27"
---

## 선택·비교

정적 생성은 게시를 기다릴 수 있는 공개 글에 맞습니다. 요청 렌더링은 요청 시 달라져야 할 데이터에 맞으며 함께 쓸 수 있습니다. Astro·Hugo·Jekyll을 같은 다국어 게시 작업과 편집 흐름·호스트 빌드 지원으로 비교합니다.

## 응용 사례

편집자가 원문을 바꾸고 빌드가 후보를 만들며 호스트는 승인한 파일을 제공합니다. 이 배포 정책은 빌드 실패 시 이전 산출물을 유지합니다. 브라우저 필터는 파일로 동작하지만 개인 저장 목록은 별도 인증 저장이 필요합니다.

## 구현 참고·주의점

빌드 결과·중첩 경로·자산 경로·언어 링크를 검증합니다. 완전한 산출물만 게시하고 복구할 버전을 보관합니다. 생성기가 원자적 배포나 최신성을 자동 보장하지는 않으므로 실제 호스트의 캐시·재빌드를 기록합니다.
