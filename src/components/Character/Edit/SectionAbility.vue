<template lang="pug">
section#ability
  h2
    | 能力値
    <img svg-inline src="@/assets/icon/help.svg" @click='help' />
  button.c-subBtn.u-mt24(@click="")
    | 一括でダイスを振る
    <img svg-inline src="@/assets/icon/loop.svg" />

  table.parameterTable.u-mt24
    tr
      th
      th 基本値
      th 増減
      th 合計
    tr
      th STR
      td
        input(type='number' v-model='abilityStrength')
        button.c-subBtn.--noText(@click="diceStrength")
          <img svg-inline src="@/assets/icon/loop.svg" />
      td
        input(type='number' value='0')
      td {{ 15 }}
    tr
      th CON
      td
        input(type='number' v-model='abilityConstitution')
        button.c-subBtn.--noText(@click="diceConstitution")
          <img svg-inline src="@/assets/icon/loop.svg" />
      td
        input(type='number' value='0')
      td {{ 15 }}
    tr
      th POW
      td
        input(type='number' v-model='abilityPower')
        button.c-subBtn.--noText(@click="dicePower")
          <img svg-inline src="@/assets/icon/loop.svg" />
      td
        input(type='number' value='0')
      td {{ 15 }}
    tr
      th DEX
      td
        input(type='number' v-model='abilityDexterity')
        button.c-subBtn.--noText(@click="diceDexterity")
          <img svg-inline src="@/assets/icon/loop.svg" />
      td
        input(type='number' value='0')
      td {{ 15 }}
    tr
      th APP
      td
        input(type='number' v-model='abilityAppearance')
        button.c-subBtn.--noText(@click="diceAppearance")
          <img svg-inline src="@/assets/icon/loop.svg" />
      td
        input(type='number' value='0')
      td {{ 15 }}
    tr
      th SIZ
      td
        input(type='number' v-model='abilitySize')
        button.c-subBtn.--noText(@click="diceSize")
          <img svg-inline src="@/assets/icon/loop.svg" />
      td
        input(type='number' value='0')
      td {{ 15 }}
    tr
      th INT
      td
        input(type='number' v-model='abilityIntelligence')
        button.c-subBtn.--noText(@click="diceIntelligence")
          <img svg-inline src="@/assets/icon/loop.svg" />
      td
        input(type='number' value='0')
      td {{ 15 }}
    tr
      th EDU
      td
        input(type='number' v-model='abilityEducation')
        button.c-subBtn.--noText(@click="diceEducation")
          <img svg-inline src="@/assets/icon/loop.svg" />
      td
        input(type='number' value='0')
      td {{ 15 }}

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import firebase from "firebase";
import { storage, User } from "firebase";

const abilities = {
  Strength: "STR",
  Constitution: "CON",
  Power: "POW",
  Dexterity: "DEX",
  Appearance: "APP",
  Size: "SIZ",
  Intelligence: "INT",
  Education: "EDU"
};
type Ability = typeof abilities[keyof typeof abilities];

@Component
export default class CharacterEditSectionAbility extends Vue {
  // data
  abilities = abilities;

  // method
  help(): void {
    window.alert("STR, CON などの能力値をダイスを振ってランダムに決定します。");
  }
  get abilityStrength(): number {
    window.console.log("debug");
    window.console.dir(this.$store.state.characterEdit.charData);

    return this.$store.state.characterEdit.charData.ability.STR || 0;
  }
  set abilityStrength(input: number) {
    this.$store.commit("characterEdit/setCharacterAbilityStrength", input);
  }

  get abilityConstitution(): number {
    return this.$store.state.characterEdit.charData.ability.STR || 0;
  }
  set abilityConstitution(input: number) {
    this.$store.commit("characterEdit/setCharacterAbilityConstitution", input);
  }

  get abilityPower(): number {
    return this.$store.state.characterEdit.charData.ability.POW || 0;
  }
  set abilityPower(input: number) {
    this.$store.commit("characterEdit/setCharacterAbilityPower", input);
  }

  get abilityDexterity(): number {
    return this.$store.state.characterEdit.charData.ability.DEX || 0;
  }
  set abilityDexterity(input: number) {
    this.$store.commit("characterEdit/setCharacterAbilityDexterity", input);
  }

  get abilityAppearance(): number {
    return this.$store.state.characterEdit.charData.ability.APP || 0;
  }
  set abilityAppearance(input: number) {
    this.$store.commit("characterEdit/setCharacterAbilityAppearance", input);
  }

  get abilitySize(): number {
    return this.$store.state.characterEdit.charData.ability.SIZ || 0;
  }
  set abilitySize(input: number) {
    this.$store.commit("characterEdit/setCharacterAbilitySize", input);
  }

  get abilityIntelligence(): number {
    return this.$store.state.characterEdit.charData.ability.INT || 0;
  }
  set abilityIntelligence(input: number) {
    this.$store.commit("characterEdit/setCharacterAbilityIntelligence", input);
  }

  get abilityEducation(): number {
    return this.$store.state.characterEdit.charData.ability.EDU || 0;
  }
  set abilityEducation(input: number) {
    this.$store.commit("characterEdit/setCharacterAbilityEducation", input);
  }
}
</script>

<style scoped lang="scss">
.parameterTable {
  td:nth-of-type(1) {
    input {
      width: calc(100% - 4.8rem);
    }
    .c-subBtn {
      margin-left: 0.2rem;
    }
  }
  td:last-of-type {
    color: $COLOR_THEME;
  }
}
</style>
