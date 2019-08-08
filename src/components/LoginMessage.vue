<template><div>
  <h2>ログインしてください</h2>
  <router-link to="/login">ログイン</router-link>
</div></template>

<style scoped lang="scss">
@import "@/scss/common.scss";
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class LoginMessage extends Vue {}
</script>