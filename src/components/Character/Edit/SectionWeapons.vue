<template lang="pug">
section#weapons
  //- TODO 仕様確認・デザイン

  h2
    | 武器・防具

  table.parameterTable.u-mt16
    tr
      th
      th 名称
      th 成功率
      th ダメージ
      th 射程
      th 回数
      th 装弾数
      th 耐久力
      th 備考
    tr
      th
        input(type='text' value='')
      td
        input(type='text' value='')
      td
        input(type='text' value='')
      td
        input(type='text' value='')
      td
        input(type='text' value='')
      td
        input(type='text' value='')
      td
        input(type='text' value='')
      td
        input(type='text' value='')
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
export default class CharacterEditSectionWeapons extends Vue {}
</script>

<style scoped lang="scss"></style>
