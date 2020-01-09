<template lang="pug">
main#l-content

  header.c-pageHeader
    button.c-pageHeader__back(@click="$router.go(-1)")
      <img svg-inline src="@/assets/icon/arrow_back.svg" />
    h1 iAiAを共有
    <img class="c-pageHeader__logo" svg-inline src="@/assets/logo-short.svg" />

  ul.u-mt24
    li
      a.c-btn.u-mt16.--secondary(href='https://twitter.com/intent/tweet?url=https%3A%2F%2Fiaia.app&text=iAiA%20TRPGサポーター&via=iAiAapp&hashtags=#TRPG,#クトゥルフTRPG,#クトゥルフ神話TRPG,#CoC&related=iAiAapp', target='_brank')
        | Twitter
        <img svg-inline src="@/assets/icon/sns/twitter.svg" />
    li
      a.c-btn.u-mt16.--secondary(href='https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fiaia.app', target='_brank')
        | Facebook
        <img svg-inline src="@/assets/icon/sns/facebook.svg" />
    li
      a.c-btn.u-mt16.--secondary(href='https://social-plugins.line.me/lineit/share?url=https%3A%2F%2Fiaia.app', target='_brank')
        | LINE
        <img svg-inline src="@/assets/icon/sns/line.svg" />
    li
      a.c-btn.u-mt16.--secondary(href='https://b.hatena.ne.jp/add?mode=confirm&url=https%3A%2F%2Fiaia.app&title=iAiA', target='_brank')
        | はてなブックマーク
        <img svg-inline src="@/assets/icon/sns/hatena.svg" />

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Share extends Vue {}
</script>

<style scoped lang="scss"></style>
