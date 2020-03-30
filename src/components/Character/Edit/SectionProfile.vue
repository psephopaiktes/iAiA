<template lang="pug">
section#profile
  h2 プロフィール

  label.avatar
    img(v-if="CharData.profile.avatarUrl" :src='CharData.profile.avatarUrl' alt='キャラクターアイコン')
    img(v-else src='/img/avatar.png' alt='キャラクターアイコン')
    p 変更
    input(type='file' @change='updateImage($event.target, $store.state.user)')

  label
    input(type='text' placeholder='探索 好太郎' autofocus='')
    span キャラクター名

  label
    input(type='text' placeholder='探偵')
    span 職業

  label
    input(type='number' placeholder='20')
    span 年齢

  label
    input(type='text' placeholder='男')
    span 性別

  label
    input(type='number' placeholder='170')
    span 身長

  label
    input(type='number' placeholder='65')
    span 体重

  label
    textarea(rows='2' placeholder='昼行灯だがいざというときには抜群の洞察力を魅せる探偵。元警察官。独身。')
    span 紹介・メモ

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import firebase from "firebase";
import { storage, User } from "firebase";

import CharData from "@/types/CharData";

@Component
export default class CharacterEditSectionProfile extends Vue {
  // props
  @Prop() CharData!: CharData;
  // method
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
        if (this.CharData.profile) {
          this.CharData.profile.avatarUrl = url;
        } else {
          throw "avatarUrl is nothing";
        }
      })
      .catch(e => {
        window.alert("画像の更新に失敗しました");
        window.console.error(e);
      });
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
  img {
    width: 100%;
    height: auto;
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
  height: 40px;
  margin-top: 28px;
  transition: 0.2s ease;
  input,
  textarea {
    position: absolute;
    width: 100%;
    height: 40px;
    top: 0;
    left: 0;
    padding: 8px 5px 0;
    background: none;
    border: none;
    border-bottom: 1px solid rgba(#fff, 0.5);
    border-radius: 4px 4px 0 0;
    font-size: 16px;
    line-height: 1.4;
    color: #fff;
    caret-color: $COLOR_THEME;
    transition: inherit;
    outline: none;
    resize: vertical;
  }
  textarea {
    padding-top: 12px;
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
    letter-spacing: 0.05em;
  }
  input:placeholder-shown + span,
  textarea:placeholder-shown + span {
    top: 12px;
    left: 4px;
    font-size: 16px;
  }
  input:not(:placeholder-shown) + span,
  input:focus + span,
  textarea:not(:placeholder-shown) + span,
  textarea:focus + span {
    top: -4px;
    left: 4px;
    font-size: 10px;
  }
  input:focus + span,
  textarea:focus + span {
    color: $COLOR_THEME;
  }
}
</style>
