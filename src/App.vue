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
  public beforeCreate() {
    this.$store.commit('checkLocalStorageLogin');
    if (localStorage.redirect) {
      // 404.html からリダイレクトしてきた場合
      this.$router.push(localStorage.redirect);
      localStorage.removeItem('redirect');
    }
  }
  public created() {
    this.$store.commit('checkFirebaseLogin');
  }
  public mounted() {
    window.addEventListener('load', () => {
      const elm = document!.getElementById('loading');
      if (!elm) { return; }
      elm.classList.add('hide');
    });
  }
}
</script>
