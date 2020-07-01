<template lang="pug">
section#profile
  h2 プロフィール

  label.avatar
    .loading(v-if="avatarLoading"): <img svg-inline src="@/assets/loader.svg" />
    img(v-else-if="this.$store.state.characterEdit.charData.profile.avatarUrl" :src='this.$store.state.characterEdit.charData.profile.avatarUrl' alt='キャラクターアイコン')
    img(v-else src='/img/avatar.png' alt='キャラクターアイコン')
    p(v-if="!avatarLoading") 変更
    input(type='file' @change='updateImage($event.target, $store.state.user)')

  label
    input(type='text' v-model='profileName' placeholder='探索 好太郎' autofocus='')
    span キャラクター名

  label
    input(type='text' v-model='profileOccupation' placeholder='探偵')
    span 職業

  label
    input(type='number' v-model='profileAge' placeholder='20')
    span 年齢

  label
    input(type='text' v-model='profileSex' placeholder='男')
    span 性別

  label
    input(type='number' v-model='profileHeightCentiMeter' placeholder='170')
    span 身長

  label
    input(type='number' v-model='profileWeightKilogram' placeholder='65')
    span 体重

  label
    textarea(v-model='profileBackstory' placeholder='昼行灯だがいざというときには抜群の洞察力を魅せる探偵。\n元警察官。独身。')
    span 紹介・メモ

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import firebase from "firebase";
import { User } from "firebase";

@Component
export default class CharacterEditSectionProfile extends Vue {
  // data
  textareaHeight: number = 80;
  avatarLoading: boolean = false;

  // computed

  // get getTextareaHeight(): number {
  //   return this.textareaHeight;
  // }

  // method

  // async updateTextareaHeight(event: any) {
  //   this.textareaHeight = 0;
  //   await this.$nextTick();
  //   this.textareaHeight = event.target.scrollHeight;
  // }

  public async updateImage(element: HTMLInputElement, user: User) {
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
    this.avatarLoading = true;
    const storageRef = firebase.storage().ref();
    const ref = storageRef.child(this.storageReference(user.uid, f.name));
    await ref
      .put(f)
      .catch(e => {
        window.alert("画像のアップロードに失敗しました");
        window.console.error(e);
      })
      .then(() => ref.getDownloadURL())
      .then(url => {
        if (this.$store.state.characterEdit.charData.profile) {
          this.$store.commit("characterEdit/setCharacterAvatarUrl", url);
        } else {
          throw "avatarUrl is nothing";
        }
      })
      .catch(e => {
        window.alert("画像の更新に失敗しました");
        window.console.error(e);
      });
    this.avatarLoading = false;
  }

  get profileName(): string {
    return this.$store.state.characterEdit.charData.profile.name || "";
  }
  set profileName(name: string) {
    this.$store.commit("characterEdit/setCharacterProfileName", name);
  }

  get profileOccupation(): string {
    return this.$store.state.characterEdit.charData.profile.occupation || "";
  }
  set profileOccupation(s: string) {
    this.$store.commit("characterEdit/setCharacterProfileOccupation", s);
  }

  get profileAge(): number {
    return this.$store.state.characterEdit.charData.profile.age || "";
  }
  set profileAge(num: number) {
    this.$store.commit("characterEdit/setCharacterProfileAge", num);
  }

  get profileSex(): string {
    return this.$store.state.characterEdit.charData.profile.sex || "";
  }
  set profileSex(s: string) {
    this.$store.commit("characterEdit/setCharacterProfileSex", s);
  }

  get profileHeightCentiMeter(): number {
    return (
      this.$store.state.characterEdit.charData.profile.heightCentimeter || ""
    );
  }
  set profileHeightCentiMeter(num: number) {
    this.$store.commit(
      "characterEdit/setCharacterProfileHeightCentiMeter",
      num
    );
  }

  get profileWeightKilogram(): number {
    return (
      this.$store.state.characterEdit.charData.profile.weightKilogram || ""
    );
  }
  set profileWeightKilogram(num: number) {
    this.$store.commit("characterEdit/setCharacterProfileWeightKilogram", num);
  }

  get profileBackstory(): string {
    return this.$store.state.characterEdit.charData.profile.backstory || "";
  }
  set profileBackstory(s: string) {
    this.$store.commit("characterEdit/setCharacterProfileBackstory", s);
  }

  storageReference(uid: string, filename: string): string {
    return `characters/icons/${uid}/${filename}`;
  }
}
</script>

<style scoped lang="scss">
.avatar {
  display: block;
  margin-top: 3.2rem;
  position: relative;
  border-radius: 50%;
  border: 2px solid $COLOR_THEME;
  overflow: hidden;
  width: 12.8rem;
  height: 12.8rem;
  background: rgba($COLOR_MAIN, 0.1);
  .loading {
    margin-top: 4.8rem;
    text-align: center;
    svg {
      width: 6rem;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2.4rem;
    font-size: 1.2rem;
    letter-spacing: 0.1em;
    line-height: 2.4rem;
    text-align: center;
    background: rgba($COLOR_BASE, 0.2);
    backdrop-filter: blur(2px);
  }
  input {
    display: none;
  }
}

label {
  position: relative;
  display: block;
  width: 100%;
  height: 4rem;
  margin-top: 3.2rem;
  transition: 0.2s ease;
  input,
  textarea {
    position: absolute;
    width: 100%;
    height: 4rem;
    top: 0;
    left: 0;
    padding: 0.8rem 0.5rem 0;
    background: none;
    border: none;
    border-bottom: 0.1rem solid rgba(#fff, 0.5);
    border-radius: 0.4rem 0.4rem 0 0;
    font-size: 1.6rem;
    line-height: 1.4;
    color: #fff;
    caret-color: $COLOR_THEME;
    transition: inherit;
    outline: none;
    resize: vertical;
    font-weight: normal;
  }
  textarea {
    padding-top: 1.2rem;
    overflow: hidden;
  }
  input:focus,
  textarea:focus {
    background: rgba(#fff, 0.1);
    border-color: $COLOR_THEME;
  }
  input::placeholder,
  textarea::placeholder {
    color: transparent;
    transition: inherit;
  }
  input:focus::placeholder,
  textarea:focus::placeholder {
    color: rgba(#fff, 0.2);
  }
  input + span,
  textarea + span {
    position: absolute;
    transition: inherit;
    line-height: 1;
    color: rgba(#fff, 0.5);
    font-weight: 500;
  }
  input:placeholder-shown + span,
  textarea:placeholder-shown + span {
    top: 1.2rem;
    left: 0.4rem;
    font-size: 1.6rem;
  }
  input:not(:placeholder-shown) + span,
  input:focus + span,
  textarea:not(:placeholder-shown) + span,
  textarea:focus + span {
    top: -0.4rem;
    left: 0.4rem;
    font-size: 1rem;
  }
  input:focus + span,
  textarea:focus + span {
    color: $COLOR_THEME;
  }
}
</style>
