<template lang="pug">
aside#l-nav: nav
  h1
    <img svg-inline src="@/assets/logo-default.svg" />
    | iAiA
  ul
    li: router-link(to='/dice')
      <img svg-inline src="@/assets/icon/tab/dice-fil.svg" />
      <img svg-inline src="@/assets/icon/tab/dice-line.svg" />
      p DICE
    li: router-link(to='/character')
      <img svg-inline src="@/assets/icon/tab/char-fil.svg" />
      <img svg-inline src="@/assets/icon/tab/char-line.svg" />
      p CHAR
    li: router-link(to='/room')
      <img svg-inline src="@/assets/icon/tab/room-fil.svg" />
      <img svg-inline src="@/assets/icon/tab/room-line.svg" />
      p ROOM
    li: router-link(to='/other')
      <img svg-inline src="@/assets/icon/tab/other-fil.svg" />
      <img svg-inline src="@/assets/icon/tab/other-line.svg" />
      p OTHER
  p: small © iAiA 2019
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class GlobalNav extends Vue {}
</script>

<style scoped lang="scss">
aside {
  background: lighten($COLOR_BASE, 4%);
}
nav {
  height: 100%;
  @include min($MD) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  h1 {
    display: none;
    @include min($MD) {
      display: block;
      position: relative;
      width: 7.2rem;
      height: 2.4rem;
      @include textHidden;
      svg {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
      * {
        fill: $COLOR_MAIN;
      }
    }
  }
  ul {
    display: flex;
    justify-content: center;
    @include min($MD) {
      margin-top: 4rem;
      flex-direction: column;
    }
    li {
      margin: 0 0.4rem;
      @include min($MD) {
        margin-top: 2rem;
      }
    }
    a {
      display: block;
      width: 7.2rem;
      height: $L-NAV_SM_H;
      text-align: center;
      @include min($SM) {
        position: relative;
        width: 10rem;
        height: $L-NAV_MD_H;
      }
      @include min($MD) {
        width: 12rem;
        height: 4rem;
      }
      @include transition(#{color, fill, opacity}) {
        * {
          color: $COLOR_THEME;
          fill: $COLOR_THEME;
          opacity: 1;
          transition: inherit;
        }
      }
    }
    svg:first-of-type {
      display: none;
      margin-top: 0.8rem;
    }
    svg:last-of-type {
      margin-top: 1.6rem;
    }
    svg:first-of-type,
    svg:last-of-type {
      width: 2.4rem;
      height: 2.4rem;
      @include min($SM) {
        position: absolute;
        margin: 0;
        top: ($L-NAV_MD_H - 2.4rem) / 2;
        left: 1rem;
      }
      @include min($MD) {
        left: 1.6rem;
        top: (4rem - 2.4rem) / 2;
      }
    }
    p {
      font-size: 1rem;
      letter-spacing: 0.1em;
      line-height: 1;
      color: rgba($COLOR_MAIN, 0.4);
      display: none;
      @include min($SM) {
        display: block;
        line-height: $L-NAV_MD_H;
        font-size: 1.2rem;
        text-align: left;
        padding-left: 4rem;
      }
      @include min($MD) {
        line-height: 4rem;
        font-size: 1.4rem;
        padding-left: 5rem;
      }
    }
    .router-link-active {
      @include min($MD) {
        position: relative;
        &::before {
          @include beforeAfter;
          width: 0;
          height: 0;
          top: calc(50% - 0.5rem);
          border: solid;
          border-width: 0.5rem 0.8rem;
          border-color: transparent transparent transparent $COLOR_THEME;
        }
      }
      p {
        display: block;
        color: $COLOR_THEME;
      }
      svg:first-of-type {
        display: inline-block;
      }
      svg:last-of-type {
        display: none;
      }
    }
  }
  > p {
    display: none;
    @include min($MD) {
      display: block;
      margin-top: 6rem;
      font-weight: 500;
      font-size: 1rem;
      color: rgba($COLOR_MAIN, 0.4);
    }
  }
}
</style>
