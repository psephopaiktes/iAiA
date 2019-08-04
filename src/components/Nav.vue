<template><nav>
  <ul>
    <li><router-link to="/app/dice">DICE</router-link></li>
    <li><router-link to="/app/character">CHARACTER</router-link></li>
    <li><router-link to="/app/room">ROOM</router-link></li>
    <li><router-link to="/app/other">OTHER</router-link></li>
  </ul>
</nav></template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Nav extends Vue {}
</script>

<style scoped lang="scss">
@import "@/scss/common.scss";
</style>
