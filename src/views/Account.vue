<template>
  <PageView>
    <template #title
      >アカウント設定</template
    >

    <h2>表示名の変更</h2>
    <p>
      表示名を変更できます。表示名は、複数人プレイ時に他人に表示されるあなたのプレイヤー名です。
    </p>
    <p>
      現在の表示名: <b>{{ $store.state.user.displayName }}</b>
    </p>
    <input
      class="inputText mt-16"
      type="text"
      v-model="newName"
      placeholder="新しい表示名を入力してください。"
    />
    <button v-if="!newName" disabled>変更</button>
    <button v-else @click="updateName">変更</button>
    <p v-if="msg.updateName">{{ msg.updateName }}</p>

    <h2>アカウント削除</h2>
    <p>アカウントを削除します。</p>
    <p>
      アカウントを削除すると、キャラクター情報などこれまでのデータもすべて消去されます。元には戻せませんのでご注意ください。
    </p>
    <button @click="deleteAccount" class="caution">アカウントを削除する</button>
    <p v-if="msg.deleteAccount">{{ msg.deleteAccount }}</p>
  </PageView>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import firebaseApp from "@/firebase";
import PageView from "@/components/PageView.vue";

@Component({
  components: {
    PageView
  }
})
export default class Account extends Vue {
  // data
  public newName: string = "";
  public msg: any = {
    updateName: "",
    deleteAccount: ""
  };

  // lifecycle hook
  public beforeCreate() {
    if (!this.$store.state.login) {
      // 未ログインの場合
      this.$router.push("/login");
    }
  }

  // methods
  public updateName() {
    const $this = this;
    const user = firebaseApp.auth().currentUser;
    if (!user) {
      return;
    }
    user
      .updateProfile({
        displayName: $this.newName
      })
      .then(() => {
        $this.msg.updateName = "表示名を" + $this.newName + "に変更しました。";
      })
      .catch(error => {
        $this.msg.updateName = "エラーが発生しました。";
      });
  }
  public deleteAccount() {
    const $this = this;
    const confirm: boolean = window.confirm(
      "アカウントを削除すると元には戻せません。削除しますか？"
    );
    const user = firebaseApp.auth().currentUser;
    if (!user || !confirm) {
      return;
    }
    user
      .delete()
      .then(() => {
        // User deleted.
        $this.$store.commit("logout");
        firebaseApp
          .firestore()
          .collection("users")
          .doc(user.uid)
          .delete()
          .catch(error => {
            $this.msg.deleteAccount = "エラーが発生しました。";
            throw error;
          });
      })
      .catch(error => {
        // An error happened.
        $this.msg.deleteAccount = "エラーが発生しました。";
      });
  }
}
</script>
