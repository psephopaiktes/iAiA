<template lang="pug">
main#l-content

  router-link.c-pageHeader__close(to='/character')
    <img svg-inline src="@/assets/icon/close.svg" />

  h1.u-mt56 {{ CharData.profile.name }}
  img(:src="CharData.profile.avatarUrl" alt="アイコン画像")

  router-link.c-btn.u-mt56(:to="'/character/edit?charId=' + $route.query.charId")
    | 編集
    <img svg-inline src="@/assets/icon/edit.svg" />

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import firebaseApp from "../../firebase";

import CharData from "@/types/CharData";

@Component
export default class CharacterDetail extends Vue {
  public CharData: CharData = { profile: {} };

  // lifecycle hook
  public beforeMount() {
    if (!this.$route.query.charId || !this.$store.state.login) {
      // URLにID指定がない or 未ログインの場合
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
            throw new Error("undefined data: " + this.$route.params.charID);
          }
          this.CharData = {
            userRef: db.collection("users").doc(this.$store.state.user.uid),
            modifiedDate: data.modifiedDate,
            profile: {
              name: data.name,
              avatarUrl: data.avatarUrl,
              isDead: data.isDead
            }
          };
        }
      })
      .catch(err => {
        window.console.error(err);
      });
  }
}
</script>

<style scoped lang="scss"></style>
