---
articleId: material-3-expressive
lang: ja
sourceRevision: 8
sources:
  - title: "Google Design: Expressive Material research"
    url: "https://design.google/library/expressive-material-design-google-research"
    claim: 表情豊かな強調に関するGoogleの研究です。このピクニック例の操作性能向上を証明するものではありません。
    checked: "2026-09-27"
  - title: WCAG 2.2
    url: "https://www.w3.org/TR/WCAG22/"
    claim: キーボード・フォーカス・リフロー・コントラストの要件。見た目だけで適合を証明するものではありません。
    checked: "2026-09-27"
---

## 選択・比較

一つの操作を目立たせたいとき、製品の雰囲気に合えば選びます。フラットデザインと共存でき、控えめな画面なら形の変化や動きを減らせます。

## 応用例

ピクニック例は招待・人数・参加状態を分けます。参加後は曲線のボタンの意味が見た目でも変わります。花は装飾であり、唯一の確認手段にはしません。

## 実装の参考・注意点

状態の文字と押下状態をアニメーションから独立させます。動きの低減では反応をなくします。実際の催しにはサーバーでの空席確認が必要で、この例は1〜6人を表示するだけです。
