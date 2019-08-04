<template><div>

  <Nav />

  <main id="content">
    <h1 class="headline">Dice Roll</h1>
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
export default class Dice extends Vue {}
</script>


<style scoped lang="scss">
@import "@/scss/common.scss";
</style>
