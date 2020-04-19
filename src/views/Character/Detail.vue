<template lang="pug">
main#l-content

  CharacterDetailHeader(:CharData="CharData")

  CharacterDetailSectionProfile(:CharData="CharData")
  CharacterDetailSectionStatus(:CharData="CharData")
  CharacterDetailSectionAbility(:CharData="CharData")
  CharacterDetailSectionStatus2(:CharData="CharData")
  CharacterDetailSectionSkill(:CharData="CharData")
  //- CharacterDetailSectionWeapons(:CharData="CharData")
  //- CharacterDetailSectionBelongings(:CharData="CharData")

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import firebaseApp from "../../firebase";

import CharData from "@/types/CharData";

import CharacterDetailHeader from "@/components/Character/Detail/Header.vue";
import CharacterDetailSectionProfile from "@/components/Character/Detail/SectionProfile.vue";
import CharacterDetailSectionStatus from "@/components/Character/Detail/SectionStatus.vue";
import CharacterDetailSectionStatus2 from "@/components/Character/Detail/SectionStatus2.vue";
import CharacterDetailSectionAbility from "@/components/Character/Detail/SectionAbility.vue";
import CharacterDetailSectionSkill from "@/components/Character/Detail/SectionSkill.vue";
import CharacterDetailSectionWeapons from "@/components/Character/Detail/SectionWeapons.vue";
import CharacterDetailSectionBelongings from "@/components/Character/Detail/SectionBelongings.vue";

// set Dummy data
import Hirata from "@/lib/samplaChars/hirata";

@Component({
  components: {
    CharacterDetailHeader,
    CharacterDetailSectionProfile,
    CharacterDetailSectionStatus,
    CharacterDetailSectionStatus2,
    CharacterDetailSectionAbility,
    CharacterDetailSectionSkill,
    CharacterDetailSectionWeapons,
    CharacterDetailSectionBelongings
  }
})
export default class CharacterDetail extends Vue {
  // set Dummy data
  // public CharData: CharData = { profile: {} };
  public CharData: CharData = Hirata;

  // lifecycle hook
  public beforeMount() {
    if (!this.$route.query.charId || !this.$store.state.login) {
      // URLにID指定がない or 未ログインの場合
      this.$router.push("/character");
    }
    // const db = firebaseApp.firestore();
    // const charactersRef = db.collection("characters");
    // charactersRef
    //   .doc(this.$route.params.charId)
    //   .get()
    //   .then(doc => {
    //     if (doc.exists) {
    //       const data = doc.data();
    //       if (data == undefined) {
    //         throw new Error("undefined data: " + this.$route.params.charId);
    //       }
    //       this.CharData = {
    //         userRef: db.collection("users").doc(this.$store.state.user.uid),
    //         modifiedDate: data.modifiedDate,
    //         profile: {
    //           name: data.name,
    //           avatarUrl: data.avatarUrl,
    //           isDead: data.isDead
    //         }
    //       };
    //     }
    //   })
    //   .catch(err => {
    //     window.console.error(err);
    //   });
  }
}
</script>

<style scoped lang="scss"></style>
