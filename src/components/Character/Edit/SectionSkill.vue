<template lang="pug">
section#skill
  h2
    | 技能値
    <img svg-inline src="@/assets/icon/help.svg" @click='help' />

  button.c-subBtn.u-mt24(@click="hideInitialValueSkills=!hideInitialValueSkills")
    | 初期値の技能を隠す
    <img v-if="hideInitialValueSkills" svg-inline src="@/assets/icon/check_box.svg" />
    <img v-else svg-inline src="@/assets/icon/check_box_outline_blank.svg" />

  details.c-detail
    summary 戦闘技能
    table.parameterTable.u-mt16
      tr
        th
        th 初期値
        th 職業P
        th 興味P
        th 増減
        th 合計
      tr
        th STR
        td 25
        td
          input(type='number' value='74')
        td
          input(type='number' value='0')
        td
          input(type='number' value='-22')
        td 77
    ul.rowBtns
      li: button.c-subBtn(@click="")
        | 行を追加
        <img svg-inline src="@/assets/icon/add.svg" />
      li: button.c-subBtn(@click="")
        | 行を削除
        <img svg-inline src="@/assets/icon/remove.svg" />

  details.c-detail
    summary 探索技能

  details.c-detail
    summary 行動技能

  details.c-detail
    summary 交渉技能

  details.c-detail
    summary 知識技能

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import firebase from "firebase";
import { storage, User } from "firebase";

@Component
export default class CharacterEditSectionSkill extends Vue {
  // data
  hideInitialValueSkills: boolean = true;
  // method
  help(): void {
    window.alert(
      "職業ポイント、興味ポイントを好きな技能に割り振ってください。職業ポイントを割り振ることができる技能は、キャラクターの職業ごとに決まっています。"
    );
  }
}
</script>

<style scoped lang="scss">
.parameterTable {
  td:last-of-type {
    color: $COLOR_THEME;
  }
}
</style>
