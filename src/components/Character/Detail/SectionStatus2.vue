<template lang="pug">
section#status2

  ul

    li
      p アイディア
      output {{ 55 }}

    li
      p 幸運
      output {{ 65 }}

    li
      p 知識
      output {{ 75 }}

    li
      p ダメージボーナス
      output {{ '1D4' }}

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import firebase from "firebase";
import { storage, User } from "firebase";

import CharData from "@/types/CharData";

@Component
export default class CharacterDetailSectionStatus2 extends Vue {
  // props
  @Prop() CharData!: CharData;
}
</script>

<style scoped lang="scss">
#status2 {
  margin-top: 2.4rem;
  text-align: center;
  font-weight: 500;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    @include min($SM) {
      justify-content: space-evenly;
    }
  }

  li {
    p {
      font-size: 1rem;
      line-height: 1.2;
      opacity: 0.6;
    }
    output {
      font-size: 2.8rem;
      opacity: 0.8;
    }
  }
}
</style>
