<template>
  <PageView>
    <template #title>
      iAiAを共有
    </template>

    <ul>
      <li>
        <a
          href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fiaia.app&text=iAiA%20TRPGサポーター&via=iAiAapp&hashtags=#TRPG,#クトゥルフTRPG,#クトゥルフ神話TRPG,#CoC&related=iAiAapp"
          target="_brank"
          >Twitter</a
        >
      </li>
      <li>
        <a
          href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fiaia.app"
          target="_brank"
          >Facebook</a
        >
      </li>
      <li>
        <a
          href="https://social-plugins.line.me/lineit/share?url=https%3A%2F%2Fiaia.app"
          target="_brank"
          >LINE</a
        >
      </li>
      <li>
        <a
          href="https://b.hatena.ne.jp/add?mode=confirm&url=https%3A%2F%2Fiaia.app&title=iAiA"
          target="_brank"
          >はてブ</a
        >
      </li>
    </ul>
  </PageView>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PageView from "@/components/PageView.vue";

@Component({
  components: {
    PageView
  }
})
export default class Share extends Vue {}
</script>

<style scoped lang="scss">
@import "@/scss/common.scss";
</style>
