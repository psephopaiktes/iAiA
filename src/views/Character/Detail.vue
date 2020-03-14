<template lang="pug">
main#l-content

  router-link.c-pageHeader__close(to='/character')
    <img svg-inline src="@/assets/icon/close.svg" />

  h1.u-mt56 {{ CharData.name }}
  img(:src="CharData.iconUrl" alt="アイコン画像")

  router-link.c-btn.u-mt56(to='/character/edit?charId='XXXXX') 編集

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import firebaseApp from "../../firebase";
import firebase from "firebase";
import DocumentReference = firebase.firestore.DocumentReference;

interface Character {
  userRef: DocumentReference;
  name: string;
  iconUrl: URL;
  modifiedDate: Date;
  isDead: boolean;
}

@Component
export default class CharacterDetail extends Vue {
  CharData: Character | undefined;

  // lifecycle hook
  public beforeCreate() {
    if (!this.$store.state.login) {
      // 未ログインの場合
      this.$router.push("/character");
    }
    const db = firebaseApp.firestore();
    const charactersRef = db.collection("characters");
    charactersRef
      .doc(this.$route.params.charID)
      .get()
      .then(doc => {
        if (doc.exists) {
          const data = doc.data();
          if (data == undefined) {
            throw new Error("undefined data: "+this.$route.params.charID);
          }
          this.CharData = {
            userRef: db.collection("users").doc(this.$store.state.user.uid),
            name: data.name,
            iconUrl: data.iconUrl,
            modifiedDate: data.modifiedDate,
            isDead: data.isDead
          };
        }
      });
  }
}
</script>

<style scoped lang="scss"></style>
