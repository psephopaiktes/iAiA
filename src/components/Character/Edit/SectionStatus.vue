<template lang="pug">
section#status
  h2
    | 状態
    <img svg-inline src="@/assets/icon/help.svg" @click='help' />

  table.parameterTable.u-mt24
    tr
      th
      th 基本値
      th 増減
      th 合計
    tr
      th HP
      td 120
      td
        input(type='number' value='0')
      td {{ 120 }}

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import firebase from "firebase";
import { storage, User } from "firebase";

@Component
export default class CharacterEditSectionStatus extends Vue {
  // method
  help(): void {
    window.alert(
      "STR, CON などの能力値に応じて、HP, MPなどが自動的に決定します。増減がある場合は変更してください。"
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
