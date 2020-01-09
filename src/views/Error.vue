<template lang="pug">
main#l-content
  h1 {{ errorCode }}
  <img svg-inline src="@/assets/error.svg" />
  p.u-mt8 エラーが発生しました
  router-link.c-btn.u-mt48(to='/dice')
    | 再読み込み
    <img svg-inline src="@/assets/icon/refresh.svg" />
  a.c-link.u-mt24(href='https://twitter.com/iAiAapp', target='_brank')
    | お問い合わせ（Twitter）
    <img svg-inline src="@/assets/icon/open_in_new.svg" />

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
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
main {
  min-height: 100vh;
  padding-bottom: $L-NAV_SM_H !important;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    font-weight: 800;
    font-size: 4rem;
    letter-spacing: 0.1em;
  }
  > svg {
    opacity: 0.9;
  }
}
</style>
