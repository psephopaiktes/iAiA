<template><div>

  <main>
    <h1>Login</h1>
    <button @click="$store.commit('login')">LOGIN</button>
    <router-link to="/dice">ログインせずに試す</router-link>
  </main>

</div></template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Login extends Vue {
  // lifecycle hook
  private beforeCreate() {
    if (localStorage.user) { // ログイン済みの場合
      this.$router.push('/dice');
    }
  }
}
</script>


<style scoped lang="scss">
@import "@/scss/common.scss";

button{
  color: $COLOR_MAIN;
}
</style>
