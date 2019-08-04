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
    if (!this.$store.state.login) {
      this.$router.push('/app/login');
    }
  }
}
</script>
