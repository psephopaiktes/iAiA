<template>
  <div>
    <button @click="redirectGoogleAuth">Googleアカウントでログイン</button>
    <router-link to="/dice">ログインせずに試す</router-link>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
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
      firebaseApp.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
        .catch((reason) => {
          alert(reason);
        });
    }
  }
</script>


<style scoped lang='scss'>
  @import '@/scss/common.scss';

  button {
    color: $COLOR_MAIN;
  }
</style>
