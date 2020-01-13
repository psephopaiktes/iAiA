<template lang="pug">
main#l-content

  router-link.c-pageHeader__close(to='/character')
    <img svg-inline src="@/assets/icon/close.svg" />

  h1.u-mt56 {{ CharData.name }}
  img(:src="CharData.iconUrl" alt="アイコン画像")

  router-link.c-btn.u-mt56(to='/character/edit?id=XXXXX') 編集
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CharacterDetail extends Vue {
  // data
  // TODO Fetch from Firebase by charId
  // CharId = this.$route.params.charId
  public CharData: any = {
    name: "AAA",
    iconUrl:
      "https://pbs.twimg.com/profile_images/919519162287849472/RuH3Vk9H_400x400.jpg",
    modifiedDate: "20190802",
    isDead: "aaa"
  };

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
