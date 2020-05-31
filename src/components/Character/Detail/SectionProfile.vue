<template lang="pug">
section#profile

  .icon(class="dead")
    img.icon(:src="CharData.profile.avatarUrl" alt="アイコン画像")

  .rightBlock

    h1.name {{ CharData.profile.name }}

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
    border-radius: 50%;
    border: 0.3rem solid $COLOR_BASE;
    position: relative;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .icon.dead {
    filter: grayscale(0.5);
    &::after {
      content: "死亡";
      position: absolute;
      width: 12rem;
      height: 1.6rem;
      line-height: 1.6rem;
      text-align: center;
      top: 2rem;
      left: -2.8rem;
      transform: rotate(-45deg);
      font-size: 1.2rem;
      background: #000;
      color: rgba($COLOR_MAIN, 1);
      letter-spacing: 0.1em;
    }
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
