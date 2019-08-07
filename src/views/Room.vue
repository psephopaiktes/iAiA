<template><div>

  <Nav />

  <main id="content">
    <h1 class="headline">Room</h1>
    <p>開発中の機能です。更新情報はTwitterでお知らせします。</p>
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
export default class Room extends Vue {}
</script>


<style scoped lang="scss">
@import "@/scss/common.scss";
</style>
