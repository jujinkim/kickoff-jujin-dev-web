---
kind: guide
articleId: "theme"
lang: "ko"
title: "테마·폰트·공통 스타일: 비슷한 색 50개 금지"
summary: "한 번 정한 스타일이 한 번의 결정으로 남게 합니다."
category: "design"
aliases:
  [
    "theme",
    "font",
    "design tokens",
    "테마",
    "폰트",
    "공통 스타일",
    "テーマ",
    "フォント",
    "デザイントークン",
  ]
related: ["layout", "architecture"]
example: "theme"
status: "published"
revision: 1
sourceRevision: 1
updated: "2026-09-21"
aiPrompt: "우리 색·글자·간격을 점검해줘. 한·영·일 대체 폰트와 의미 기반 토큰을 제안해줘. 밝은·어두운 예시와 대비 측정값을 보여줘. 미결정 시각 방향은 적용 전에 물어봐. 키보드 포커스와 저장된 테마 선택을 보존해줘."
---

## 개념

테마는 시각적 결정의 묶음입니다. 디자인 토큰은 색, 간격, 글자 등 공통 값에 이름을 붙입니다. green-7보다 surface와 text가 목적을 잘 설명합니다. 타이포그래피는 폰트뿐 아니라 크기, 줄 높이, 굵기, 줄 길이로 독서 경험을 만듭니다.

## 필요한 상황

여러 컴포넌트를 함께 바꾸거나 밝은·어두운 테마를 제공할 때 씁니다. 다국어 페이지에는 한글·일본어 대체 폰트가 필요합니다. 고급 라틴 폰트를 입은 빈 사각형은 번역이 아닙니다.

## 예시

예시 CSS는 다크 모드에서 표면과 글자 토큰만 바꾸고 카드 규칙은 유지합니다. 포커스 테두리와 상태 색을 구별하세요. 폰트가 로딩되는 동안에도 글은 읽혀야 합니다. 실제 다국어 문단으로 시스템 폰트와 사용권을 확보한 자체 호스팅 폰트를 비교합니다.

```text
:root { --surface: #fffdf7; --ink: #243e35; }
[data-theme=dark] { --surface: #182922; --ink: #f5f2e7; }
.card { background: var(--surface); color: var(--ink); }
```

## 선택지와 tradeoff

시스템 폰트는 추가 요청이 없지만 기기마다 다릅니다. 자체 호스팅은 일관성을 주지만 용량·라이선스·서브셋 관리가 필요합니다. 의미 기반 토큰은 전체 변경을 돕지만 목적을 문서화해야 합니다. 색 반전만으로 다크 모드의 대비 검사가 끝나지는 않습니다.

## 추천 조건

작은 글자 크기 체계와 역할별 색부터 시작하세요. 실제 배경과 대비를 검사합니다. WCAG AA의 일반 텍스트 기준은 4.5:1, 조건에 맞는 큰 텍스트는 3:1입니다. 컨트롤과 포커스도 확인하세요. 명시적 테마 선택을 저장하고 선택이 없을 때 기기 설정을 따릅니다.

## AI 지시 예시

우리 색·글자·간격을 점검해줘. 한·영·일 대체 폰트와 의미 기반 토큰을 제안해줘. 밝은·어두운 예시와 대비 측정값을 보여줘. 미결정 시각 방향은 적용 전에 물어봐. 키보드 포커스와 저장된 테마 선택을 보존해줘.

## 관련 글과 출처

- [레이아웃과 UI 요소: 가리키는 것에 이름 붙이기](/ko/guides/layout/)
- [아키텍처와 SOLID·GRASP: 약어 숭배 금지](/ko/guides/architecture/)

- [MDN — Custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [W3C — Contrast minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
