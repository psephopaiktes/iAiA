<template><main>

  <header>
    <button @click="$router.go(-1)">←</button>
    <h1><slot name="title"></slot></h1>
    <!-- <LogoShort /> -->
  </header>

  <slot></slot>

</main></template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import LogoShort from '@/assets/logo-short.vue';

@Component({
  components: {
    LogoShort,
  },
})
export default class PageView extends Vue {
}
</script>

<style scoped lang="scss">
@import "@/scss/common.scss";

main{
  width: 100vw;
  min-height: 100vh;
  position: fixed;
  top: 0; left: 0;
  background: $COLOR_MAIN;
  color: $COLOR_BASE;
}
</style>
