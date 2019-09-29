<template><div>

  <Nav />

  <main id="content">

    <h1 class="headline">Dice Roll</h1>

    <section id="template" class="en">
      <ul>
        <!-- TODO Button Desingn -->
        <li><button @click="$store.commit('diceRoll',{n:1,ub:100})">1D100</button></li>
        <li><button @click="$store.commit('diceRoll',{n:1,ub:10})">1D10</button></li>
        <li><button @click="$store.commit('diceRoll',{n:1,ub:6})">1D6</button></li>
        <li><button @click="$store.commit('diceRoll',{n:1,ub:4})">1D4</button></li>
        <li><button @click="$store.commit('diceRoll',{n:1,ub:3})">1D3</button></li>
        <li><button @click="$store.commit('diceRoll',{n:1,ub:8})">1D8</button></li>
        <li><button @click="$store.commit('diceRoll',{n:1,ub:20})">1D20</button></li>
      </ul>
    </section>

    <section id="custom">
      <h2 class="subHeadline">カスタムダイス</h2>
      <ul>
        <li>
          <button @click="customFormN++"><i class="material-icons">arrow_drop_up</i></button>
          <input v-model="customFormN" type="number" value="1" min="1" max="999" required>
          <button  @click="customFormN--"><i class="material-icons">arrow_drop_down</i></button>
        </li>
        <li>
          <p>D</p>
        </li>
        <li>
          <button  @click="customFormUb++"><i class="material-icons">arrow_drop_up</i></button>
          <input v-model="customFormUb" type="number" value="10" min="1" max="999" required>
          <button  @click="customFormUb--"><i class="material-icons">arrow_drop_down</i></button>
        </li>
        <li>
          <p>+</p>
        </li>
        <li>
          <button  @click="customFormAdd++"><i class="material-icons">arrow_drop_up</i></button>
          <input v-model="customFormAdd" type="number" value="0" min="1" max="999" required>
          <button  @click="customFormAdd--"><i class="material-icons">arrow_drop_down</i></button>
        </li>
      </ul>
      <button @click="customRoll" class="btn-theme">実行</button>
    </section>

    <section id="log">
      <h2 class="subHeadline">ダイスログ</h2>
      <button @click="$store.commit('clearDiceLog')" class="btn-main">消去</button>
      <p v-if="$store.state.dice.log.length==0" class="mt-16">ダイスのロール記録がありません。</p>
      <table v-else>
        <tr v-for="item in $store.state.dice.log" :key="item">
          <th>{{item.dice}}</th><td>{{item.date}}</td>
        </tr>
      </table>
    </section>

    <section id="modal" v-if="$store.state.dice.showModal">
      <div class="overlay" @click="$store.commit('diceClose')"></div>
      <div class="container">
        <h2 class="en">
          {{ $store.state.dice.n+'D'+$store.state.dice.ub }}
          <span v-if="$store.state.dice.add">{{'+ '+$store.state.dice.add}}</span>
          <i class="material-icons">play_arrow</i>
        </h2>
        <output class="en">{{$store.state.dice.result}}</output>
        <button @click="$store.commit('diceRoll',{n:$store.state.dice.n,ub:$store.state.dice.ub,add:$store.state.dice.add})" class="btn">もう一度</button>
        <button @click="$store.commit('diceClose')" class="btn">閉じる</button>
      </div>
    </section>

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
export default class Dice extends Vue {
  // data
  public customFormN: number = 1;
  public customFormUb: number = 1;
  public customFormAdd: number = 1;

  // methods
  public customRoll(): void {
    if ( !this.customFormN || !this.customFormUb || !this.customFormAdd ) {
      window.alert('入力に間違いがあります。');
      return;
    }
    this.$store.commit('diceRoll', {
      n: Number(this.customFormN),
      ub: Number(this.customFormUb),
      add: Number(this.customFormAdd),
    });
  }

  // lifecycle hook
  public mounted(): void {
    this.$store.commit('restoreDiceLog');
  }
}
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

#modal{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0; right: 0;
  .overlay{
    position: absolute;
    width: 100%; height: 100%;
    top: 0; right: 0;
    background: rgba(#000,.2);
    backdrop-filter: blur(12px) grayscale(.6);
    z-index: 9998;
  }
  .container{
    position: absolute;
    top: 10vh;
    left: 16px;
    width: calc(100% - 32px);
    padding: 24px;
    z-index: 9999;
    border-radius: 8px;
    text-align: center;
    background: $COLOR_THEME;
    color: $COLOR_BASE;
    @media (min-width: $WIDTH_TAB){
      top: 20vh;
      left: calc(50% - 240px);
      width: 480px;
    }
    h2{
      font-size: 24px;
      .material-icons{
        vertical-align: -.15em;
        font-size: 1.1em;
        opacity: .5;
      }
    }
    output{
      display: block;
      font-size: 120px;
      font-weight: bold;
      margin: 48px 0;
      line-height: 1;
    }
    button{
      margin-top: 16px;
      font-size: 16px;
    }
    button:first-of-type{
      background: $COLOR_BASE;
      color: $COLOR_THEME;
    }
    button:last-of-type{
      border: 2px solid $COLOR_BASE;
    }
  }
}
</style>
