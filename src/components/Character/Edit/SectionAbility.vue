<template lang="pug">
section#ability
  h2
    | 能力値
    <img svg-inline src="@/assets/icon/help.svg" @click='help' />
  button.c-subBtn.u-mt24(@click="")
    | 一括でダイスを振る
    <img svg-inline src="@/assets/icon/loop.svg" />

  table.parameterTable.u-mt24
    tr
      th
      th 基本値
      th 増減
      th 合計
    //- ここv-forで表示したい
    tr
      th STR
      td
        input(type='number' value='0')
        button.c-subBtn.--noText(@click="")
          <img svg-inline src="@/assets/icon/loop.svg" />
      td
        input(type='number' value='0')
      td {{ 15 }}

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import firebase from "firebase";
import { storage, User } from "firebase";

@Component
export default class CharacterEditSectionAbility extends Vue {
  // method
  help(): void {
    window.alert("STR, CON などの能力値をダイスを振ってランダムに決定します。");
  }
}
</script>

<style scoped lang="scss">
.parameterTable {
  td:nth-of-type(1) {
    input {
      width: calc(100% - 4.8rem);
    }
    .c-subBtn {
      margin-left: 0.2rem;
    }
  }
  td:last-of-type {
    color: $COLOR_THEME;
  }
}
</style>
