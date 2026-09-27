---
articleId: liquid-glass
lang: ko
sourceRevision: 8
sources:
  - title: "Apple: Meet Liquid Glass"
    url: "https://developer.apple.com/videos/play/wwdc2025/219/"
    claim: 분리된 조작·탐색층의 동적인 재질을 설명합니다. CSS 블러는 네이티브 굴절을 재현하지 않습니다.
    checked: "2026-09-27"
  - title: WCAG 2.2
    url: "https://www.w3.org/TR/WCAG22/"
    claim: 키보드·포커스·리플로·대비 요구사항의 근거이며 시각 스타일만으로 준수를 입증하지는 않습니다.
    checked: "2026-09-27"
  - title: "CSSWG: Filter Effects Level 2"
    url: "https://drafts.csswg.org/filter-effects-2/#BackdropFilterProperty"
    claim: 배경 필터의 초안 명세이며 CSS 흐림은 Apple의 네이티브 광학 시스템이 아니고 대안 검증이 필요합니다.
    checked: "2026-09-27"
---

## 선택·비교

사진 같은 풍부한 콘텐츠 위의 작은 조작층에 적합합니다. 글래스모피즘은 고정된 반투명 패널까지 넓게 설명합니다. Apple 재질의 적응형 광학 동작은 이 웹 예제에서 구현하지 않습니다.

## 응용 사례

일기는 로컬 생성 사진 세 장을 순환합니다. 도구 캡슐은 일반 흐름 안에서 커져 아래 설명을 가리지 않습니다. 작은 갤러리나 지도 탐색에도 같은 관계를 적용할 수 있습니다.

## 구현 참고·주의점

읽기 쉬운 불투명 표면에서 시작해 배경 필터를 더하고 사진마다 검사합니다. 투명도 감소와 강제 색상을 지원합니다. 불투명 전환은 데모에만 적용됩니다. CSS만으로 Apple 동작이나 자동 대비 적응을 구현했다고 표현하지 않습니다.

여기서는 넓은 서리 유리 정보 패널과 조작에 따라 펼쳐지는 작은 렌즈의 차이를 강하게 드러냅니다. 글래스모피즘은 일반적인 시각 양식이며 애니메이션도 가능합니다. 단순히 정지와 움직임의 차이가 아닙니다. 웹 렌즈는 선택한 이미지의 사본을 변위시키고 가장자리 반사광을 더합니다. Apple의 네이티브 재질·자동 색조 적응·물리 광학 시뮬레이션을 재현하지는 않습니다.
