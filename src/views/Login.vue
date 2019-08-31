<template><main>

  <Logo class="logo" />
  <h1>ログイン / 新規登録</h1>

  <div v-if="loading">
    <h1 style="color:#fff;text-align:center;">LOADING...</h1>
  </div>
  <div v-else>
    <button class="button" @click="redirectGoogleAuth">Googleアカウントでログイン</button>
    <router-link class="button" to="/dice">ログインせずに試す</router-link>
    <p><router-link to='/term'>利用規約</router-link>に同意の上ご利用ください</p>
  </div>

</main></template>

<script lang="ts">
  import {Component, Vue, Watch} from 'vue-property-decorator';
  import firebaseApp from '@/firebase';
  import * as firebase from 'firebase';
  import Logo from '@/assets/logo.vue';


  @Component({
    components: {
      Logo,
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
.logo{
  fill: $COLOR_THEME;
}
</style>
