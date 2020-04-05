<template lang="pug">
main#l-content

  CharacterEditHeader(:CharData="CharData" @showSampleModal="showSampleModal=true")

  CharacterEditSectionProfile(:CharData="CharData")
  CharacterEditSectionAbility
  CharacterEditSectionStatus
  CharacterEditSectionSkill
  CharacterEditSectionWeapons
  CharacterEditSectionBelongings

  CharacterEditFooter

  CharacterEditSampleModal(v-if="showSampleModal" @closeSampleModal="showSampleModal=false")

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import firebase from "firebase";
import { storage, User } from "firebase";

import CharData from "@/types/CharData";

import CharacterEditHeader from "@/components/Character/Edit/Header.vue";
import CharacterEditFooter from "@/components/Character/Edit/Footer.vue";
import CharacterEditSectionProfile from "@/components/Character/Edit/SectionProfile.vue";
import CharacterEditSectionAbility from "@/components/Character/Edit/SectionAbility.vue";
import CharacterEditSectionStatus from "@/components/Character/Edit/SectionStatus.vue";
import CharacterEditSectionSkill from "@/components/Character/Edit/SectionSkill.vue";
import CharacterEditSectionWeapons from "@/components/Character/Edit/SectionWeapons.vue";
import CharacterEditSectionBelongings from "@/components/Character/Edit/SectionBelongings.vue";
import CharacterEditSampleModal from "@/components/Character/Edit/SampleModal.vue";

@Component({
  components: {
    CharacterEditHeader,
    CharacterEditFooter,
    CharacterEditSectionProfile,
    CharacterEditSectionAbility,
    CharacterEditSectionStatus,
    CharacterEditSectionSkill,
    CharacterEditSectionWeapons,
    CharacterEditSectionBelongings,
    CharacterEditSampleModal
  }
})
export default class CharacterEdit extends Vue {
  // data
  showSampleModal: boolean = false;
  // TODO Fetch from Firebase by $route.query.charId
  public CharData: CharData = {
    profile: {
      name: "あああ",
      avatarUrl: "",
      isDead: true
    }
  };

  // lifecycle hook
  public beforeCreate() {
    if (!this.$store.state.login) {
      // 未ログインの場合
      this.$router.push("/character");
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep h2 {
  margin-top: 5.6rem;
  font-size: 1.8rem;
  font-weight: 300;
  color: rgba($COLOR_MAIN, 0.5);
  svg {
    width: 1.6rem;
    margin-left: 0.6rem;
    vertical-align: text-top;
    path {
      fill: $COLOR_MAIN;
    }
  }
}
::v-deep .parameterTable {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  tr {
    height: 4rem;
  }
  th,
  td {
    text-align: center;
    box-sizing: border-box;
    font-weight: 600;
  }
  th {
    border: 0.2rem solid lighten($COLOR_BASE, 20%);
    font-size: 1.2rem;
    color: rgba($COLOR_MAIN, 0.6);
    &:empty {
      position: relative;
      &::after {
        @include beforeAfter;
        top: 0;
        left: 0;
        background: lighten($COLOR_BASE, 20%);
        clip-path: polygon(2% 0, 100% 98%, 98% 100%, 0 2%);
      }
    }
  }
  td {
    border: 0.1rem solid lighten($COLOR_BASE, 20%);
    font-size: 1.6rem;
  }
  input {
    max-width: calc(100% - 0.8rem);
    margin: 0.4rem;
    background: rgba($COLOR_MAIN, 0.1);
    text-align: center;
    line-height: 3.2rem;
    letter-spacing: 0.1em;
  }
}
::v-deep .rowBtns {
  display: flex;
  margin-top: 1.6rem;
  li + li {
    margin-left: 0.8rem;
  }
}
</style>
