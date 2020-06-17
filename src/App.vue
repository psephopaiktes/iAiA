<template lang="pug">
#app
  global-nav
  router-view
  audio(id="diceSound" preload="auto"): source(src="/img/dice.mp3" type="audio/mp3")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import GlobalNav from "@/components/GlobalNav.vue";

@Component({
  components: {
    GlobalNav
  }
})
export default class App extends Vue {
  // lifecycle hook
  public beforeCreate() {
    this.$store.commit("checkLocalStorageLogin");
    if (localStorage.redirect) {
      // 404.html からリダイレクトしてきた場合
      this.$router.push(localStorage.redirect);
      localStorage.removeItem("redirect");
    }
  }
  public created() {
    this.$store.dispatch("checkFirebaseLogin");
  }
  public mounted() {
    window.addEventListener("load", () => {
      const elm = document!.getElementById("loading");
      if (!elm) {
        return;
      }
      elm.style.display = "none";
    });
  }
  // Anchor Scroll
  public updated() {
    const hash = this.$route.hash;
    const elm = document.getElementById(hash.substring(1));
    if (hash && elm && hash.match(/^#.+$/)) {
      window.scroll({
        top: elm.getBoundingClientRect().y + window.pageYOffset,
        behavior: "smooth"
      });
    }
  }
}
</script>

<style lang="scss">
@import "@/style/foundation.scss";
@import "@/style/layout.scss";
@import "@/style/component.scss";
@import "@/style/utility.scss";
</style>
