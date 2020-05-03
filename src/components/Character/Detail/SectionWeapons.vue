<template lang="pug">
section#weapons(v-if="CharData.profile.weapons.length > 0")

  h2 武器・防具

  dl.weaponItemList

    div(
        v-for='(item, i) in CharData.profile.weapons'
        :key='i'
      )
      dt.name {{ item.name }}
      dd
        span 成功率
        | {{ item.probability }}
        small %
      dd
        span ダメージ
        | {{ item.damage }}
      dd
        span 射程
        | {{ item.range }}
      dd
        span 攻撃回数
        | {{ item.numberOfAttack }}
        small 回
      dd
        span 装弾数
        | {{ item.numberOfBullets }}
      dd
        span 耐久力
        | {{ item.durability }}
      dd {{ item.note }}

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import firebase from "firebase";
import { storage, User } from "firebase";

import CharData from "@/types/CharData";

@Component
export default class CharacterDetailSectionWeapons extends Vue {
  // props
  @Prop() CharData!: CharData;
}
</script>

<style scoped lang="scss">
.weaponItemList {
  dd:not(:last-child) {
    padding: 0.8rem 0;
    width: 33.33%;
    @include min($SM) {
      width: 16.66%;
    }

    span {
      display: block;
      font-size: 1.2rem;
      opacity: 0.6;
    }
    small {
      font-size: 0.8em;
    }
  }
}
</style>
