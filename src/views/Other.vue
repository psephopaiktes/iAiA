<template>
  <div>
    <Nav />

    <main id="content">
      <h1 class="headline">Other</h1>

      <ul class="listView">
        <!-- <li v-if="$store.state.login"><router-link to=''>アカウント設定</router-link></li> -->
        <li><router-link class="btn" to="/help">あそびかた</router-link></li>
        <li>
          <router-link class="btn" v-if="$store.state.login" to="/account"
            >アカウント設定</router-link
          >
        </li>
        <li><router-link class="btn" to="/share">iAiAを共有</router-link></li>
        <li><router-link class="btn" to="/term">利用規約</router-link></li>
        <li>
          <a
            href="https://twitter.com/iAiAapp"
            target="_brank"
            class="open-in-new btn"
            >連絡先・更新情報</a
          >
        </li>
      </ul>

      <button
        v-if="$store.state.login"
        class="logOutButton btn-main"
        @click="$store.commit('logout')"
      >
        ログアウト
      </button>
      <router-link v-else class="logInButton btn-theme" to="/login"
        >ログイン</router-link
      >

      <p class="ver">ver. 0.5.0 alpha</p>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Nav from "@/components/Nav.vue";

@Component({
  components: {
    Nav
  }
})
export default class Other extends Vue {}
</script>

<style scoped lang="scss">
@import "@/scss/common.scss";
.listView {
  margin-top: 48px;
  a {
    display: block;
    position: relative;
    line-height: 48px;
    margin-top: 10px;
    text-align: left;
    color: rgba($COLOR_MAIN, 0.7);
    border: 2px solid rgba($COLOR_MAIN, 0.06);
    background: rgba($COLOR_MAIN, 0.04);
    &::after {
      transition: 0.2s ease-out;
      content: "arrow_forward";
      font-family: "Material Icons";
      font-size: 18px;
      position: absolute;
      right: 16px;
      color: $COLOR_THEME;
    }
    &.open-in-new::after {
      content: "open_in_new";
    }
    &:hover,
    &:active {
      background: rgba($COLOR_MAIN, 0.08);
      &::after {
        right: 12px;
      }
    }
  }
}
.logOutButton,
.logInButton {
  margin-top: 24px;
  position: relative;
  font-weight: 800;
  &::after {
    font-size: 22px;
    transition: 0.2s ease-out;
    font-family: "Material Icons";
    font-size: 18px;
    position: absolute;
    right: 16px;
    color: $COLOR_THEME;
  }
  &:hover::after,
  &:active::after {
    right: 12px;
  }
}
.logOutButton::after {
  content: "directions_run";
}
.logInButton::after {
  content: "input";
  color: inherit;
}

.ver {
  margin: 32px auto;
  color: rgba($COLOR_MAIN, 0.2);
}
</style>
