<template><nav>
  <ul>
    <li><router-link to="/app/dice">
      <IconDice /><p>DICE</p>
    </router-link></li>
    <li><router-link to="/app/character">
      <IconCharacter /><p>CHAR</p>
    </router-link></li>
    <li><router-link to="/app/room">
      <IconRoom /><p>ROOM</p>
    </router-link></li>
    <li><router-link to="/app/other">
      <IconOther /><p>OTHER</p>
    </router-link></li>
  </ul>
</nav></template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import IconDice from '@/assets/icon/dice.vue';
import IconCharacter from '@/assets/icon/character.vue';
import IconRoom from '@/assets/icon/room.vue';
import IconOther from '@/assets/icon/other.vue';

@Component({
  components: {
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
  background: rgba($COLOR_MAIN,.05);
  position: fixed;
  left: 0; bottom: 0;
  width: 100%;
  height: 56px;
  padding-bottom: env(safe-area-inset-bottom);
  @media (min-width: $WIDTH_SP){
    bottom: auto;
    top: 0;
    padding-top: env(safe-area-inset-top);
    padding-bottom: 0;
  }
  @media (min-width: $WIDTH_TAB){
    width: 240px;
    height: 100vh;
  }
}
ul{
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;
  @media (min-width: $WIDTH_TAB){
    flex-direction: column;
    align-items: center;
  }
}
a{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 56px;
  text-decoration: none;
  transition: .2s ease-out;
  opacity: .4;
  svg{
    fill: $COLOR_MAIN;
    width: 24px;
    height: 24px;
    fill: $COLOR_MAIN,.4;
    transition: inherit;
  }
  p{
    display: none;
  }
  &:hover svg{
    fill: $COLOR_THEME;
  }
  &.router-link-active{
    opacity: 1;
    svg{
      width: 28px;
      height: 28px;
      fill: $COLOR_THEME;
    }
  }
  @media (min-width: $WIDTH_SP){
    width: 25vw;
    max-width: 240px;
    height: 56px;
    color: $COLOR_MAIN;
    p{
      display: block;
      margin-left: 8px;
    }
    &.router-link-active{
      color: $COLOR_THEME;
    }
  }
  @media (min-width: $WIDTH_TAB){
    width: 25vw;
    max-width: 240px;
    height: 56px;
    color: $COLOR_MAIN;
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
