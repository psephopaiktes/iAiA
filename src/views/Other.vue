<template><div>

  <Nav />

  <main id="content">
    <h1 class="headline">Other</h1>
    <button @click="logout">LOGOUT</button>
  </main>

</div></template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Nav from '@/components/Nav.vue';

@Component({
  components: {
    Nav,
  },
})
export default class Other extends Vue {
  // method
  private logout(): void {
    this.$store.commit('logout');
    this.$router.push('/');
  }
}
</script>


<style scoped lang="scss">
@import "@/scss/common.scss";
button{
  color: $COLOR_MAIN;
}
</style>
