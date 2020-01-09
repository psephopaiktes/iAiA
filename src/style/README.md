## common.scss
`vue.config.js`によりすべてのCSSに@importされる。  
重複を防ぐため定義していいのは変数と@mixinだけ

## その他のscss
[flocss](https://github.com/hiloki/flocss)を参考に設計。  
すべて`App.vue`でのみ@importされる。  
SPA全体で適応されるスタイル。

## 独自ルール
BEMのModifierは`--modifier`だけで定義する。
`--modifier`単体にはスタイル定義しないこと。
```html
<button class="c-btn c-btn--red"></button>
↓
<button class="c-btn --red"></button>
```
```scss
.c-btn{
    &--red{}
}
↓
.c-btn{
    &.--red{}
}
```
