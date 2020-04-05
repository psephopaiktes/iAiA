<template lang="pug">
main#l-content

  h1.c-headline CHARCTER SHEETs

  #logout(v-if='!$store.state.login')
    p ログインが必要です
    router-link.c-btn.u-mt24(to="/login")
      | ログイン <img svg-inline src="@/assets/icon/play_arrow.svg" />

  #login(v-else='')
    nav.charConntrol
      label.charConntrol__search
        <img svg-inline src="@/assets/icon/search.svg" />
        input(type='search' maxlength='' pattern='' placeholder='キャラクター名で検索')
      label.charConntrol__sort
        <img svg-inline src="@/assets/icon/swap_vert.svg" />
        select
          option(value='') 名前順
          option(value='') レアリティ順
    p.charEmpty(v-if='CharDataList.length < 1') キャラクターがいません
    // TODO 読み込みUI
    ul.charList(v-else)
      li.c-panel(
        v-for='(item, i) in CharDataList'
        :key='i'
        :class="{ dead: item.profile.isDead }"
      )
        router-link(:to="'/character/detail?charId=' + item.id")
          img(:src="item.profile.avatarUrl" alt="アイコン画像")
          h3 {{ item.profile.name }}
          p {{ item.profile.occupation }}
          time {{ item.modifiedDate.toLocaleDateString() }}
    router-link.c-btn#l-floatButton(to='/character/edit')
      | 新規作成
      <img svg-inline src="@/assets/icon/add.svg" />

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import CharData from "@/types/CharData";
import firebaseApp from "@/firebase";

@Component
export default class Character extends Vue {
  // data
  public CharDataList: CharData[] = [];

  // lifecycle hook
  public beforeCreate() {
    const db = firebaseApp.firestore();
    const charactersRef = db.collection("characters");
    const snapshot = charactersRef.where("userRef", "==",
      db.collection("users").doc(this.$store.state.user.uid)).get();
    snapshot.then(querySnapshot => {
      querySnapshot.forEach(doc => {
        if (doc.exists) {
          const data = doc.data();
          if (data == undefined) {
            throw new Error("undefined data: " + this.$route.params.charID);
          }
          this.CharDataList.push({
            id: data.id,
            modifiedDate: data.modifiedDate,
            profile: {
              name: data.name,
              avatarUrl: data.avatarUrl,
              isDead: data.isDead
            }
          });
        }
      })
    }).catch(err => {
        window.console.error(err);
      });
  }
}
</script>

<style scoped lang="scss">
#logout {
  margin-top: 20vh;
  text-align: center;
}
.charConntrol {
  margin-top: 4.8rem;
  &__search,
  &__sort {
    display: inline-block;
    height: 3.2rem;
    opacity: 0.8;
    path {
      fill: $COLOR_MAIN;
    }
  }
  &__search {
    overflow: hidden;
    width: calc(100% - 4rem);
    position: relative;
    border: 0.1rem solid $COLOR_MAIN;
    border-radius: 0.2rem;
    svg {
      margin: 0.4rem;
    }
    input {
      position: absolute;
      width: 100%;
      padding: 0 0.8rem 0 4rem;
      top: 0;
      right: 0;
      line-height: 3.2rem;
      caret-color: $COLOR_THEME;
      outline: none;
      &::placeholder {
        font-weight: lighter;
      }
      &:focus {
        background: rgba($COLOR_MAIN, 0.05);
      }
    }
  }
  &__sort {
    margin-left: 0.8rem;
    width: 3.2rem;
    position: relative;
    select {
      opacity: 0;
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      vertical-align: top;
    }
    svg {
      width: 3.2rem;
      height: 3.2rem;
    }
  }
}

.charEmpty {
  margin-top: 16vh;
  opacity: 0.5;
  font-weight: 400;
  text-align: center;
}
.charList {
  margin-top: 3.2rem;
  padding-bottom: 6.4rem;
  @include min($SM) {
    padding-bottom: 0;
  }
  li {
    overflow: hidden;
    margin-top: 1.2rem;
    position: relative;
    &.dead::after {
      content: "死亡";
      position: absolute;
      width: 6.4rem;
      height: 1.2rem;
      line-height: 1.2rem;
      text-align: center;
      top: 1.2rem;
      left: -1.2rem;
      transform: rotate(-45deg);
      font-size: 1rem;
      background: #000;
      color: rgba($COLOR_MAIN, 0.5);
      letter-spacing: 0.1em;
    }
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
  }
  time {
    position: absolute;
    bottom: 1.2rem;
    right: 1.2rem;
  }
}
</style>
