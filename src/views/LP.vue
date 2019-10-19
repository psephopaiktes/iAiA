<template>
  <div>
    <!-- スクロールすると出てくる固定ヘッダ スマホ時は下部固定CTAに変更 -->
    <!-- <header>
    <Logo />
    <router-link to="/login" id="cta">START</router-link>
  </header> -->

    <section id="hero">
      <div id="fog"></div>
      <Keyart id="keyart" />
      <div id="buttons">
        <h1><Logo /></h1>
        <router-link to="/login" id="cta" class="en">
          <div>START</div>
        </router-link>
      </div>
      <ul id="urls">
        <li>
          <a href="https://twitter.com/iAiAapp" title="Twitter" target="_brank">
            <IconLpTwitter />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/psephopaiktes/iAiA"
            title="GitHub"
            target="_brank"
          >
            <IconLpGitHub />
          </a>
        </li>
      </ul>
      <p class="en">Cthulhu TRPG Supporter</p>
    </section>

    <!-- 概要 -->
    <section>
      <h2>iAiAは無料のTRPGサポートアプリです</h2>
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

    <!-- 概要 -->
    <section>
      <h2>スマホだけでプレイ。ダイスもキャラクターシートも不要</h2>
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

    <!-- <section>
    <h2>支援</h2>
    <p>iAiAはエンジニア1人とデザイナー1人で、趣味で作成されているアプリです。ご支援いただけると開発スピードがあがります。</p>
  </section> -->

    <footer>
      <nav>
        <h3>iAiAを共有</h3>
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
        <h3>メニュー</h3>
        <ul>
          <li><router-link to="/help">あそびかた</router-link></li>
          <li><router-link to="/term">利用規約</router-link></li>
          <li>
            <a href="https://twitter.com/iAiAapp" target="_brank">
              Twitter<i class="material-icons">open_in_new</i>
            </a>
          </li>
          <li>
            <a href="https://github.com/psephopaiktes/iAiA" target="_brank">
              GitHub<i class="material-icons">open_in_new</i>
            </a>
          </li>
        </ul>
      </nav>
      <p class="en"><small>© iAiA 2019</small></p>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Logo from "@/assets/logo.vue";
import Keyart from "@/assets/keyart.vue";
import IconLpTwitter from "@/assets/icon/lp_twitter.vue";
import IconLpGitHub from "@/assets/icon/lp_github.vue";

@Component({
  components: {
    Logo,
    Keyart,
    IconLpTwitter,
    IconLpGitHub
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
  h2 {
    color: $COLOR_THEME;
    margin-top: 64px;
    font-size: 32px;
  }
}

#hero {
  height: 640px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(/img/hero.jpg);
  background-position: center;
  background-size: cover;
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 80px;
    bottom: 0;
    background-image: linear-gradient(
      rgba($COLOR_BASE, 0),
      rgba($COLOR_BASE, 1)
    );
  }
  #fog {
    width: 100%;
    height: 100%;
    position: absolute;
    &::before,
    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 300vw;
      height: 100%;
      background-size: contain;
      background-repeat: repeat-x;
    }
    &::before {
      background-image: url(/img/fog-1.png);
      opacity: 0.8;
      animation: linear 60s linear infinite;
      @media (min-width: $WIDTH_SP) {
        opacity: 0.6;
        animation: linear 160s linear infinite;
      }
    }
    &::after {
      opacity: 0.6;
      background-image: url(/img/fog-2.png);
      animation: linear 40s linear infinite;
      @media (min-width: $WIDTH_SP) {
        opacity: 0.4;
        animation: linear 120s linear infinite;
      }
    }
    @keyframes linear {
      0% {
        transform: translate3d(0, 0, 0);
      }
      100% {
        transform: translate3d(-200vw, 0, 0);
      }
    }
  }
  #keyart {
    top: -8%;
    width: 640px;
    position: absolute;
    left: calc(50% - 320px);
    /* opacity: 0.1; */
    opacity: 0;
    @media (min-width: $WIDTH_SP) {
      top: -18%;
      width: 800px;
      position: absolute;
      left: calc(50% - 400px);
    }
  }
  #buttons {
    position: relative;
    margin-top: 80%;
    width: 160px;
    height: 64px;
    @media (min-width: $WIDTH_SP) {
      margin-top: 25%;
    }
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
    backdrop-filter: blur(2px);
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
    margin-top: 40px;
    opacity: 0.8;
    font-weight: 100;
    letter-spacing: 0.2em;
  }
  #urls {
    position: absolute;
    top: 12px;
    right: 8px;
    @media (min-width: $WIDTH_SP) {
      top: 24px;
      right: 32px;
    }
    li:first-child {
      position: relative;
      left: -24px;
    }
    li:last-child {
      position: relative;
      top: -12px;
    }
    a {
      display: block;
      opacity: 0.6;
      transition: 0.2s ease-out;
      &:hover {
        opacity: 1;
      }
    }
    svg {
      width: 44px;
    }
  }
}
footer {
  padding: 96px 0 64px;
  text-align: center;
  margin-top: 96px;
  background-image: linear-gradient(
    rgba($COLOR_MAIN, 0),
    rgba($COLOR_MAIN, 0.2)
  );
  h3 {
    margin-top: 32px;
    letter-spacing: 0.05em;
  }
  ul {
    display: flex;
    justify-content: center;
    margin-top: 4px;
  }
  li {
    margin: 0 8px;
    .material-icons {
      font-size: inherit;
      vertical-align: middle;
    }
  }
  a {
    opacity: 0.6;
    &:hover {
      opacity: 0.8;
    }
  }
  p {
    margin-top: 48px;
    opacity: 0.5;
    font-weight: bold;
  }
}
</style>
