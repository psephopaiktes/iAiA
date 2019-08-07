<template><main>

  <header>←</header>
  <slot></slot>

</main></template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class PageView extends Vue {}
</script>

<style scoped lang="scss">
@import "@/scss/common.scss";
</style>
