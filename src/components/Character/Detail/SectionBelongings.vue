<template lang="pug">
section#belongings(v-if="CharData.profile.belongings.length > 0")

  h2 アイテム

  dl.weaponItemList

    div(
        v-for='(item, i) in CharData.profile.belongings'
        :key='i'
      )
      dt {{ item.name }}
      dd {{ item.note }}

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import firebase from "firebase";
import { storage, User } from "firebase";

import CharData from "@/types/CharData";

@Component
export default class CharacterDetailSectionBelongings extends Vue {
  // props
  @Prop() CharData!: CharData;
}
</script>

<style scoped lang="scss"></style>
