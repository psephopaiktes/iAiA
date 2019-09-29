<template>
  <div>
    <!-- スクロールすると出てくる固定ヘッダ スマホ時は下部固定CTAに変更 -->
    <!-- <header>
    <Logo />
    <router-link to="/login" id="cta">START</router-link>
  </header> -->

    <section id="hero">
      <Keyart id="keyart" />
      <div id="buttons">
        <h1><Logo /></h1>
        <router-link to="/login" id="cta" class="en">
          <div>START</div>
        </router-link>
      </div>
      <p class="en">Cthulhu TRPG Supporter</p>
    </section>

    <!-- 概要 -->
    <section>
      <h2>ああああ</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </section>
    <!-- 機能 -->
    <!-- オフラインセッション -->
    <!-- オンラインセッション -->

    <section>
      <h2>iAiAをシェア</h2>
      <ul>
        <li>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fiaia.app&text=iAiA%20TRPGサポーター&via=iAiAapp&hashtags=#TRPG,#クトゥルフTRPG,#クトゥルフ神話TRPG,#CoC&related=iAiAapp"
            target="_brank"
            >Twitter</a
          >
        </li>
        <li>
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fiaia.app"
            target="_brank"
            >Facebook</a
          >
        </li>
        <li>
          <a
            href="https://social-plugins.line.me/lineit/share?url=https%3A%2F%2Fiaia.app"
            target="_brank"
            >LINE</a
          >
        </li>
        <li>
          <a
            href="https://b.hatena.ne.jp/add?mode=confirm&url=https%3A%2F%2Fiaia.app&title=iAiA"
            target="_brank"
            >はてブ</a
          >
        </li>
      </ul>
    </section>

    <!-- <section>
    <h2>支援</h2>
    <p>iAiAはエンジニア1人とデザイナー1人で、趣味で作成されているアプリです。ご支援いただけると開発スピードがあがります。</p>
  </section> -->

    <footer>
      <nav>
        <ul>
          <li><router-link to="/help">あそびかた</router-link></li>
          <li><router-link to="/term">利用規約</router-link></li>
          <li>
            <a href="https://twitter.com/iAiAapp" target="_brank"
              >連絡先（Twitter）<i class="material-icons">open_in_new</i></a
            >
          </li>
        </ul>
      </nav>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Logo from "@/assets/logo.vue";
import Keyart from "@/assets/keyart.vue";

@Component({
  components: {
    Logo,
    Keyart
  }
})
export default class LP extends Vue {
  // lifecycle hook
  public beforeCreate() {
    if (this.$store.state.login) {
      // ログイン済みの場合
      this.$router.push("/dice");
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/scss/common.scss";

section {
  padding: 0 32px;
  @media (min-width: $WIDTH_SP) {
    padding: 0 calc(50% - 20em);
  }
}

#hero {
  height: 480px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(/img/bg-paper.png),
    linear-gradient(rgba($COLOR_THEME, 0), rgba($COLOR_THEME, 0.2));
  background-size: 200px;
  position: relative;
  overflow: hidden;
  #keyart {
    width: 300px;
    position: absolute;
    left: calc(50% - 150px);
    opacity: 0.2;
    @media (min-width: $WIDTH_SP) {
      /* width: 800px; */
    }
  }
  #buttons {
    position: relative;
    width: 160px;
    height: 64px;
    &::before,
    &::after {
      content: "";
      display: block;
      position: absolute;
      border: 1px solid rgba($COLOR_THEME, 0.4);
      transform: skewX(-30deg);
    }
    &::before {
      width: 63px;
      height: 22px;
      top: 0;
      right: 0;
      border-width: 1px 1px 0 0;
    }
    &::after {
      width: 80px;
      height: 20px;
      bottom: 0;
      left: 0;
      border-width: 0 0 1px 1px;
    }
  }
  #buttons svg {
    width: 180px;
    fill: rgba($COLOR_MAIN, 0.8);
    position: absolute;
    bottom: 26px;
    left: -74px;
  }
  #buttons a {
    display: block;
    position: absolute;
    top: 26px;
    right: -64px;
    width: 140px;
    height: 56px;
    line-height: 56px;
    transition: 0.3s;
    text-align: center;
    text-decoration: none;
    color: rgba($COLOR_BASE, 0.8);
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 0.3em;
    text-indent: 0.3em;
    z-index: 1;
    background: $COLOR_THEME;
    box-shadow: 4px 2px 24px rgba($COLOR_BASE, 0.8);
    transform: skewX(-30deg);
    will-change: transform;
    div {
      transform: skewX(30deg);
    }
    &:hover,
    &:active {
      transform: scale(1.04) skewX(-30deg);
    }
  }
  > p {
    margin-top: 64px;
  }
}
</style>
