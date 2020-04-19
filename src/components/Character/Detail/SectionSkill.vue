<template lang="pug">
section#skill

  ul.buttons
    li: button.c-subBtn(@click="")
      | 初期値の技能を隠す
      <img v-if="false" svg-inline src="@/assets/icon/check_box.svg" />
      <img v-else svg-inline src="@/assets/icon/check_box_outline_blank.svg" />
    li: router-link.c-subBtn(:to="`/character/edit#skill?charId=${$route.query.charId}`")
      | 編集
      <img svg-inline src="@/assets/icon/edit.svg" />

  details.c-detail
    summary 戦闘技能
    ul.skillList
      li(
        v-for='i in 14'
      )
        p {{ '目星' }}
        output {{ 75 }}

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

import CharData from "@/types/CharData";

@Component
export default class CharacterDetailSectionSkill extends Vue {
  // props
  @Prop() CharData!: CharData;
}
</script>

<style scoped lang="scss">
#skill {
  margin-top: 6.4rem;

  .buttons {
    display: flex;
    li + li {
      margin-left: 0.8rem;
    }
  }

  .skillList {
    margin-top: 0.8rem;
    display: grid;
    grid-gap: 0.8rem;
    grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));

    li {
      border: 1px solid rgba($COLOR_MAIN, 0.1);
      border-radius: 0.4rem;
      text-align: center;
      line-height: 1;
      p {
        margin-top: 1.2rem;
        font-size: 1.2rem;
        opacity: 0.6;
      }
      output {
        display: block;
        margin: 0.8rem 0;
        font-size: 2.4rem;
        opacity: 0.8;
      }
    }
  }
}
</style>
