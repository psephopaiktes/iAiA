<template lang="pug">
main#l-content
  h1.c-headline OTHER
  ul
    li: router-link.c-panel(to='/other/help')
      | あそびかた
      <img svg-inline src="@/assets/icon/help.svg" />

    li(v-if="$store.state.login"): router-link.c-panel(to='/other/account')
      | アカウント設定
      <img svg-inline src="@/assets/icon/person.svg" />

    li: router-link.c-panel(to='/other/share')
      | iAiAを共有
      <img svg-inline src="@/assets/icon/share.svg" />

    li: router-link.c-panel(to='/other/term')
      | 利用規約
      <img svg-inline src="@/assets/icon/notes.svg" />

    li: a.c-panel(href='https://twitter.com/iAiAapp' target='_brank')
      | 連絡先・更新情報
      span.openNew <img svg-inline src="@/assets/icon/open_in_new.svg" />
      <img svg-inline src="@/assets/icon/sns/twitter.svg" />

    li(v-if="$store.state.login")
      button.c-panel(@click="$store.commit('logout')")
        | ログアウト
        <img svg-inline src="@/assets/icon/emoji_people.svg" />

    li(v-else): router-link.c-btn(to='/login')
      | ログイン
      <img svg-inline src="@/assets/icon/play_arrow.svg" />

    li: button.c-btn()
      | ホーム画面に追加
      <img svg-inline src="@/assets/icon/add_circle_outline.svg" />

  p.ver ver. 0.5.0 alpha

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Other extends Vue {}
</script>

<style scoped lang="scss">
ul {
  margin-top: 4.8rem;
  li {
    margin-top: 1.2rem;
  }
  .c-panel {
    display: block;
    position: relative;
    width: 100%;
    text-align: left;
    height: 4.8rem;
    padding: 0 1.2rem;
    line-height: 4.8rem;
    font-size: 1.6rem;
    letter-spacing: 0.1em;
    > svg {
      position: absolute;
      width: 2.4rem;
      height: 2.4rem;
      top: 1.2rem;
      right: 1.6rem;
      path {
        fill: rgba($COLOR_THEME, 0.8);
      }
    }
    .openNew {
      opacity: 0.5;
      margin-left: 0.5em;
      svg {
        vertical-align: text-bottom;
      }
      path {
        fill: currentColor;
      }
    }
  }
}
.ver {
  margin-top: 4.8rem;
  text-align: center;
  opacity: 0.5;
}
</style>
