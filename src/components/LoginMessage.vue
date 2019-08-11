<template><div>
  <p>ログインが必要です。</p>
  <router-link to="/login">ログイン</router-link>
</div></template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class LoginMessage extends Vue {}
</script>


<style scoped lang="scss">
@import "@/scss/common.scss";
p,a{
  font-size: 20px;
  margin-top: 32px;
  line-height: 2;
  opacity: .9;
}
</style>
