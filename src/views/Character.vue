<template><div>

  <Nav />

  <main id="content">
    <h1 class="headline">Charcter</h1>
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
export default class Character extends Vue {}
</script>


<style scoped lang="scss">
@import "@/scss/common.scss";
</style>
