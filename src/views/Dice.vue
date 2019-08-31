<template><div>

  <Nav />

  <main id="content">
    <h1 class="headline">Dice Roll</h1>
    <h2 class="subHeadline">Template</h2>
    <ul class="dices">
      <!-- TODO なかやまに相談 -->
      <li><button>1D100</button></li>
      <li><button>1D10</button></li>
      <li><button>3D6</button></li>
      <li><button>1D6</button></li>
      <li><button>1D4</button></li>
      <li><button>2D3</button></li>
      <li><button>2D3</button></li>
    </ul>
    <h2 class="subHeadline">Custom</h2>
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
.dices{
  display: grid;
  grid-auto-rows: 120px;
  grid-template-columns: repeat(
    auto-fit,
    minmax(120px, 1fr)
  );
  grid-gap: 16px;
  margin-top: 16px;
  button {
    display: block;
    width: 100%;
    height: 100%;
    background: rgba($COLOR_MAIN,.1);
    border-radius: 8px;
    transition: .4s ease;
    &:hover{
      transform: scale(1.02);
      background: rgba($COLOR_MAIN,.15);
      transition: .2s ease;
    }
  }
  li:first-child{
    grid-row: 1 / 2;
    grid-column: 1 / 3;
  }
  li:first-child button{
    background: rgba($COLOR_THEME,.9);
  }
}
</style>
