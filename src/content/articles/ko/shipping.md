---
articleId: "shipping"
lang: "ko"
title: "웹·앱·PC·콘솔: 실행·유통·호스팅 구분"
summary: "‘배포해줘’는 완성된 주소가 아닙니다."
category: "deployment"
aliases:
  [
    "runtime",
    "hosting",
    "distribution",
    "web",
    "console",
    "호스팅",
    "배포",
    "콘솔",
    "ホスティング",
    "配布",
    "コンソール",
  ]
related: ["static-sites", "payments"]
example: "shipping"
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-09-21"
aiPrompt: "확정된 대상 기기에 대해 실행 환경, 배포 채널, 호스팅을 분리해줘. 빌드 산출물, 서명, 심사, 업데이트, 백엔드 필요성을 적어줘. 미결정 플랫폼은 질문하고 최신 공식 규칙을 연결해줘. 승인을 가정하지 말고 필요한 접근 권한을 표시해줘."
checked: "2026-09-21"
---

## 개념

실행 환경은 소프트웨어가 도는 곳, 배포 채널은 사용자가 얻는 경로, 호스팅은 네트워크 서비스나 파일이 놓이는 곳입니다. 스토어가 자동으로 백엔드가 되지는 않습니다. 웹 호스트에 실행 파일을 올려도 브라우저 앱은 아닙니다.

## 필요한 상황

웹·모바일·PC·콘솔 출시 비용을 계산하기 전에 나눠봅니다. 가입, 서명, 심사, 업데이트, 운영 비용이 다릅니다. 플랫폼 규칙은 바뀌므로 출시일을 약속하기 전에 확인하세요.

## 예시

브라우저 카탈로그는 GitHub Pages에 HTML을 올리고 앱 서버 없이 운영할 수 있습니다. PC 게임은 스토어로 배포하면서 멀티플레이 서버는 따로 둘 수 있습니다. 모바일 보조 앱이 같은 API를 쓸 수도 있습니다. 콘솔은 임의 파일 업로드가 아니라 플랫폼 접근과 승인이 필요합니다.

```text
Web: browser | URL | static host + optional API
Mobile: iOS / Android | store or allowed channel | optional backend
PC: OS binary | download / store | optional backend
Console: platform runtime | approved channel | optional backend
```

## 선택지와 tradeoff

웹은 링크 공유가 쉽지만 브라우저 기능에 제약받습니다. 네이티브는 플랫폼 API를 주지만 서명·출시 작업이 늘어납니다. 스토어는 발견과 갱신을 돕는 대신 정책을 적용합니다. 직접 배포는 자유롭지만 전달과 업데이트 신뢰를 직접 책임져야 합니다.

## 추천 조건

대상마다 실행 환경, 채널, 산출물, 백엔드, 서명, 심사, 갱신 경로, 담당자를 표로 적으세요. 독자가 실제 쓰는 기기부터 시작합니다. 내보내기 메뉴가 있다고 콘솔 출시를 약속하지 마세요.

## AI 지시 예시

확정된 대상 기기에 대해 실행 환경, 배포 채널, 호스팅을 분리해줘. 빌드 산출물, 서명, 심사, 업데이트, 백엔드 필요성을 적어줘. 미결정 플랫폼은 질문하고 최신 공식 규칙을 연결해줘. 승인을 가정하지 말고 필요한 접근 권한을 표시해줘.

## 관련 글과 출처

- [Astro·Hugo·Jekyll: HTML을 보내는 세 방법](/ko/catalog/static-sites/)
- [결제 채널과 PG·MoR: 토스·Lemon Squeezy](/ko/catalog/payments/)

- [GitHub — Pages overview](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [Apple — Distributing your app](https://developer.apple.com/documentation/xcode/distributing-your-app-for-beta-testing-and-releases)
- [Steamworks — Getting started](https://partner.steamgames.com/doc/gettingstarted)
- [Nintendo — Developer portal](https://developer.nintendo.com/)

서비스 문서 확인: 2026-09-21. 제공 범위·정책·계약은 바뀔 수 있으므로 출시 전에 다시 확인하세요.
