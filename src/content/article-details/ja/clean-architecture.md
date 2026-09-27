---
articleId: clean-architecture
lang: ja
sourceRevision: 7
sources:
  - title: "Robert C. Martin: The Clean Architecture"
    url: "https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html"
    claim: 内向きの依存と境界データの原説明であり、4つのフォルダーを必須にするものではありません。
    checked: "2026-09-27"
---

## 選択・比較

業務規則をUIやDBの変更から守りたいときに選びます。安定した責務なら単純な層で足りる場合があり、ヘキサゴナルは内外の相互作用を重視します。同じシステムを別の視点で説明できます。

## 応用例

家計簿ガイドはHTTPやCLIの入力をSaveArticleへ変換し、DB行を方針の外に保ちます。実行時の経路とソースのimportを分けます。繰り返しても1件なのはアプリが識別規則を定めるためです。

## 実装の参考・注意点

保存インターフェースを内側が所有し、外側で実装して構成時に接続します。実行時の呼び出しは外へ進んでもソースの依存は内側へ向けられます。変換と検査には維持費があり、円の図やフォルダー名だけでは規則を守れません。
