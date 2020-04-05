<template lang="pug">
header.c-pageHeader
  router-link.c-pageHeader__close(to='/character')
    <img svg-inline src="@/assets/icon/close.svg" />
  h1 {{ $route.query.charId ? 'キャラクター編集' : 'キャラクター作成' }}
  ul.buttons
    li(v-if="!$route.query.charId")
      button.c-subBtn.c-pageHeader__subBtn(@click="$emit('showSampleModal')")
        | サンプルから作成
        <img svg-inline src="@/assets/icon/wc.svg" />
    li(v-if="$route.query.charId")
      button.c-subBtn.c-pageHeader__subBtn(@click="")
        | 死亡状態にする
        <img v-if="CharData.profile.isDead" svg-inline src="@/assets/icon/check_box_outline_blank.svg" />
        <img v-else svg-inline src="@/assets/icon/check_box.svg" />
    li(v-if="$route.query.charId")
      button.c-subBtn.c-pageHeader__subBtn(@click="")
        | 保存
        <img svg-inline src="@/assets/icon/check.svg" />

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import firebase from "firebase";
import { storage, User } from "firebase";

import CharData from "@/types/CharData";

@Component
export default class CharacterEditHeader extends Vue {
  // props
  @Prop() CharData!: CharData;
}
</script>

<style scoped lang="scss">
.buttons {
  position: absolute;
  top: 3.2rem;
  right: 2.4rem;
  display: flex;
  @include minmax($SM, $MD - 1) {
    top: #{3.2rem + $L-NAV_SM_H};
  }
  li {
    margin-left: 0.8rem;
  }
}
</style>
