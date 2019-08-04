<template><div>

  <Nav />

  <main>
    <h1>This is Other page.</h1>
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
export default class Other extends Vue {}
</script>


<style scoped lang="scss">
@import "@/scss/common.scss";
</style>
