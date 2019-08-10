<template><div>

  <Nav />

  <main id="content">

    <h1 class="headline">Other</h1>

    <ul class="listView">
      <li v-if="$store.state.login"><router-link to=''>アカウント設定</router-link></li>
      <li><router-link to='/help'>あそびかた</router-link></li>
      <li><router-link to='/share'>iAiAを共有</router-link></li>
      <li><router-link to='/term'>利用規約</router-link></li>
      <li><a href="https://twitter.com/iAiAapp" target="_brank" class="open-in-new">連絡先（Twitter）</a></li>

      <li v-if="$store.state.login"><button class="logOutButton" @click="$store.commit('logout')">ログアウト</button></li>
      <li v-else><router-link class="logInButton" to="/login">ログイン</router-link></li>
    </ul>

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
.listView{
  margin-top: 32px;
  a,button{
    display: block;
    position: relative;
    width: 100%;
    height: 48px;
    line-height: 44px;
    margin-top: 8px;
    padding: 0 16px;
    border-radius: 12px;
    text-decoration: none;
    text-align: left;
    color: rgba($COLOR_MAIN,.7);
    font-weight: 600;
    border: 2px solid rgba($COLOR_MAIN,.06);
    background: rgba($COLOR_MAIN,.04);
    &::after{
      content: "arrow_forward";
      font-family: 'Material Icons';
      font-size: 18px;
      position: absolute;
      right: 16px;
      color: $COLOR_THEME;
    }
    &.open-in-new::after{
      content: "open_in_new";
    }
  }
  .logOutButton,.logInButton{
    margin-top: 24px;
    width: 100%;
    background: rgba($COLOR_MAIN,.1);
    border: none;
    line-height: 48px;
    text-align: center;
    &::after{
      content: "directions_run";
      font-size: 22px;
    }
  }
  .logInButton{
    background: $COLOR_THEME;
    background-image: linear-gradient(120deg, rgba($COLOR_ACCE,0), rgba($COLOR_ACCE,.6));
    color: $COLOR_BASE;
    &::after{
      content: "";
    }
  }
}
</style>
