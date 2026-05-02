











https://github.com/ashcolor/ashcolor-blog

https://blog.ashcolor.jp/
https://content.nuxt.com/docs/advanced/hooks

https://www.google.com/search?q=git++Nuxt+content+md%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%80%80%E5%8F%8D%E6%98%A0%E4%BB%95%E7%B5%84%E3%81%BF&sourceid=chrome&ie=UTF-8&aep=48&cud=0&qsubts=1777427182934&source=chrome.crn.obic&mstk=AUtExfDB-s8cLCVxotJcs65h1UDk5xWxHjwUpLO7ju-A6PYFiWokkd02HpbWCkCNhwMJlFrfIFrA8HMfHnBvgwq_olIrKYqVkxTv6zEYcnLAfLbpqEOJjj98V2f7FbUS8sZj3K_DbQhHyasyGLRbE-Kr-iIzKSGaiEbLCKE_0_-Lzl4e_FMDw7IRl8DQ3KSoP5rWypWOA9J896nWycWyFmbS32mnEhMMoVPD9kN_8Esn8qlVwZrCZtLrL_tvKw&csuir=1&udm=50


この人のブログ好き

https://tsukiyama.blog/tech/nuxt-content-v3-blog



https://qiita.com/eita_kobayashi/items/85d3b8af99b67c5b0711





# Nuxt3公式ブログ楽しめるぞ
https://ics.media/entry/241108/


viteでNuxt プロジェクトを作ります
プロジェクト名は、 ai-swift-official-blog
Nuxtをイニシャライズしましょう
assets/1_nuxt_init.png



次にNuxt Content v3 を作成します
npm install @nuxt/content　で インストール


nuxt.config.tsにモジュールを登録します
export default defineNuxtConfig({
  modules: ['@nuxt/content']
});


コレクション＝コンテンツの場所
content.config.tsファイルに記述して、Nuxt contentに認識させます

content.config.tsに`content`というコレクションが定義され、Vueファイルから参照できる
import { defineContentConfig, defineCollection } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    contents: defineCollection({
      type: 'page',
      source: '**/*.md'
    })
  }
});


こうして、 root直下の `/contents` 配下のマークダウンファイルを管理します。

次にmdファイルのメタデータとなるフロントマターを書きます。
その前にフロントマターに独自の設定を書きます。
ちなみにこれはzodで定義しています。
https://ics.media/entry/240611/

content.config.ts
```ts

// ⭐️ "z"を追加でimportする
import { defineContentConfig, defineCollection, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
      // ⭐️メタデータの追加
      schema: z.object({
        draft: z.boolean(),
        date: z.date(),
        tag: z.array(z.string())
      })
    })
  }
});

```

フロントマター設定後のmdファイルcontent/sample.md
```md
---
title: ページのタイトル
description: ページの説明
navigation: true
draft: false
date: 2024-11-08
tag:
  - Nuxt
  - 初心者
---

<!-- Content of the page -->
```


フロントマターをクエリキーワードにして
/contents　の中身を取り出せます

https://ics.media/entry/241108/




例えば
draftがfalseのものだけをクエリにする
```vue
<script


```


ブログの元ネタ

↓

API

↓

mdファイル生成

↓

git push

↓

page生成








