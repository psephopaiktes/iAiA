<template><div>

  <Nav />

  <main id="content">

    <h1 class="headline">Other</h1>

    <ul class="listView buttonStyle">
      <!-- <li v-if="$store.state.login"><router-link to=''>アカウント設定</router-link></li> -->
      <li><router-link to='/help'>あそびかた</router-link></li>
      <li><router-link to='/share'>iAiAを共有</router-link></li>
      <li><router-link to='/term'>利用規約</router-link></li>
      <li><a href="https://twitter.com/iAiAapp" target="_brank" class="open-in-new">連絡先・更新情報（Twitter）</a></li>
    </ul>

    <button v-if="$store.state.login" class="logOutButton buttonStyle" @click="$store.commit('logout')">ログアウト</button>
    <router-link v-else class="logInButton buttonStyle" to="/login">ログイン</router-link>

    <p class="ver"></p>

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
  margin-top: 48px;
  a{
    position: relative;
    line-height: 48px;
    margin-top: 10px;
    text-align: left;
    color: rgba($COLOR_MAIN,.7);
    border: 2px solid rgba($COLOR_MAIN,.06);
    background: rgba($COLOR_MAIN,.04);
    &::after{
      transition: .2s ease-out;
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
    &:hover,&:active{
      background: rgba($COLOR_MAIN,.08);
      &::after{
        right: 12px;
      }
    }
  }
}
.logOutButton,.logInButton{
  margin-top: 24px;
  position: relative;
  font-weight: 800;
  letter-spacing: .1em;
  &::after{
    font-size: 22px;
    transition: .2s ease-out;
    font-family: 'Material Icons';
    font-size: 18px;
    position: absolute;
    right: 16px;
    color: $COLOR_THEME;
  }
  &:hover,&:active{
    letter-spacing: .2em;
    &::after{
      right: 12px;
    }
  }
}
.logOutButton{
  background: rgba($COLOR_MAIN,.1);
  color: rgba($COLOR_MAIN,.7);
  &::after{
    content: "directions_run";
  }
  &:hover,&:active{
    background: rgba($COLOR_MAIN,.08);
  }
}
.logInButton{
  background: rgba($COLOR_THEME,.9);
  color: rgba($COLOR_BASE,.8);
  &::after{
    content: "input";
    color: inherit;
  }
  &:hover,&:active{
    background: $COLOR_THEME;
  }
}

.ver{
  margin: 32px auto;
  color: rgba($COLOR_MAIN,.2);
  &::after{
    content: 'ver. 0.5.0'
  }
}
</style>
