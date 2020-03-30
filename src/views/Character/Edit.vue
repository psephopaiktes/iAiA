<template lang="pug">
main#l-content

  CharacterEditHeader(:CharData="CharData")

  CharacterEditSectionProfile(:CharData="CharData")
  CharacterEditSectionCharacteristics


  CharacterEditFooter

  //- CharacterEditSampleModal

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import firebase from "firebase";
import { storage, User } from "firebase";

import CharData from "@/types/CharData";

import CharacterEditHeader from "@/components/Character/Edit/Header.vue";
import CharacterEditFooter from "@/components/Character/Edit/Footer.vue";
import CharacterEditSectionProfile from "@/components/Character/Edit/SectionProfile.vue";
import CharacterEditSectionCharacteristics from "@/components/Character/Edit/SectionCharacteristics.vue";
import CharacterEditSampleModal from "@/components/Character/Edit/SampleModal.vue";

@Component({
  components: {
    CharacterEditHeader,
    CharacterEditFooter,
    CharacterEditSectionProfile,
    CharacterEditSectionCharacteristics,
    CharacterEditSampleModal
  }
})
export default class CharacterEdit extends Vue {
  // data
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
  letter-spacing: 0.05em;
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
</style>
