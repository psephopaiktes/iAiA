<template><div>

  <Nav />

  <main id="content">

    <h1 class="headline">Dice Roll</h1>

    <section id="template">
      <ul>
        <!-- TODO なかやまに相談 -->
        <li><button>1D100</button></li>
        <li><button>1D10</button></li>
        <li><button>3D6</button></li>
        <li><button>1D6</button></li>
        <li><button>1D4</button></li>
        <li><button>2D3</button></li>
        <li><button>2D3</button></li>
      </ul>
    </section>

    <section id="custom">
      <h2 class="subHeadline">カスタムダイス</h2>
      <ul>
        <li>
          <button><i class="material-icons">arrow_drop_up</i></button>
          <input type="number" value="1" min="1" max="999" required>
          <button><i class="material-icons">arrow_drop_down</i></button>
        </li>
        <li>
          <p>D</p>
        </li>
        <li>
          <button><i class="material-icons">arrow_drop_up</i></button>
          <input type="number" value="10" min="1" max="999" required>
          <button><i class="material-icons">arrow_drop_down</i></button>
        </li>
        <li>
          <p>+</p>
        </li>
        <li>
          <button><i class="material-icons">arrow_drop_up</i></button>
          <input type="number" value="0" min="1" max="999" required>
          <button><i class="material-icons">arrow_drop_down</i></button>
        </li>
      </ul>
      <button class="btn-theme">実行</button>
    </section>

    <section id="log">
      <h2 class="subHeadline">ダイスログ</h2>
      <button class="btn-main">消去</button>
      <!-- <p>ダイスのロール記録がありません。</p> -->
      <table>
        <tr><th>1D100 → 88</th><td>08/14 14:02</td></tr>
        <tr><th>1D100 → 88</th><td>08/14 14:02</td></tr>
        <tr><th>1D100 → 88</th><td>08/14 14:02</td></tr>
      </table>
    </section>

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

#template ul{
  display: grid;
  grid-auto-rows: 160px;
  grid-template-columns: repeat(
    auto-fit,
    minmax(120px, 1fr)
  );
  grid-gap: 16px;
  margin-top: 56px;
  @media (min-width: $WIDTH_TAB){
  grid-auto-rows: 96px;
  }
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

#custom{
  &>ul{
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
    li{
      height: 128px;
      border-radius: 8px;
      overflow: hidden;
    }
    li:nth-child(odd){
      width: 28%;
      display: flex;
      flex-direction: column;
      button{
        height: 32px;
        background: rgba($COLOR_MAIN,.15);
        i{
          line-height: 32px;
          color: rgba($COLOR_MAIN,.6);
        }
      }
      input{
        appearance: none;
        height: 64px;
        border: 0;
        outline: none;
        text-align: center;
        font-size: 36px;
        color: #fff;
        background: rgba($COLOR_MAIN,.1);
        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
          margin: 0;
          -webkit-appearance: none;
        }
      }
    }
    li:nth-child(even){
      line-height: 128px;
      font-size: 28px;
      color: rgba($COLOR_MAIN,.8);
    }
  }
  &>button{
    margin-top: 24px;
  }
}

#log{
  >button{
    width: 80px;
    height: 32px;
    line-height: 32px;
    border-radius: 8px;
    float: right;
    position: relative;
    bottom: 32px;
  }
  table{
    table-layout: fixed;
    margin-top: 16px;
    border-collapse: collapse;
    width: 100%;
    font-size: 16px;
    letter-spacing: .05em;
    tr{
      height: 64px;
      border-top: 1px solid rgba($COLOR_MAIN,.2);
      @media (min-width: $WIDTH_TAB){
        height: 48px;
      }
    }
    th{
      text-align: left;
      padding-left: 8px;
    }
    td{
      text-align: right;
      padding-right: 8px;
      opacity: .5;
    }
  }
}
</style>
