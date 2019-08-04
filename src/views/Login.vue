<template><div>

  <main>
    <h1>Login</h1>
    <button @click="login">LOGIN</button>
  </main>

</div></template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Login extends Vue {
  // method
  private login(): void {
    this.$store.commit('login');
    this.$router.push('/app/');
  }
}
</script>


<style scoped lang="scss">
@import "@/scss/common.scss";

button{
  color: $COLOR_MAIN;
}
</style>
