---
kind: guide
articleId: "layout"
lang: "ko"
title: "레이아웃과 UI 요소: 가리키는 것에 이름 붙이기"
summary: "헤더·사이드바·그리드·모달. 피드백에도 좌표가 필요합니다."
category: "design"
aliases:
  [
    "layout",
    "sidebar",
    "breadcrumb",
    "modal",
    "레이아웃",
    "사이드바",
    "모달",
    "レイアウト",
    "サイドバー",
    "モーダル",
  ]
related: ["theme", "srs"]
example: "layout"
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-09-21"
aiPrompt: "카탈로그를 이름 있는 영역과 컴포넌트로 설명해줘. 모바일·데스크톱 배치, 읽기 순서, 키보드 동작, 빈 상태·로딩·오류를 제안해줘. 정보 우선순위가 미정이면 배치 선택 전에 질문해줘. 텍스트 와이어프레임과 검증 가능한 완료 조건을 남겨줘."
---

## 개념

레이아웃은 영역을 배치하고 컴포넌트는 작은 일을 합니다. 헤더는 사이트 정체성, 내비게이션은 이동, 브레드크럼은 계층, 카드는 관련 내용 묶음, 대화상자는 현재 작업의 중단을 다룹니다. 드로어는 패널 패턴이지 모든 사이드바의 별명은 아닙니다.

## 필요한 상황

말보다 스크린샷이 명확할 때 씁니다. 영역, 정렬, 간격, 상태, 반응형 동작을 설명하세요. ‘더 깔끔하게’는 AI에게 무급 추측 여행을 보내는 지시입니다.

## 예시

카탈로그는 헤더, 필터 도구 모음, 카드 그리드, 푸터로 구성할 수 있습니다. 글에는 본문 옆 목차를 더합니다. 좁은 화면에서는 보조 탐색을 위나 아래로 옮기되 읽기 순서를 지킵니다. 아래 도식은 이미지가 없어도 이해할 수 있습니다.

```text
[ Header: identity + navigation ]
[ Breadcrumb: Catalog > Design ]
[ Sidebar ] [ Main: article + examples ]
[ Footer: related links ]
Mobile: main content first; navigation collapses
```

## 선택지와 tradeoff

그리드는 여러 항목을 훑기 좋고 리스트는 긴 제목을 비교하기 좋습니다. 고정 사이드바는 이동이 빠르지만 폭을 먹습니다. 모달은 짧은 작업에 집중시키지만 포커스 관리, 닫기 동작, 호출 위치로 포커스 복귀가 필요합니다.

## 추천 조건

의미 있는 HTML 영역과 모바일 한 열부터 시작하세요. 공간이 충분할 때 그리드 열을 늘립니다. 작업 중단이 유익할 때만 대화상자를 씁니다. 예쁜 성공 화면과 함께 빈 상태·로딩·오류·키보드 상태도 정하세요.

## AI 지시 예시

카탈로그를 이름 있는 영역과 컴포넌트로 설명해줘. 모바일·데스크톱 배치, 읽기 순서, 키보드 동작, 빈 상태·로딩·오류를 제안해줘. 정보 우선순위가 미정이면 배치 선택 전에 질문해줘. 텍스트 와이어프레임과 검증 가능한 완료 조건을 남겨줘.

## 관련 글과 출처

- [테마·폰트·공통 스타일: 비슷한 색 50개 금지](/ko/guides/theme/)
- [SRS와 완료 조건: ‘완성’의 뜻부터](/ko/guides/srs/)

- [MDN — CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout)
- [WAI — Dialog pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
