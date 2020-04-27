<template lang="pug">
section#weapons.rightGradationCover

  h2 武器・防具

  .parameterTableScrollContainer: table.parameterTable.u-mt16
    tr
      th 名称
      th 成功率
      th ダメージ
      th 射程
      th 攻撃回数
      th 装弾数
      th 耐久力
      th 備考
    tr
      td: input(type='text' placeholder='ナイフ')
      td: input(type='number' placeholder='50')
      td: input(type='text' placeholder='1D4')
      td: input(type='text' placeholder='近接')
      td: input(type='number' placeholder='1')
      td: input(type='number' placeholder='1')
      td: input(type='number' placeholder='9')
      td: input(type='text' placeholder='護身用の小型ナイフ')


  ul.rowBtns
    li: button.c-subBtn(@click="")
      | 行を追加
      <img svg-inline src="@/assets/icon/add.svg" />
    li: button.c-subBtn(@click="")
      | 行を削除
      <img svg-inline src="@/assets/icon/remove.svg" />

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import firebase from "firebase";
import { storage, User } from "firebase";

@Component
export default class CharacterEditSectionWeapons extends Vue {}
</script>

<style scoped lang="scss">
.parameterTable {
  th:nth-child(1) {
    width: 20rem;
  }
  th:nth-child(2) {
    width: 6rem;
  }
  th:nth-child(3) {
    width: 12rem;
  }
  th:nth-child(4) {
    width: 8rem;
  }
  th:nth-child(5) {
    width: 8rem;
  }
  th:nth-child(6) {
    width: 6rem;
  }
  th:nth-child(7) {
    width: 6rem;
  }
  th:nth-child(8) {
    width: 40rem;
  }
}
</style>
