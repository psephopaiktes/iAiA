<template lang="pug">
header.c-pageHeader
  router-link.c-pageHeader__close(to='/character')
    <img svg-inline src="@/assets/icon/close.svg" />
  h1 {{ $route.query.charId ? 'キャラクター編集' : 'キャラクター作成' }}
  ul.buttons
    li(v-if="!$route.query.charId")
      button.c-subBtn.c-pageHeader__subBtn(@click="")
        | サンプルから作成
        <img svg-inline src="@/assets/icon/wc.svg" />
    li(v-if="$route.query.charId")
      button.c-subBtn.c-pageHeader__subBtn(@click="")
        | 死亡状態にする
        <img v-if="CharData.profile.isDead" svg-inline src="@/assets/icon/check_box_outline_blank.svg" />
        <img v-else svg-inline src="@/assets/icon/check_box.svg" />
    li(v-if="$route.query.charId")
      button.c-subBtn.c-pageHeader__subBtn(@click="")
        | 完了
        <img svg-inline src="@/assets/icon/check.svg" />

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import firebase from "firebase";
import { storage, User } from "firebase";

import CharData from "@/types/CharData";

@Component
export default class CharacterEditHeader extends Vue {
  @Prop() CharData!: CharData;
}
</script>

<style scoped lang="scss">
.buttons {
  position: absolute;
  top: 2.4rem;
  right: 2.4rem;
  display: flex;
  li {
    margin-left: 0.8rem;
  }
}
</style>
