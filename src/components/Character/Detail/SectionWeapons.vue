<template lang="pug">
section#weapons
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

<style scoped lang="scss"></style>
