<template><div>

  <router-link to="/login" id="cta">START</router-link><br>

  <section id="hero">
    <h1>iAiA LP</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </section>

  <!-- 概要 -->
  <section>
    <h2>ああああ</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </section>
  <!-- 機能 -->
  <!-- オフラインセッション -->
  <!-- オンラインセッション -->

  <section>
    <h2>iAiAをシェア</h2>
    <ul>
      <li><a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fiaia.app&text=iAiA%20TRPGサポーター&via=iAiAapp&hashtags=#TRPG,#クトゥルフTRPG,#クトゥルフ神話TRPG,#CoC&related=iAiAapp" target="_brank">Twitter</a></li>
      <li><a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fiaia.app" target="_brank">Facebook</a></li>
      <li><a href="https://social-plugins.line.me/lineit/share?url=https%3A%2F%2Fiaia.app" target="_brank">LINE</a></li>
      <li><a href="https://b.hatena.ne.jp/add?mode=confirm&url=https%3A%2F%2Fiaia.app&title=iAiA" target="_brank">はてブ</a></li>
    </ul>
  </section>

  <section>
    <h2>支援</h2>
  </section>



  <footer>
    <nav><ul>
        <li><router-link to="/term">利用規約</router-link></li>
        <li><router-link to="/help">あそびかた</router-link></li>
        <li><a href="https://twitter.com/iAiAapp" target="_brank">連絡先(Twitter)</a></li>
    </ul></nav>
  </footer>


</div></template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class LP extends Vue {
  // lifecycle hook
  public beforeCreate() {
    if (this.$store.state.login) { // ログイン済みの場合
      this.$router.push('/dice');
    }
  }
}
</script>


<style scoped lang="scss">
@import "@/scss/common.scss";
</style>
