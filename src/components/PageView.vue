<template>
  <main>
    <header>
      <button @click="$router.go(-1)">
        <i class="material-icons">arrow_back</i>
      </button>
      <h1><slot name="title"></slot></h1>
      <LogoShort class="logo" />
    </header>

    <div class="content">
      <slot></slot>
    </div>

    <footer>
      <p><small>© iAiA 2019</small></p>
    </footer>
  </main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import LogoShort from "@/assets/logo-short.vue";

@Component({
  components: {
    LogoShort
  }
})
export default class PageView extends Vue {}
</script>

<style scoped lang="scss">
@import "@/scss/common.scss";
main {
  width: 100vw;
  height: 100vh;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  background: $COLOR_MAIN;
  color: $COLOR_BASE;
  overflow: scroll;
}
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 64px;
  box-sizing: content-box;
  padding-bottom: env(safe-area-inset-top);
  box-shadow: 0 2px 24px rgba($COLOR_BASE, 0.1);
  background: $COLOR_MAIN;
  z-index: 9980;
  button {
    width: 44px;
    height: 44px;
    margin: 10px;
    color: $COLOR_THEME;
  }
  h1 {
    display: inline-block;
    font-size: 24px;
    color: rgba($COLOR_BASE, 0.8);
  }
  .logo {
    position: absolute;
    top: 16px;
    right: 16px;
    height: 32px;
    fill: rgba($COLOR_BASE, 0.2);
  }
}
.content {
  width: calc(100% - 64px);
  max-width: 40em;
  margin: 72+32px auto 0;
  h2 {
    margin-top: 48px;
    &::after {
      content: "";
      display: block;
      height: 1px;
      background: $COLOR_BASE;
    }
  }
  h3 {
    margin-top: 24px;
  }
  p {
    margin-top: 12px;
  }
  a {
    color: $COLOR_BASE;
  }
  ul {
    list-style: disc;
  }
  > ul,
  > ol {
    padding-left: 18px;
    > li {
      margin-top: 12px;
      ul,
      ol {
        padding-left: 24px;
        opacity: 0.6;
        li {
          margin-top: 6px;
          line-height: 1.4;
        }
      }
    }
  }
  button {
    display: block;
    margin-top: 16px;
    min-width: 80px;
    padding: 0 16px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    border-radius: 8px;
    color: $COLOR_BASE;
    background: rgba($COLOR_THEME, 0.6);
    font-weight: bold;
    font-size: 14px;
    &:hover,
    &:active {
      background: rgba($COLOR_THEME, 0.8);
    }
    &.caution {
      background: $COLOR_CAUTION;
    }
    &:disabled {
      opacity: 0.6;
      background: rgba($COLOR_BASE, 0.2);
    }
  }
}
footer {
  text-align: center;
  margin: 64px auto 48px;
  opacity: 0.6;
}
</style>
