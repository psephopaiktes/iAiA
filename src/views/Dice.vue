<template><div>

  <Nav />

  <main id="content">
    <h1 class="headline">Dice Roll</h1>
  </main>

  <!-- <section id="modal" v-show="showModal">

    <div class="overlay"></div>

    <h2>{{'1D4'}}の結果</h2>
    TODO: ダイス画像がほしい
    <output>{{'24'}}</output>
    <button @click="">もう一度</button>
    <button @click="">閉じる</button>

  </section> -->

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
