<template>
  <div>
    <Nav />

    <main id="content">
      <h1 class="headline">Room</h1>
      <p>
        <b>現在開発中の機能です。</b><br />更新情報は<a
          href="https://twitter.com/iAiAapp"
          target="_brank"
          >Twitter</a
        >にてお知らせします。
      </p>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Nav from "@/components/Nav.vue";

@Component({
  components: {
    Nav
  }
})
export default class Room extends Vue {}
</script>

<style scoped lang="scss">
@import "@/scss/common.scss";
p {
  font-size: 20px;
  margin-top: 32px;
  line-height: 2;
  opacity: 0.9;
}
</style>
