---
articleId: glassmorphism
lang: ko
sourceRevision: 13
sources:
  - title: Glassmorphism in user interfaces
    url: "https://hype4.academy/articles/design/glassmorphism-in-user-interfaces"
    claim: 명명자의 스타일 원자료입니다. 공개 미리보기만 확인했으며 기술·접근성 요건이 아닌 출처 이력을 뒷받침합니다.
    checked: "2026-09-27"
  - title: "Apple: Meet Liquid Glass"
    url: "https://developer.apple.com/videos/play/wwdc2025/219/"
    claim: Apple의 적응형 조작 재질과 굴절을 설명합니다. 별도 웹 예제는 이를 근사한 모형입니다.
    checked: "2026-09-27"
  - title: Filter Effects Level 2
    url: "https://drafts.csswg.org/filter-effects-2/#BackdropFilterProperty"
    claim: backdrop-filter의 렌더링을 정의하는 초안입니다. 시각 스타일의 정의는 아닙니다.
    checked: "2026-09-26"
  - title: "NN/g: Glassmorphism"
    url: "https://www.nngroup.com/articles/glassmorphism/"
    claim: 시각적 특징과 가독성 위험을 설명합니다. 산책 경로는 직접 만든 예제입니다.
    checked: "2026-09-26"
  - title: "MDN: backdrop-filter"
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter"
    claim: 브라우저 호환성 참고 자료입니다. 대상 브라우저를 확인하고 대체 표시를 유지합니다.
    checked: "2026-09-26"
  - title: "WCAG 2.2: Contrast (Minimum)"
    url: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html"
    claim: 최종 화면의 배경을 기준으로 글자 대비를 확인하는 기준입니다.
    checked: "2026-09-26"
---

## 선택·비교

장소·작품·사진처럼 배경이 유용한 맥락을 담을 때 반투명 패널이 어울립니다. 배경 맥락, 앞쪽 작업, 읽을 수 있는 조작부로 위계를 단순하게 유지합니다. 조밀한 입력 화면이나 배경을 예측하기 어려운 대시보드는 불투명 표면부터 검토하는 편이 좋습니다. Liquid Glass는 특정 플랫폼과 연결된 별도 재질 연구이며 같은 명세가 아닙니다.

## 응용 사례

경로를 고르면 호수 사진을 남긴 채 거리와 시간이 바뀝니다. 사진 뷰어의 짧은 설명에도 같은 관계를 적용할 수 있습니다. 핵심은 앞뒤 정보의 관계이며 카드 모서리, 광원 방향, 할 일 개수가 아닙니다. 반투명 층을 많이 쌓으면 무엇을 조작할 수 있는지 구분하기 어려워집니다.

## 구현 참고·주의점

반투명 배경과 `backdrop-filter: blur(10px) saturate(1.35)`를 함께 사용합니다. 뒤쪽 내용을 흐리는 속성이며 요소 자체를 흐리는 `filter: blur(...)`와 다릅니다. 읽기 쉬운 불투명 색을 기본으로 삼고 지원 환경에서 효과를 더합니다. 예제는 불투명 전환, 미지원 대체 표시, 투명도 감소 설정을 제공합니다. 합성된 결과의 대비·키보드 포커스·동작 감소를 확인하세요. 브라우저 지원만으로 접근성이 입증되지는 않습니다.

여기서는 넓은 서리 유리 정보 패널과 조작에 따라 펼쳐지는 작은 렌즈의 차이를 강하게 드러냅니다. 글래스모피즘은 일반적인 시각 양식이며 애니메이션도 가능합니다. 단순히 정지와 움직임의 차이가 아닙니다. 웹 렌즈는 선택한 이미지의 사본을 변위시키고 가장자리 반사광을 더합니다. Apple의 네이티브 재질·자동 색조 적응·물리 광학 시뮬레이션을 재현하지는 않습니다.
