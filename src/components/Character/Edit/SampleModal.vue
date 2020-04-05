<template lang="pug">
section#l-modal

  .c-scrim(@click="$emit('closeSampleModal')")

  .c-modal
    h2 サンプルキャラから作成
      <img svg-inline src="@/assets/icon/help.svg" @click='help' />

    ul.charList
      li.c-panel(
        v-for='(item, i) in SampleCharList'
        :key='i'
      )
        a
          img(:src="item.profile.avatarUrl" alt="アイコン画像")
          h3 {{ item.profile.name }}
          p {{ item.profile.sex }}
          p {{ item.profile.age }}歳
          p {{ item.profile.occupation }}

    button.c-btn.--secondary.u-mt32(@click="$emit('closeSampleModal')")
      | 閉じる
      <img svg-inline src="@/assets/icon/close.svg" />

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import firebase from "firebase";
import { storage, User } from "firebase";

@Component
export default class CharacterEditSampleModal extends Vue {
  // data
  public SampleCharList: any = [
    {
      id: "aaa",
      profile: {
        name: "平田 アキラ",
        avatarUrl:
          "https://pbs.twimg.com/profile_images/919519162287849472/RuH3Vk9H_400x400.jpg",
        occupation: "探偵",
        age: "24",
        sex: "男性"
      }
    },
    {
      id: "aaa",
      profile: {
        name: "平田 アキラ",
        avatarUrl:
          "https://pbs.twimg.com/profile_images/919519162287849472/RuH3Vk9H_400x400.jpg",
        occupation: "探偵",
        age: "24",
        sex: "男性"
      }
    }
  ];
  // method
  help(): void {
    window.alert(
      "0からキャラクターを作成するのが面倒な場合は、以下のサンプルキャラクターを選択してください。サンプルキャラクターをベースに能力を変更することも可能です。"
    );
  }
}
</script>

<style scoped lang="scss">
.c-modal {
  h2 {
    margin-top: 2.4rem;
    font-weight: 600;
    color: rgba($COLOR_MAIN, 0.8);
  }
}
.charList {
  margin-top: 3.2rem;
  li {
    margin-top: 1.2rem;
    position: relative;
  }
  a {
    display: block;
    padding: 1.2rem;
    padding-left: 6.4rem;
    height: 6.4rem;
    line-height: 1.2;
    letter-spacing: 0.1em;
    * {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  img {
    position: absolute;
    widows: 4rem;
    height: 4rem;
    top: 1.2rem;
    left: 1.2rem;
    border-radius: 0.2rem;
  }
  h3 {
    font-size: 1.8rem;
    margin-top: 0.1rem;
  }
  time,
  p {
    font-size: 1rem;
    color: rgba($COLOR_MAIN, 0.5);
    font-weight: lighter;
  }
  p {
    margin: 0.6rem 0.1rem;
    max-width: calc(100% - 8em);
    display: inline-block;
    & + p {
      &::before {
        content: "/";
        margin: 0 0.5em;
      }
    }
  }
  time {
    position: absolute;
    bottom: 1.2rem;
    right: 1.2rem;
  }
}
</style>
