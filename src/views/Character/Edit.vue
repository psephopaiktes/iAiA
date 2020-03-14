<template lang="pug">
main#l-content

  CharacterEditHeader(:CharData="CharData")

  img(:src='CharData.iconUrl', alt='キャラクターアイコン')
  p: input(type='file', @change='updateImage($event.target, $store.state.user)')

  CharacterEditFooter

  //- CharacterEditSampleModal

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import firebase from "firebase";
import { storage, User } from "firebase";
import CharacterEditHeader from "@/components/Character/Edit/Header.vue";
import CharacterEditFooter from "@/components/Character/Edit/Footer.vue";
import CharacterEditSampleModal from "@/components/Character/Edit/SampleModal.vue";

@Component({
  components: {
    CharacterEditHeader,
    CharacterEditFooter,
    CharacterEditSampleModal
  }
})
export default class CharacterEdit extends Vue {
  // data
  // TODO Fetch from Firebase by charId
  // charId = this.$route.params.charId
  public CharData: any = {
    name: "AAA",
    iconUrl: "aaa",
    modifiedDate: "20190802",
    isDead: true
  };

  public updateImage(element: HTMLInputElement, user: User) {
    if (element.files == null || element.files.length == 0) {
      return;
    }
    const f = element.files[0];
    if (!f.type.startsWith("image/")) {
      window.alert("サポートされていない画像形式です");
      return;
    }
    if (f.size > 2097152) {
      window.alert("ファイルサイズが2MB以下の画像を選択してください)");
      return;
    }
    const storageRef = firebase.storage().ref();
    const ref = storageRef.child(this.storageReference(user.uid, f.name));
    ref
      .put(f)
      .catch(e => {
        window.alert("画像のアップロードに失敗しました");
        window.console.error(e);
      })
      .then(() => ref.getDownloadURL())
      .then(url => {
        this.CharData.iconUrl = url;
      })
      .catch(e => {
        window.alert("画像の更新に失敗しました");
        window.console.error(e);
      });
  }

  storageReference(uid: string, filename: string): string {
    return `characters/icons/${uid}/${filename}`;
  }

  // lifecycle hook
  public beforeCreate() {
    if (!this.$store.state.login) {
      // 未ログインの場合
      this.$router.push("/character");
    }
  }
}
</script>

<style scoped lang="scss"></style>
