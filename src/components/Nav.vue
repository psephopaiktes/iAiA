<template><nav>
  <h1 class="logo">
    <router-link to="/"><LogoShort /></router-link>
  </h1>
  <ul>
    <li><router-link to="/dice">
      <IconDice /><p>DICE</p>
    </router-link></li>
    <li><router-link to="/character">
      <IconCharacter /><p>CHAR</p>
    </router-link></li>
    <li><router-link to="/room">
      <IconRoom /><p>ROOM</p>
    </router-link></li>
    <li><router-link to="/other">
      <IconOther /><p>OTHER</p>
    </router-link></li>
  </ul>
  <p><small>© iAiA 2019</small></p>
</nav></template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import LogoShort from '@/assets/logo-short.vue';
import IconDice from '@/assets/icon/dice.vue';
import IconCharacter from '@/assets/icon/character.vue';
import IconRoom from '@/assets/icon/room.vue';
import IconOther from '@/assets/icon/other.vue';

@Component({
  components: {
    LogoShort,
    IconDice,
    IconCharacter,
    IconRoom,
    IconOther,
  },
})
export default class Nav extends Vue {}
</script>

<style scoped lang="scss">
@import "@/scss/common.scss";
nav{
  background: rgba($COLOR_BASE,.8);
  backdrop-filter: blur(24px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  left: 0; bottom: 0;
  width: 100%;
  height: 56px;
  box-sizing: content-box;
  padding-bottom: env(safe-area-inset-bottom);
  @media (min-width: $WIDTH_SP){
    bottom: auto;
    top: 0;
    height: 72px;
    justify-content: flex-end;
    padding-top: env(safe-area-inset-top);
    padding-bottom: 0;
  }
  @media (min-width: $WIDTH_TAB){
    width: 240px;
    height: 100vh;
    justify-content: center;
    background: $COLOR_BASE;
    backdrop-filter: blur(0);
  }
  @media (min-width: $WIDTH_PC){
    width: 320px;
    height: 100vh;
  }
  >p{
    display: none;
    position: absolute;
    bottom: 12px;
    color: rgba($COLOR_MAIN,.1);
    @media (min-width: $WIDTH_TAB){
      display: block;
    }
  }
}

.logo{
  display: none;
  width: 64px;
  margin-top: -10vh;
  @media (min-width: $WIDTH_TAB){
    display: block;
  }
  svg{
    fill: $COLOR_THEME;
  }
}

ul{
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;
  @media (min-width: $WIDTH_SP){
    width: calc(100% - 64px);
    max-width: 45em;
  }
  @media (min-width: $WIDTH_TAB){
    flex-direction: column;
    align-items: center;
    margin-top: 10vh;
  }
}
li{
  width: 80px;
  height: 56px;
  @media (min-width: $WIDTH_SP){
    width: 25vw;
    max-width: 240px;
    height: 56px;
  }
  @media (min-width: $WIDTH_TAB){
    width: 80px;
  }
}
li a{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-decoration: none;
  transition: .2s ease-out;
  opacity: .2;
  width: 100%;
  height: 100%;
  svg{
    fill: $COLOR_MAIN;
    width: 24px;
    height: 24px;
    fill: $COLOR_MAIN,.4;
    transition: inherit;
  }
  p{
    display: none;
    font-size: 9px;
  }
  &:hover{
    svg{ fill: $COLOR_THEME; }
    p{ color: $COLOR_THEME; }
  }
  &.router-link-active{
    opacity: 1;
    font-weight: bold;
    svg{
      transform: scale(1.1);
      fill: $COLOR_THEME;
    }
    p{
      display: block;
      color: $COLOR_THEME;
    }
  }
  @media (min-width: $WIDTH_SP){
    flex-direction: row;
    &.router-link-active{
      border-bottom: 2px solid $COLOR_THEME;
    }
    p{
      color: $COLOR_MAIN;
      display: block;
      margin-left: 8px;
      font-size: 14px;
    }
  }
  @media (min-width: $WIDTH_TAB){
    justify-content: left;
    &.router-link-active{
      border-bottom: none;
    }
    p{
      display: block;
      margin-left: 8px;
    }
    &.router-link-active{
      color: $COLOR_THEME;
    }
  }
}
</style>
