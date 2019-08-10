<template><div>
  <Home v-if="!$store.state.login"></Home>
</div></template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Home from '@/components/Home.vue';

@Component({
  components: {
      Home,
  },
})

export default class Login extends Vue {
  // lifecycle hook
  public beforeCreate() {
    // if (this.$store.state.login) { // ログイン済みの場合
    //   this.$router.push('/dice');
    // }
  }
}
</script>

<style scoped lang="scss">
@import "@/scss/common.scss";

button{
  color: $COLOR_MAIN;
}
</style>
