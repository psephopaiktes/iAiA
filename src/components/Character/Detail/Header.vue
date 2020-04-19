<template lang="pug">
header
  .bg(:style="`background-image: url(${CharData.profile.avatarUrl})`")
  router-link.close(to='/character')
    <img svg-inline src="@/assets/icon/close.svg" />
  router-link.c-subBtn.edit(:to="'/character/edit?charId=' + $route.query.charId")
    | 編集
    <img svg-inline src="@/assets/icon/edit.svg" />

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import firebase from "firebase";
import { storage, User } from "firebase";

import CharData from "@/types/CharData";

@Component
export default class CharacterDetailHeader extends Vue {
  // props
  @Prop() CharData!: CharData;
}
</script>

<style scoped lang="scss">
header {
  .bg {
    @include beforeAfter;
    top: 0;
    left: 0;
    height: 12rem;
    background-size: cover;
    background-position: center;
    z-index: -1;
    @include minmax($SM, $MD - 1) {
      top: $L-NAV_MD_H;
    }

    &::after {
      @include beforeAfter;
      top: 0;
      left: 0;
      height: 105%;
      backdrop-filter: blur(12px);
      background-image: linear-gradient(
        rgba($COLOR_BASE, 0.6),
        rgba($COLOR_BASE, 1)
      );
    }
  }
  .close {
    display: block;
    margin-top: 3.2rem;
    width: 2.4rem;
    height: 2.4rem;
    svg {
      width: 100%;
    }
    * {
      fill: $COLOR_MAIN;
    }
  }
  .edit {
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
}
</style>
