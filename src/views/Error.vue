<template>
  <div>
    <Nav />

    <main id="content">
      <h1>エラーが発生しました</h1>
      <p class="en">{{ errorCode }}</p>
      <ErrorArt />
      <router-link to="/" class="btn-theme">TOPへ</router-link>
      <a href="https://twitter.com/iAiAapp" target="_brank">
        お問い合わせ（Twitter）
      </a>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Nav from "@/components/Nav.vue";
import ErrorArt from "@/assets/error.vue";

@Component({
  components: {
    Nav,
    ErrorArt
  }
})
export default class Error extends Vue {
  // data
  errorCode: string = "404 PAGE NOT FOUND";

  // lifecycle hook
  public beforeCreate() {
    if (localStorage.errorCode) {
      this.errorCode = localStorage.errorCode;
      localStorage.removeItem("errorCode");
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/scss/common.scss";
#content {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 28px;
    letter-spacing: 0.1em;
  }
  p {
    margin-top: 8px;
    font-weight: bold;
    opacity: 0.5;
    letter-spacing: 0.05em;
  }
  svg {
    margin-top: 32px;
    max-width: 360px;
    height: auto;
    opacity: 0.8;
  }
  a {
    margin-top: 32px;
    max-width: 240px;
  }
}
</style>
