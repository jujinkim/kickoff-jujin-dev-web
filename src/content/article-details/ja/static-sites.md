---
articleId: static-sites
lang: ja
sourceRevision: 7
sources:
  - title: "Astro: islands architecture"
    url: "https://docs.astro.build/en/concepts/islands/"
    claim: 事前生成した内容とブラウザー対話は併用でき、認証付きサーバーデータには別の設計が必要です。
    checked: "2026-09-27"
  - title: Hugo introduction
    url: "https://gohugo.io/about/introduction/"
    claim: Hugoは内容とテンプレートからサイトを生成し、配布方針は別です。
    checked: "2026-09-27"
  - title: Jekyll documentation
    url: "https://jekyllrb.com/docs/"
    claim: Jekyllは文章・レイアウトから静的出力を作り、配信先の対応は環境によります。
    checked: "2026-09-27"
---

## 選択・比較

静的生成は公開まで待てる記事に合います。要求時描画は要求時点で変わるデータに合い、併用できます。Astro・Hugo・Jekyllを同じ多言語公開作業、編集フロー、配信先のビルド対応で比べます。

## 応用例

編集者が原稿を変え、ビルドが候補を作り、配信先が承認済みファイルを提供します。この配布方針では失敗時に旧成果物を保ちます。ブラウザー絞り込みはファイルで動きますが、個人一覧には別の認証付き保存が必要です。

## 実装の参考・注意点

成果物・入れ子経路・素材経路・言語リンクを検証します。完全な成果物だけ公開し、復旧可能な版を保管します。生成器は原子的配布や最新性を自動保証しないため、実配信先のキャッシュ・再ビルドを記録します。
