<template lang="pug">
main#l-content

  h1.c-headline DICE

  section#preset
    h2.c-subHeadline プリセット
    ul
      li.c-panel
        button(@click="$store.commit('diceRoll', { n: 1, ub: 100 })")
          | 1D100 <img svg-inline src="@/assets/1D100.svg" />
      li.c-panel
        button(@click="$store.commit('diceRoll', { n: 1, ub: 10 })")
          | 1D10 <img svg-inline src="@/assets/1D10.svg" />
      li.c-panel
        button(@click="$store.commit('diceRoll', { n: 1, ub: 6 })")
          | 1D6 <img svg-inline src="@/assets/1D6.svg" />
      li.c-panel
        button(@click="$store.commit('diceRoll', { n: 1, ub: 4 })")
          | 1D4 <img svg-inline src="@/assets/1D4.svg" />
      li.c-panel
        button(@click="$store.commit('diceRoll', { n: 1, ub: 3 })")
          | 1D3 <img svg-inline src="@/assets/1D3.svg" />
      li.c-panel
        button(@click="$store.commit('diceRoll', { n: 1, ub: 8 })")
          | 1D8 <img svg-inline src="@/assets/1D8.svg" />
      li.c-panel
        button(@click="$store.commit('diceRoll', { n: 1, ub: 20 })")
          | 1D20 <img svg-inline src="@/assets/1D20.svg" />

  section#custom
    h2.c-subHeadline カスタムダイス
    ul
      li
        button(@click='customFormN++')
          <img svg-inline src="@/assets/icon/add.svg" />
        input(v-model='customFormN' type='number' value='1' min='1' max='999' required)
        button(@click='customFormN--')
          <img svg-inline src="@/assets/icon/remove.svg" />
      li
        button(@click='customFormUb++')
          <img svg-inline src="@/assets/icon/add.svg" />
        input(v-model='customFormUb' type='number' value='10' min='1' max='999' required)
        button(@click='customFormUb--')
          <img svg-inline src="@/assets/icon/remove.svg" />
      li
        button(@click='customFormAdd++')
          <img svg-inline src="@/assets/icon/add.svg" />
        input(v-model='customFormAdd' type='number' value='0' min='1' max='999' required)
        button(@click='customFormAdd--')
          <img svg-inline src="@/assets/icon/remove.svg" />
    button.c-btn.u-mt16(@click='customRoll')
      | 実行
      <img svg-inline src="@/assets/icon/play_arrow.svg" />

  section#log
    h2.c-subHeadline ダイスログ
    button.c-subBtn.u-mt16(v-if='$store.state.dice.log.length !== 0' @click="$store.commit('clearDiceLog')")
      | 消去
      <img svg-inline src="@/assets/icon/delete.svg" />
    p.u-mt16(v-if='$store.state.dice.log.length == 0')
      | ダイスのロール記録がありません。
    table(v-else='')
      tbody
        tr(v-for='item in $store.state.dice.log', :key='item')
          th {{ item.dice }}
          td {{ item.date }}

  section#l-modal(:class='{show: $store.state.dice.showModal}')
    .c-scrim(@click="$store.commit('diceClose')")
    .c-modal
      h2
        | {{ $store.state.dice.n + "D" + $store.state.dice.ub }}
        span(v-if='$store.state.dice.add') {{ " + " + $store.state.dice.add }}
      <img svg-inline src="@/assets/icon/arrow_drop_down.svg" />
      output {{ $store.state.dice.result }}
      button.c-btn.--dark.u-mt56(@click="$store.commit('diceRoll', {\
        n: $store.state.dice.n,\
        ub: $store.state.dice.ub,\
        add: $store.state.dice.add\
      })")
        | もういちど
        <img svg-inline src="@/assets/icon/play_arrow.svg" />
      button.c-btn.--dark.u-mt12(@click="$store.commit('diceClose')")
        | 閉じる
        <img svg-inline src="@/assets/icon/close.svg" />

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Dice extends Vue {
  // data
  public customFormN: number = 1;
  public customFormUb: number = 10;
  public customFormAdd: number = 0;

  // methods
  public customRoll(): void {
    if (
      this.customFormN < 1 ||
      this.customFormUb < 1 ||
      this.customFormAdd < 0
    ) {
      window.alert("入力に間違いがあります。");
      return;
    }
    this.$store.commit("diceRoll", {
      n: Number(this.customFormN),
      ub: Number(this.customFormUb),
      add: Number(this.customFormAdd)
    });
  }

  // lifecycle hook
  public mounted(): void {
    this.$store.commit("restoreDiceLog");
  }
}
</script>

