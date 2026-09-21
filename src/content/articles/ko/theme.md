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
revision: 2
sourceRevision: 2
updated: "2026-09-21"
aiPrompt: "우리 색·글자·간격을 점검해줘. 한·영·일 대체 폰트와 의미 기반 토큰을 제안해줘. 밝은·어두운 예시와 대비 측정값을 보여줘. 미결정 시각 방향은 적용 전에 물어봐. 키보드 포커스와 저장된 테마 선택을 보존해줘."
---

## 개념

테마는 시각적 결정의 묶음입니다. 디자인 토큰은 공통 색·간격·글자에 이름을 붙이며, 폰트 선택은 그 일부입니다.

## 예시

카드가 표면과 글자 토큰을 씁니다. 공통 값을 바꾸면 카드 코드를 다시 쓰지 않고 테마를 바꿉니다.

## 추천 조건

시스템 폰트는 기기마다 다릅니다. 자체 호스팅 폰트는 일관성과 다운로드·사용권 작업을 더합니다. 다크 모드는 별도 대비 검사가 필요합니다. 역할별 색, 읽히는 글자, 보이는 포커스, 저장된 테마 선택을 유지하세요. 색 이름이 아닌 실제 배경에서 확인합니다. [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) · [W3C](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
