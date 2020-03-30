<template lang="pug">
section#profile
  h2
    | 能力値
    <img svg-inline src="@/assets/icon/help.svg" @click='help' />

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import firebase from "firebase";
import { storage, User } from "firebase";

@Component
export default class CharacterEditSectionCharacteristics extends Vue {
  // method
  help(): void {
    window.alert(
      "STR,...などの基本技能をダイスを振ってランダムに決定します。HP...は基本能力値に応じて自動で決定します。"
    );
  }
}
</script>

<style scoped lang="scss"></style>
