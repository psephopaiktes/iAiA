<template lang="pug">
main#l-content

  CharacterEditHeader(:CharData="CharData" @showSampleModal="showSampleModal=true")

  CharacterEditSectionProfile
  CharacterEditSectionAbility
  CharacterEditSectionStatus
  CharacterEditSectionSkill
  CharacterEditSectionWeapons
  CharacterEditSectionBelongings

  CharacterEditFooter(@updateCharacter="updateCharacter")

  CharacterEditSampleModal(v-if="showSampleModal" @closeSampleModal="showSampleModal=false")

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import CharacterEditHeader from "@/components/Character/Edit/Header.vue";
import CharacterEditFooter from "@/components/Character/Edit/Footer.vue";
import CharacterEditSectionProfile from "@/components/Character/Edit/SectionProfile.vue";
import CharacterEditSectionAbility from "@/components/Character/Edit/SectionAbility.vue";
import CharacterEditSectionStatus from "@/components/Character/Edit/SectionStatus.vue";
import CharacterEditSectionSkill from "@/components/Character/Edit/SectionSkill.vue";
import CharacterEditSectionWeapons from "@/components/Character/Edit/SectionWeapons.vue";
import CharacterEditSectionBelongings from "@/components/Character/Edit/SectionBelongings.vue";
import CharacterEditSampleModal from "@/components/Character/Edit/SampleModal.vue";
import firebase from "@/firebase";
import CharData from "@/types/CharData";
import Timestamp = firebase.firestore.Timestamp;

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
  db = firebase.firestore();
  public CharData: CharData = {
    userId: localStorage.uid,
    profile: {
      name: "",
      isDead: false,
      avatarUrl: "",
      occupation: "",
      backstory: "",
      heightCentimeter: null,
      age: null,
      weightKilogram: null,
      sex: "",
      nationality: "",
      money: null,
      moneyUnit: ""
    }
  };

  setCharData(cd: CharData) {
    this.CharData = cd;
    this.CharData.userId = localStorage.uid;
  }

  createCharacter() {
    const now = Timestamp.now();
    this.$store.commit("setCharacterModifiedDate", now);
    this.$store.commit("setCharacterCreateDate", now);
    this.db
      .collection("characters")
      .add(this.$store.state.editedCharacter)
      .then(res => window.console.log("successfully written, id=", res.id))
      .catch(error => window.console.error("error writing document: ", error));
  }

  updateCharacter() {
    this.$store.commit("setCharacterUserId", this.$store.state.user.uid);
    const charId = this.$route.query.charId as string;
    if (charId == undefined) {
      return this.createCharacter();
    }
    const now = Timestamp.now();
    this.$store.commit("setCharacterModifiedDate", now);
    this.db
      .collection("characters")
      .doc(charId)
      .set(this.$store.state.editedCharacter, { merge: true })
      .then(() => window.console.log("successfully written"))
      .catch(error => window.console.error("error writing document: ", error));
  }

  // lifecycle hook
  public beforeCreate() {
    if (!this.$store.state.login) {
      // 未ログインの場合
      this.$router.push("/character");
    }
  }

  public beforeMount() {
    const charId = this.$route.query.charId as string;
    if (charId == undefined) {
      return;
    }
    this.db
      .collection("characters")
      .doc(charId)
      .get()
      .then(snapshot => {
        const data = snapshot.data();
        if (data == undefined) {
          throw Error("undefined data. charId=" + charId);
        }
        this.setCharData(data as CharData);
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
  svg {
    width: 1.6rem;
    margin-left: 0.6rem;
    vertical-align: text-top;
    path {
      fill: $COLOR_MAIN;
    }
  }
}

::v-deep .rowBtns {
  display: flex;
  margin-top: 1.6rem;
  li + li {
    margin-left: 0.8rem;
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
    width: calc(100% - 0.8rem);
    margin: 0.4rem;
    background: rgba($COLOR_MAIN, 0.1);
    text-align: center;
    line-height: 3.2rem;
    letter-spacing: 0.1em;
  }
}

::v-deep .parameterTableScrollContainer {
  width: 100vw;
  overflow: scroll;
  margin: 0 -#{$PADDING_SM};
  padding: 0 $PADDING_SM;
  @include min($SM) {
    margin: 0 -#{$PADDING_MD};
    padding: 0 $PADDING_MD;
  }
  @include min($MD) {
    width: calc(100vw - #{$L-NAV_LG_W});
    margin: 0 -#{$PADDING_LG};
    padding: 0 $PADDING_LG;
  }

  .parameterTable {
    // ブラウザバグでpadding-rightが効かないための対応
    position: relative;
    &::after {
      position: absolute;
      content: "";
      top: 0;
      left: 100%;
      height: 1px;
      width: $PADDING_SM;
      @include min($SM) {
        width: $PADDING_MD;
      }
      @include min($MD) {
        width: $PADDING_LG;
      }
    }
  }
}

::v-deep .rightGradationCover {
  position: relative;
  &::before,
  &::after {
    @include beforeAfter;
    top: 0;
    width: $PADDING_SM;
    z-index: 1;
    @include min($SM) {
      width: $PADDING_MD;
    }
    @include min($MD) {
      width: $PADDING_LG;
    }
  }
  &::before {
    right: 100%;
    background-image: linear-gradient(
      to left,
      rgba($COLOR_BASE, 0),
      $COLOR_BASE 40%
    );
  }
  &::after {
    left: 100%;
    background-image: linear-gradient(
      to right,
      rgba($COLOR_BASE, 0),
      $COLOR_BASE 40%
    );
  }
}
</style>
