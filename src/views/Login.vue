<template><main>

  <div v-if="loading">
    <h1 style="color:#fff;text-align:center;">LOADING...</h1>
  </div>

  <div v-else>
    <button @click="redirectGoogleAuth">Googleアカウントでログイン</button>
    <router-link to="/dice">ログインせずに試す</router-link>
  </div>

</main></template>

<script lang="ts">
  import {Component, Vue, Watch} from 'vue-property-decorator';
  import firebaseApp from '@/firebase';
  import * as firebase from 'firebase';

  @Component({
    components: {},
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
          alert(reason);
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

  button {
    color: $COLOR_MAIN;
  }
</style>
