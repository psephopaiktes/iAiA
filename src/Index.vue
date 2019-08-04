<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "@/scss/common.scss";
@import "@/scss/foundation.scss";
@import "@/scss/utility.scss";
@import "@/scss/layout.scss";
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class App extends Vue {
  // lifecycle hook
  private mounted() {
    if (localStorage.redirect) {
      // 404.html からリダイレクトした場合
      this.$router.push(localStorage.redirect);
      localStorage.removeItem('redirect');
    } else if (localStorage.login === 'login') {
      // ログイン済みの場合
      this.$router.push('/app');
    }
  }
}
</script>
