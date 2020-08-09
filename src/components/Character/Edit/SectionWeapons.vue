<template lang="pug">
section#weapons.rightGradationCover

  h2 武器・防具

  .parameterTableScrollContainer: table.parameterTable.u-mt16
    tr
      th 名称
      th 成功率
      th ダメージ
      th 射程
      th 攻撃回数
      th 装弾数
      th 耐久力
      th 備考
    tr(
      v-for='(weapon, i) in getWeapons()'
    )
      td: input(type='text' placeholder='ナイフ' :value="weapon.name", @input="setName($event.target.value, i)")
      td: input(type='number' placeholder='50' :value="weapon.probability", @input="setProbability($event.target.value, i)")
      td: input(type='text' placeholder='1D4' :value="weapon.damage", @input="setDamage($event.target.value, i)")
      td: input(type='text' placeholder='近接' :value="weapon.range", @input="setRange($event.target.value, i)")
      td: input(type='number' placeholder='1' :value="weapon.numberOfAttack", @input="setNumberOfAttack($event.target.value, i)")
      td: input(type='number' placeholder='1' :value="weapon.numberOfBullets", @input="setNumberOfBullets($event.target.value, i)")
      td: input(type='number' placeholder='9' :value="weapon.durability", @input="setDurability($event.target.value, i)")
      td: input(type='text' placeholder='護身用の小型ナイフ' :value="weapon.note", @input="setNote($event.target.value, i)")


  ul.rowBtns
    li: button.c-subBtn(@click="")
      | 行を追加
      <img svg-inline src="@/assets/icon/add.svg" />
    li: button.c-subBtn(@click="")
      | 行を削除
      <img svg-inline src="@/assets/icon/remove.svg" />

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import firebase from "firebase";
import { storage, User } from "firebase";
import { Weapon } from "@/types/CharData";

@Component
export default class CharacterEditSectionWeapons extends Vue {
  getWeapons(): Array<Weapon> {
    return this.$store.state.characterEdit.charData.profile?.weapons;
  }

  setName(input: string, i: number) {
    let weapons = this.getWeapons();
    weapons[i].name = input;
    this.$store.commit("characterEdit/setCharacterProfileWeapons", weapons);
  }
  setProbability(input: number, i: number) {
    let weapons = this.getWeapons();
    weapons[i].probability = input;
    this.$store.commit("characterEdit/setCharacterProfileWeapons", weapons);
  }
  setDamage(input: string, i: number) {
    let weapons = this.getWeapons();
    weapons[i].damage = input;
    this.$store.commit("characterEdit/setCharacterProfileWeapons", weapons);
  }
  setRange(input: string, i: number) {
    let weapons = this.getWeapons();
    weapons[i].range = input;
    this.$store.commit("characterEdit/setCharacterProfileWeapons", weapons);
  }
  setNumberOfAttack(input: number, i: number) {
    let weapons = this.getWeapons();
    weapons[i].numberOfAttack = input;
    this.$store.commit("characterEdit/setCharacterProfileWeapons", weapons);
  }
  setNumberOfBullets(input: number, i: number) {
    let weapons = this.getWeapons();
    weapons[i].numberOfBullets = input;
    this.$store.commit("characterEdit/setCharacterProfileWeapons", weapons);
  }
  setDurability(input: number, i: number) {
    let weapons = this.getWeapons();
    weapons[i].durability = input;
    this.$store.commit("characterEdit/setCharacterProfileWeapons", weapons);
  }
  setNote(input: string, i: number) {
    let weapons = this.getWeapons();
    weapons[i].note = input;
    this.$store.commit("characterEdit/setCharacterProfileWeapons", weapons);
  }
}
</script>

<style scoped lang="scss">
.parameterTable {
  th:nth-child(1) {
    width: 20rem;
  }
  th:nth-child(2) {
    width: 6rem;
  }
  th:nth-child(3) {
    width: 12rem;
  }
  th:nth-child(4) {
    width: 8rem;
  }
  th:nth-child(5) {
    width: 8rem;
  }
  th:nth-child(6) {
    width: 6rem;
  }
  th:nth-child(7) {
    width: 6rem;
  }
  th:nth-child(8) {
    width: 40rem;
  }
}
</style>
