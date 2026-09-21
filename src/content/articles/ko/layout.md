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
revision: 2
sourceRevision: 2
updated: "2026-09-21"
aiPrompt: "카탈로그를 이름 있는 영역과 컴포넌트로 설명해줘. 모바일·데스크톱 배치, 읽기 순서, 키보드 동작, 빈 상태·로딩·오류를 제안해줘. 정보 우선순위가 미정이면 배치 선택 전에 질문해줘. 텍스트 와이어프레임과 검증 가능한 완료 조건을 남겨줘."
---

## 개념

레이아웃은 영역을 배치합니다. 헤더는 정체성을, 내비게이션은 이동을, 카드는 내용 묶음을 제공하며 대화상자는 진행 중인 과업을 중단합니다.

## 예시

카탈로그: 헤더 → 필터 도구 모음 → 카드 그리드 → 푸터. 모바일에서는 읽기 순서대로 쌓습니다.

## 추천 조건

그리드는 훑어보기에, 목록은 긴 제목에 맞습니다. 사이드바는 너비를 차지합니다. 대화상자는 명확한 닫기와 포커스 관리가 필요합니다. 의미 있는 영역과 모바일 한 열부터 시작하세요. 빈 화면·로딩·오류·키보드 상태도 포함합니다. [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout) · [WAI](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
