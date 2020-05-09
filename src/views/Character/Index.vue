<template lang="pug">
main#l-content

  h1.c-headline CHARCTER SHEETs

  #logout(v-if='!$store.state.login')
    p ログインが必要です
    router-link.c-btn.u-mt24(to="/login")
      | ログイン <img svg-inline src="@/assets/icon/play_arrow.svg" />

  #login(v-else)

    nav.charConntrol
      label.charConntrol__search
        <img svg-inline src="@/assets/icon/search.svg" />
        input(type='search' v-model="charSearchWord" maxlength='' pattern='' placeholder='キャラクター名で検索')
      label.charConntrol__sort
        <img svg-inline src="@/assets/icon/swap_vert.svg" />
        select(v-model="charOrder")
          option(value='dateDescending' selected) 新しい順
          option(value='dateAscending') 古い順
          option(value='nameAscending') 名前順(あ→わ)
          option(value='nameDescending') 名前順(わ→あ)

    .charLoading(v-if='charDataLoading')
      <img svg-inline src="@/assets/loader.svg" />
    p.charEmpty(v-else-if='CharDataList.length < 1')
      | キャラクターがいません
    ul.charList(v-else)
      li.c-panel(
        v-for='(item, i) in getCharDataList'
        :key='i'
        :class="{ dead: item.profile.isDead }"
      )
        router-link(:to="'/character/detail?charId=' + item.id")
          img(:src="item.profile.avatarUrl" alt="アイコン画像")
          h3 {{ item.profile.name }}
          p {{ item.profile.occupation }}
          time {{ item.modifiedDate.toDate().toLocaleDateString() }}
    router-link.c-btn#l-floatButton(to='/character/edit')
      | 新規作成
      <img svg-inline src="@/assets/icon/add.svg" />

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import CharData from "@/types/CharData";
import firebase from "@/firebase";

@Component
export default class Character extends Vue {
  // data
  public charDataLoading: boolean = true;
  public CharDataList: CharData[] = [];
  public charSearchWord: string = "";
  public charOrder: string = "dateDescending";

  // computed
  get getCharDataList(): CharData[] {
    return (
      this.CharDataList
        // filter by inputed word
        .filter(CharData => {
          return (
            CharData.profile?.name?.normalize().indexOf(this.charSearchWord) !==
            -1
          );
        })
        // sort by selected order
        .sort((CharDataA, CharDataB) => {
          switch (this.charOrder) {
            case "nameAscending":
            case "nameDescending": {
              const nameA = CharDataA.profile?.name?.toUpperCase();
              const nameB = CharDataB.profile?.name?.toUpperCase();
              if (nameA && nameB && nameA < nameB) {
                return this.charOrder == "nameAscending" ? -1 : 1;
              } else {
                return this.charOrder == "nameAscending" ? 1 : -1;
              }
            }

            case "dateAscending":
            case "dateDescending": {
              const dateA = CharDataA.modifiedDate?.toDate();
              const dateB = CharDataB.modifiedDate?.toDate();
              if (dateA && dateB && dateA < dateB) {
                return this.charOrder == "dateAscending" ? -1 : 1;
              } else {
                return this.charOrder == "dateAscending" ? 1 : -1;
              }
            }

            default: {
              return 0;
            }
          }
        })
    );
  }

  // lifecycle hook
  public async beforeMount() {
    const db = firebase.firestore();
    if (!this.$store.state.login) {
      return;
    }
    const charactersRef = db.collection("characters");
    const characters = charactersRef
      .where("userId", "==", localStorage.uid)
      .get();
    const updateCharDataList = () => {
      return characters
        .then(snapshot => {
          snapshot.docs.forEach(doc => {
            if (doc.exists) {
              const data = doc.data();
              let charData = data as CharData;
              charData.id = doc.id;
              this.CharDataList.push(charData);
            }
          });
        })
        .catch(err => {
          window.console.error(err);
        });
    };
    await updateCharDataList();
    this.charDataLoading = false;
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

.charLoading {
  margin-top: 16vh;
  text-align: center;
  svg {
    width: 4rem;
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
