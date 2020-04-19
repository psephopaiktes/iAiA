<template lang="pug">
section#profile

  img.icon(:src="CharData.profile.avatarUrl" alt="アイコン画像")

  .rightBlock

    h1.name
      | {{ CharData.profile.name }}
      span(v-if="CharData.profile.isDead") （死亡）

    p.mainProfile {{ CharData.profile.sex }} / {{ CharData.profile.age }}歳 / {{ CharData.profile.occupation }}

    details.otherProfile
      summary その他のプロフィール
      dl.c-panel
        dt 身長
        dd {{ CharData.profile.heightCentimeter }}cm
        dt 体重
        dd {{ CharData.profile.weightKilogram }}kg
        dt 紹介・メモ
        dd {{ CharData.profile.backstory }}

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import firebase from "firebase";
import { storage, User } from "firebase";

import CharData from "@/types/CharData";

@Component
export default class CharacterDetailSectionProfile extends Vue {
  // props
  @Prop() CharData!: CharData;
}
</script>

<style scoped lang="scss">
#profile {
  margin-top: 2.4rem;
  display: flex;
  font-size: 1.1rem;
  line-height: 1.4;

  .icon {
    width: 10.8rem;
    height: 10.8rem;
    object-fit: cover;
    border-radius: 50%;
    border: 0.6rem solid $COLOR_BASE;
  }

  .rightBlock {
    margin-top: 1.6rem;
    margin-left: 1.6rem;
  }

  .name {
    font-size: 1.6rem;
    font-weight: 700;
    span {
      opacity: 0.6;
    }
  }

  .mainProfile {
    margin-top: 0.8rem;
    opacity: 0.6;
  }

  .otherProfile {
    summary {
      margin-top: 0.8rem;
      opacity: 0.6;
      outline: none;
    }
    dl {
      padding: 0.8rem 1.6rem 1.6rem;
      margin-top: 0.8rem;
      dt {
        font-weight: 700;
        margin-top: 0.8rem;
      }
      dd {
        font-weight: 400;
      }
    }
  }
}
</style>
