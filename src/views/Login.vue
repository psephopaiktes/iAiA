<template><main>

  <div class="container">

    <h1 class="logo"><router-link to="/"><Logo /></router-link></h1>

    <div id="loader" v-if="loading">
      <Loader />
      <h2>LOADING...</h2>
    </div>
    <div id="login" v-else>
      <h2>ログイン / 新規登録</h2>
      <button class="button google" @click="redirectGoogleAuth"><LogoGoogle />Googleアカウントでログイン</button>
      <router-link class="button try" to="/dice">ログインせずに試す</router-link>
      <p><router-link to='/term'>利用規約</router-link>に同意の上ご利用ください</p>
    </div>

  </div>

</main></template>

<script lang="ts">
  import {Component, Vue, Watch} from 'vue-property-decorator';
  import firebaseApp from '@/firebase';
  import * as firebase from 'firebase';
  import Logo from '@/assets/logo.vue';
  import Loader from '@/assets/loader.vue';
  import LogoGoogle from '@/assets/logo-google.vue';


  @Component({
    components: {
      Logo,
      Loader,
      LogoGoogle,
    },
  })

  export default class Login extends Vue {

    // lifecycle hook
    public beforeCreate() {
      if (this.$store.state.login) { // ログイン済みの場合
        this.$router.push('/dice');
      }
    }

    // methods
    public redirectGoogleAuth() {
      this.$store.commit('startLoading');
      firebaseApp.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
        .catch((reason) => {
          throw reason;
        });
    }

    // computed
    public get loading(): boolean {
      return this.$store.state.loading;
    }

    // watcher
    @Watch('loading')
    public onChanged(newValue: boolean, oldValue: boolean): void {
      if (this.$store.state.login) { // ログイン済みの場合
        this.$router.push('/dice');
      }
    }

  }
</script>


<style scoped lang='scss'>
@import '@/scss/common.scss';
main{
  text-align: center;
  height: 100vh;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container{
  /* background: red; */
  width: 300px;
  height: 380px;
}
.logo{
  width: 160px;
  margin: 0 auto;
  svg{
    fill: $COLOR_THEME;
  }
}
#loader{
  svg{
    width: 48px;
    height: 48px;
    margin-top: 48px;
    opacity: .6;
  }
  h2{
    font-size: 16px;
    letter-spacing: .05em;
    text-indent: .5em;
    opacity: .5;
    margin-top: 24px;
  }
}
#login{
  h2{
    font-size: 24px;
    letter-spacing: .05em;
    margin: 24px 0 64px;
  }
  .button{
    display: block;
    width: 100%;
    height: 56px;
    line-height: 56px;
    margin: 16px auto 0;
    text-decoration: none;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: .02em;
    border-radius: 1px;
    transition: .2s ease-in-out;
    &:hover,&:active{
      filter: brightness(105%);
      transform: scale(1.02);
    }
    &.google{
      position: relative;
      background: $COLOR_MAIN;
      color: #EA4335;
      padding-left: 16px;
      svg{
        position: absolute;
        width: 32px;
        height: 32px;
        top: 12px;
        left: 12px;
      }
      &::before,&::after{
        display: block;
        content: "";
        position: absolute;
        top: 0; right: 0;
        height: 0;
        width: 0;
        border: 28px solid rgba($COLOR_BASE,.1);
        border-width: 28px 20px;
      }
      &::before{
        border-left-color: transparent;
        border-bottom-color: transparent;
      }
      &::after{
        border-left-color: transparent;
        border-top-color: transparent;
      }
    }
    &.try{
      border: 2px solid $COLOR_MAIN;
      background: rgba($COLOR_MAIN,.05);
      color: $COLOR_MAIN;
      opacity: .8;
    }
  }
  p{
    margin-top: 32px;
    font-size: 13px;
  }
}
</style>
