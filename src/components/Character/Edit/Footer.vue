<template lang="pug">
footer
  p aaa
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import firebase from "firebase";
import { storage, User } from "firebase";

@Component
export default class CharacterEditFooter extends Vue {}
</script>

<style scoped lang="scss"></style>
