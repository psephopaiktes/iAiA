<template lang="pug">
section#belongings.rightGradationCover

  h2 所持品

  .parameterTableScrollContainer: table.parameterTable.u-mt16
    tr
      th 名称
      th 備考
    tr
      td
        input(type='text' placeholder='スマホ')
      td
        input(type='text' placeholder='iPhone X')

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
export default class CharacterEditSectionBelongings extends Vue {}
</script>

<style scoped lang="scss">
.parameterTable {
  th:nth-child(1) {
    width: 20rem;
  }
  th:nth-child(2) {
    width: 40rem;
  }
}
</style>
