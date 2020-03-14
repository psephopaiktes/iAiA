<template lang="pug">

  section#l-modal(v-if='true')
    .c-scrim(@click="")
    .c-modal
      h2 サンプルキャラから作成
      button.c-btn.--secondary.u-mt24(@click="")
        | 閉じる
        <img svg-inline src="@/assets/icon/close.svg" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import firebase from "firebase";
import { storage, User } from "firebase";

@Component
export default class CharacterEditSampleModal extends Vue {}
</script>

<style scoped lang="scss">
.c-modal {
  h2 {
    font-size: 1.6rem;
    margin-top: 2.4rem;
  }
}
</style>
