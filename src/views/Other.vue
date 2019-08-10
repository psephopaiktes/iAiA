<template><div>

  <Nav />

  <main id="content">

    <h1 class="headline">Other</h1>

    <ul class="listView">
      <li><router-link to='/help'>あそびかた</router-link></li>
      <li><router-link to='/term'>利用規約</router-link></li>
      <li><a href="https://twitter.com/iAiAapp" target="_brank" class="open-in-new">連絡先（Twitter）</a></li>
    </ul>
    <button v-if="$store.state.login" @click="$store.commit('logout')">LOGOUT</button>
    <router-link v-else to="/login">LOGIN</router-link>

    <h2>iAiAをシェア</h2>
    <ul>
      <li><a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fiaia.app&text=iAiA%20TRPGサポーター&via=iAiAapp&hashtags=#TRPG,#クトゥルフTRPG,#クトゥルフ神話TRPG,#CoC&related=iAiAapp" target="_brank">Twitter</a></li>
      <li><a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fiaia.app" target="_brank">Facebook</a></li>
      <li><a href="https://social-plugins.line.me/lineit/share?url=https%3A%2F%2Fiaia.app" target="_brank">LINE</a></li>
      <li><a href="https://b.hatena.ne.jp/add?mode=confirm&url=https%3A%2F%2Fiaia.app&title=iAiA" target="_brank">はてブ</a></li>
    </ul>

    <p>aaaaaaa</p>
    <p>aaaaaaa</p>
    <p>aaaaaaa</p>
    <p>aaaaaaa</p>
    <p>aaaaaaa</p>
    <p>aaaaaaa</p>
    <p>aaaaaaa</p>
    <p>aaaaaaa</p>
    <p>aaaaaaa</p>
    <p>aaaaaaa</p>
    <p>aaaaaaa</p>
    <p>aaaaaaa</p>
    <p>aaaaaaa</p>
    <p>aaaaaaa</p>
    <p>aaaaaaa</p>
    <p>aaaaaaa</p>
    <p>aaaaaaa</p>
    <p>aaaaaaa</p>
    <p>aaaaaaa</p>
    <p>aaaaaaa</p>
    <p>aaaaaaa</p>
    <p>aaaaaaa</p>
    <p>aaaaaaa</p>
    <p>aaaaaaa</p>

  </main>

</div></template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Nav from '@/components/Nav.vue';

@Component({
  components: {
    Nav,
  },
})
export default class Other extends Vue {}
</script>


<style scoped lang="scss">
@import "@/scss/common.scss";
button{
  color: $COLOR_MAIN;
}
.listView{
  a{
    display: block;
    position: relative;
    height: 48px;
    line-height: 48px;
    margin-top: 8px;
    padding: 0 16px;
    border-radius: 12px;
    text-decoration: none;
    background: rgba($COLOR_MAIN,.05);
    &::after{
      content: "arrow_forward";
      font-family: 'Material Icons';
      position: absolute;
      right: 16px;
      color: $COLOR_THEME;
    }
    &.open-in-new::after{
      content: "open_in_new";
    }
  }
}
</style>