<style scoped lang="scss">
#preset ul {
  display: grid;
  grid-auto-rows: 9.6rem;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  grid-gap: 1.6rem;
  margin-top: 1.6rem;
  @media (min-width: $MD) {
    grid-auto-rows: 96px;
  }
  li:first-child {
    grid-row: 1 / 2;
    grid-column: 1 / 3;
  }
  button {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    font-size: 1.6rem;
    font-weight: 700;
    text-align: left;
    padding-left: 3.2rem;
    letter-spacing: 0.1em;
  }
  svg {
    position: absolute;
    bottom: 1.6rem;
    right: 1.6rem;
    height: 2.4rem;
    width: auto;
  }
}

#custom {
  & > ul {
    display: flex;
    justify-content: space-between;
    margin-top: 1.6rem;
    li {
      height: 12.8rem;
      border-radius: 0.4rem;
      overflow: hidden;
      width: calc((100% - 1.6rem) / 3);
      display: flex;
      position: relative;
      flex-direction: column;
      background: rgba($COLOR_MAIN, 0.05);
      button {
        height: 2.4rem;
        background: rgba($COLOR_MAIN, 0.05);
        svg {
          width: 1.6rem;
          height: 1.6rem;
          margin-top: 0.4rem;
        }
        * {
          fill: rgba($COLOR_MAIN, 0.5);
        }
      }
      input {
        appearance: none;
        margin: 0.4rem 0;
        height: 7.2rem;
        text-align: center;
        font-size: 2.4rem;
        color: #fff;
        outline: none;
        letter-spacing: 0.1em;
        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
          margin: 0;
          -webkit-appearance: none;
        }
      }
    }
    li:nth-child(2),
    li:nth-child(3) {
      input {
        padding-left: 2.4rem;
      }
      &::before {
        position: absolute;
        line-height: 12.8rem;
        left: 0.8rem;
        font-size: 1.2em;
        color: rgba($COLOR_MAIN, 0.5);
      }
    }
    li:nth-child(2)::before {
      content: "D";
    }
    li:nth-child(3)::before {
      content: "+";
    }
  }
}

#log {
  table {
    table-layout: fixed;
    margin-top: 0.8rem;
    border-collapse: separate;
    border-spacing: 0 0.8rem;
    width: 100%;
    font-size: 16px;
    tr {
      height: 2.4rem;
      line-height: 2.4rem;
    }
    th {
      text-align: left;
      font-size: 1.6rem;
      font-weight: 600;
    }
    td {
      font-size: 1rem;
      text-align: right;
      opacity: 0.5;
      position: relative;
      &::before {
        content: "";
        display: block;
        position: absolute;
        width: 8rem;
        height: 0.1rem;
        top: 48%;
        right: calc(100% - 4rem);
        background: rgba($COLOR_MAIN, 0.3);
      }
    }
  }
}

.c-modal {
  background: $COLOR_GRADIENT;
  color: $COLOR_BASE;
  text-align: center;
  h2 {
    margin-top: 3.2rem;
    font-size: 2.4rem;
    letter-spacing: 0.1em;
    opacity: 0.5;
  }
  > svg {
    display: block;
    margin: 0.8rem auto 0;
    width: 3.2rem;
    height: 3.2rem;
    opacity: 0.5;
  }
  output {
    display: block;
    margin-top: 4.8rem;
    font-size: 7.2rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-indent: 0.2em;
  }
}
</style>
