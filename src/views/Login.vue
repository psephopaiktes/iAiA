<template lang="pug">
main#l-loginContainer
  h1
    <img svg-inline src="@/assets/logo-default.svg" />
    | iAiA
  #loader(v-if='loading')
    h2 LOADING...
  #login(v-else='')
    h2 ログイン / 新規登録
    button.google(@click='redirectGoogleAuth')
      <img svg-inline src="@/assets/icon/sns/google.svg" />
      | Googleでログイン
    router-link.trial(to='/dice')
      | ログインせずに試す
    p
      router-link(to='/term') 利用規約
      | に同意の上ご利用ください
  #alpha
    h2
      <img svg-inline src="@/assets/icon/warning.svg" />
      | ご注意
    p iAiAは現在アルファ版です。記載されている内容には誤りがある可能性があります。また登録したアカウントやデータは予告なく削除される場合があります。
</template>

<script lang="ts">
import { Watch, Component, Prop, Vue } from "vue-property-decorator";

import firebaseApp from "@/firebase";
import * as firebase from "firebase";

@Component
export default class Login extends Vue {
  // lifecycle hook
  public beforeCreate() {
    if (this.$store.state.login) {
      // ログイン済みの場合
      this.$router.push("/dice");
    }
  }

  // methods
  public redirectGoogleAuth() {
    this.$store.commit("startLoading");
    firebaseApp
      .auth()
      .signInWithRedirect(new firebase.auth.GoogleAuthProvider())
      .catch(reason => {
        throw reason;
      });
  }

  // computed
  public get loading(): boolean {
    return this.$store.state.loading;
  }

  // watcher
  @Watch("loading")
  public onChanged(newValue: boolean, oldValue: boolean): void {
    if (this.$store.state.login) {
      // ログイン済みの場合
      this.$router.push("/dice");
    }
  }
}
</script>

<style scoped lang="scss">
@keyframes GradientBg {
  0% {
    background-position: 0 0, 4px 4px, 0% 50%;
  }
  50% {
    background-position: 0 0, 4px 4px, 100% 50%;
  }
  100% {
    background-position: 0 0, 4px 4px, 0% 50%;
  }
}
main {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: radial-gradient(rgba($COLOR_BASE, 0.1) 20%, transparent 0),
    radial-gradient(rgba($COLOR_BASE, 0.1) 20%, transparent 0), $COLOR_GRADIENT;
  background-position: 0 0, 4px 4px, 100% 0;
  background-size: 8px 8px, 8px 8px, 800% 100%;
  background-repeat: repeat;
  animation: GradientBg 8s ease-in-out infinite;
  h1 {
    position: relative;
    width: 14.4rem;
    height: 4.8rem;
    @include textHidden;
    svg {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
  }
}

#loader {
  @keyframes blink {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.6;
    }
  }
  margin-top: 7.2rem;
  animation: blink 0.6s ease-in-out infinite alternate;
}

#login {
  h2 {
    margin-top: 7.2rem;
    font-size: 2.4rem;
    line-height: 1;
    color: rgba($COLOR_BASE, 0.6);
  }
  p {
    margin-top: 3.2rem;
    color: $COLOR_BASE;
    font-weight: 400;
  }
  .google,
  .trial {
    display: block;
    margin-top: 1.2rem;
    width: 28rem;
    height: 5.6rem;
    line-height: 5.6rem;
    font-size: 1.4rem;
  }
  .google {
    margin-top: 3.2rem;
    position: relative;
    background: $COLOR_BASE;
    color: $COLOR_THEME;
    * {
      fill: $COLOR_THEME;
    }
    svg {
      position: absolute;
      width: 3.2rem;
      height: 3.2rem;
      top: 1.2rem;
      left: 1.6rem;
    }
  }
  .trial {
    background: rgba($COLOR_BASE, 0.1);
    border: 2px solid $COLOR_BASE;
    color: $COLOR_BASE;
  }
}

#alpha {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  padding: 1.2rem 2.4rem 2rem;
  background: rgba($COLOR_CAUTION, 0.8);
  color: $COLOR_MAIN;
  h2 {
    line-height: 2;
    font-size: 1.4rem;
  }
  svg {
    fill: #fff;
    width: 1.6rem;
    margin-right: 0.5em;
    vertical-align: text-bottom;
  }
  p {
    margin-top: 0.4rem;
    opacity: 0.8;
    font-size: 1.2rem;
    font-weight: 500;
  }
}
</style>
