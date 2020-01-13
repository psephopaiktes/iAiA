<template lang="pug">
main#l-content

  h1.c-headline ROOM

  #message
    p 現在開発中の機能です
    p: a.c-link(href="https://twitter.com/iAiAapp" target="_brank")
      | 更新情報 (Twitter)
      <img svg-inline src="@/assets/icon/open_in_new.svg" />

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Room extends Vue {}
</script>

<style scoped lang="scss">
#message {
  margin-top: 20vh;
  text-align: center;
  p + p {
    margin-top: 2.4rem;
  }
}
</style>
