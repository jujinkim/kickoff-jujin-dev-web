---
articleId: list-layout
lang: ko
sourceRevision: 7
sources:
  - title: "W3C: CSS Grid Level 1"
    url: "https://www.w3.org/TR/css-grid-1/"
    claim: 그리드 트랙은 항목 정렬의 근거이며 리스트 패턴과 가상 대출 상태는 예제의 설계 선택입니다.
    checked: "2026-09-27"
  - title: "WCAG 2.2: Reflow"
    url: "https://www.w3.org/WAI/WCAG22/Understanding/reflow.html"
    claim: 좁은 화면과 확대 검사의 근거이며 레이아웃·서체의 정의는 아닙니다.
    checked: "2026-09-27"
  - title: "Project Gutenberg: Pride and Prejudice"
    url: "https://www.gutenberg.org/ebooks/1342"
    claim: 제목과 저자 Jane Austen을 확인하며 데모 대출 상태는 가상입니다.
    checked: "2026-09-27"
  - title: "Project Gutenberg: Frankenstein"
    url: "https://www.gutenberg.org/ebooks/84"
    claim: 제목과 저자 Mary Shelley를 확인하며 대출 데이터를 가져오지 않습니다.
    checked: "2026-09-27"
  - title: "Project Gutenberg: Alice’s Adventures in Wonderland"
    url: "https://www.gutenberg.org/ebooks/11"
    claim: 제목과 저자 Lewis Carroll을 확인하며 서지 레이블만 사용합니다.
    checked: "2026-09-27"
  - title: "Project Gutenberg Canada: A Room of One’s Own"
    url: "https://www.gutenberg.ca/ebooks/woolfv-aroomofonesown/woolfv-aroomofonesown-00-h.html"
    claim: 제목과 저자 Virginia Woolf를 확인하며 책 본문을 복제하지 않습니다.
    checked: "2026-09-27"
---

## 선택·비교

같은 글자 항목을 반복해서 훑을 때 행을 선택합니다. 그리드는 이미지의 동등한 강조, 메이슨리는 다양한 이미지 비율 보존에 적합합니다. 리스트를 주요 영역에 두고 필터를 옆에 놓을 수도 있습니다.

## 응용 사례

도서 결과는 제목·저자·대출 상태를 함께 보여줍니다. 주소록이나 메시지 목록에도 같은 반복을 쓸 수 있습니다. 실제 서지 정보와 예제의 가상 재고 상태는 구분합니다.

## 구현 참고·주의점

검색어를 정규화해 필터링하고 저장하지 않습니다. 라벨 있는 입력과 빈 결과를 유지합니다. 좁은 화면에서는 상태를 숨기지 말고 같은 행의 제목 아래로 옮깁니다. 실제 대출 정보에는 최신성·충돌 정책이 필요합니다.
