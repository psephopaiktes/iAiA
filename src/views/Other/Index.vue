<template lang="pug">
main#l-content
  h1.c-headline OTHER

  ul.menu
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

    li(v-if="installIsAvailable"): button.c-btn(@click='install')
      | ホーム画面に追加
      <img svg-inline src="@/assets/icon/add_circle_outline.svg" />

  details#support
    summary
      <img svg-inline src="@/assets/icon/favorite.svg" />
      | iAiAをサポートする
    div
      p iAiAは <a href="https://twitter.com/psephopaiktes" target="_brank">@psephopaiktes</a> と <a href="https://twitter.com/dulltz" target="_brank">@dulltz</a> の2人が趣味で開発しています。モチベーションの向上・サーバー増設費等のため、以下のページから開発費用をすこしだけでもご支援いただけるとめちゃんこ助かります🙏！
      ul
        li.paypal: a(href='https://www.paypal.me/psephopaiktes' target='_blank')
          <img svg-inline src="@/assets/thirdparty/paypal.svg" />
          | <br /> PayPal
        li.note: a(href='https://note.com/psephopaiktes/n/nc1f1feea75bc' target='_blank')
          <img svg-inline src="@/assets/thirdparty/note.svg" />
          | <br /> note

  p.ver ver 0.5.0 alpha

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Other extends Vue {
  // data
  promptEvent: any = null;
  installIsAvailable: boolean = false;

  // lifecycle hook
  public mounted() {
    // なぜかEventが呼ばれてない気がする
    window.addEventListener("beforeinstallprompt", event => {
      event.preventDefault();
      this.promptEvent = event;
      this.installIsAvailable = true;
      return false;
    });
  }

  // method
  install(): void {
    if (!this.promptEvent) {
      window.alert("エラーが発生しました。");
      return;
    }
    this.promptEvent.prompt();
  }
}
</script>

<style scoped lang="scss">
.menu {
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
#support {
  margin: 3.2rem 2% 0;
  background: rgba($COLOR_MAIN, 0.05);
  border: 0.2rem solid rgba($COLOR_MAIN, 0.6);
  border-radius: 0.8rem;
  summary {
    display: block;
    position: relative;
    height: 5.6rem;
    line-height: 5.8rem;
    padding: 0 2.4rem;
    outline: none;
    letter-spacing: 0.1em;
    font-size: 1.6rem;
    svg {
      width: 2.4rem;
      vertical-align: text-top;
      margin-right: 0.8em;
    }
    &::-webkit-details-marker {
      display: none;
    }
    &::after {
      @include beforeAfter;
      width: 1.2rem;
      height: 1.2rem;
      top: 2rem;
      right: 2.4rem;
      border: 1px solid rgba($COLOR_MAIN, 0.6);
      border-width: 0 0.2rem 0.2rem 0;
      transform: rotate(45deg);
    }
  }
  &[open] summary::after {
    transform: rotate(-135deg);
  }
  div {
    background: rgba($COLOR_MAIN, 0.1);
    padding: 1.6rem;
    p {
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 1.5;
    }
    ul {
      margin-top: 0.4rem;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      li {
        width: 100%;
        margin-top: 0.8rem;
        @include min($SM) {
          width: calc(50% - 0.4rem);
        }
        &.paypal {
          background: #003087;
        }
        &.note {
          background: #2cb696;
        }
      }
      a {
        display: block;
        height: 4.4rem;
        text-align: center;
        overflow: hidden;
        &:hover {
          filter: brightness(1.2);
        }
      }
      svg {
        margin: 1rem 0 2rem;
        height: 2.4rem;
        width: auto;
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
