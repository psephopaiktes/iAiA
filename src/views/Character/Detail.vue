<template lang="pug">
main#l-content

  CharacterDetailHeader(:CharData="CharData")

  CharacterDetailSectionProfile(:CharData="CharData")
  CharacterDetailSectionStatus(:CharData="CharData")
  CharacterDetailSectionAbility(:CharData="CharData")
  CharacterDetailSectionStatus2(:CharData="CharData")
  CharacterDetailSectionSkill(:CharData="CharData")
  CharacterDetailSectionWeapons(:CharData="CharData")
  CharacterDetailSectionBelongings(:CharData="CharData")

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import firebase from "@/firebase";
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
  public CharData: CharData = { profile: {} };
  // public CharData: CharData = Hirata;

  // lifecycle hook
  public beforeMount() {
    if (!this.$route.query.charId || !this.$store.state.login) {
      this.$router.push("/character");
    }

    const db = firebase.firestore();
    const charId = this.$route.query.charId as string;
    db.collection("characters")
      .doc(charId)
      .get()
      .then(doc => {
        if (!doc.exists) {
          throw new Error("does not exists. charId=" + charId);
        }
        const data = doc.data();
        if (data == undefined) {
          throw new Error("undefined data. charId=" + charId);
        }
        this.CharData = data as CharData;
        this.$store.commit("characterEdit/setCharData", data as CharData);
      })
      .catch(err => {
        window.console.error(err);
      });
  }
}
</script>

<style scoped lang="scss">
::v-deep h2 {
  margin-top: 5.6rem;
  font-size: 1.8rem;
  font-weight: 300;
  color: rgba($COLOR_MAIN, 0.5);
}
::v-deep .weaponItemList {
  text-align: center;
  > div {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1.2rem;
    background: rgba($COLOR_MAIN, 0.05);
    border-radius: 0.4rem;
    overflow: hidden;
    dt {
      display: block;
      width: 100%;
      padding: 0.8rem 1.6rem;
      background: rgba($COLOR_MAIN, 0.1);
    }
    dd {
      display: block;
      border-top: 0.2rem solid $COLOR_BASE;
    }
    dd:last-child {
      width: 100%;
      padding: 1.2rem 1.6rem;
      font-size: 1.2rem;
      font-weight: 400;
    }
  }
}
</style>
