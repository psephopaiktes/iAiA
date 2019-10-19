<template>
  <div>
    <Nav />

    <main id="content">
      <LoginMessage v-if="!$store.state.login" />
      <div v-else>
        <router-link to="/character">←</router-link>
        <h1 class="headline">{{ CharData.name }}</h1>
        <img :src="CharData.iconUrl" alt="キャラクターアイコン" />
        <p>
          <input
            type="file"
            @change="updateImage($event.target, $store.state.user)"
          />
        </p>
        <p>{{ $route.params.charId }}</p>
        <p>{{ CharData.idDead }}</p>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Nav from "@/components/Nav.vue";
import LoginMessage from "@/components/LoginMessage.vue";
import firebase from "firebase";
import { storage, User } from "firebase";

@Component({
  components: {
    Nav,
    LoginMessage
  }
})
export default class Character extends Vue {
  // data
  // TODO Fetch from Firebase by charId
  // CharId = this.$route.params.charId
  public CharData: any = {
    name: "AAA",
    iconUrl: "aaa",
    modifiedDate: "20190802",
    isDead: "aaa"
  };

  public updateImage(element: HTMLInputElement, user: User) {
    if (element.files == null || element.files.length == 0) {
      return;
    }
    const f = element.files[0];
    if (!f.type.startsWith("image/")) {
      window.alert("ファイル形式がサポート外です");
      return;
    }
    if (f.size > 1048576) {
      window.alert("ファイルサイズが大きすぎます(>1MB)");
      return;
    }
    const storageRef = firebase.storage().ref();

    window.console.log(this.storageReference(user.uid, f.name));
    const ref = storageRef.child(this.storageReference(user.uid, f.name));
    ref
      .put(f)
      .then(function(snapshot) {})
      .catch(function(e) {
        window.alert("画像のアップロードに失敗しました");
        window.console.log(e);
      });
  }

  storageReference(uid: string, filename: string): string {
    return `characters/icons/${uid}/${filename}`;
  }
}
</script>

<style scoped lang="scss">
@import "@/scss/common.scss";
</style>
