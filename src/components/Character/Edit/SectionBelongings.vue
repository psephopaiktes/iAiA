<template lang="pug">
section#belongings
  //- TODO 仕様確認・デザイン

  h2
    | 所持品

  table.parameterTable.u-mt16
    tr
      th
      th 名称
      th 個数
      th 備考
    tr
      th
        input(type='text' value='')
      td
        input(type='text' value='')
      td
        input(type='number' value='')
      td
        input(type='text' value='')
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

<style scoped lang="scss"></style>
