<template lang="pug">
footer
  button.c-btn.u-mt96(@click="$emit('updateCharacter')")
    | 保存
    <img svg-inline src="@/assets/icon/check.svg" />
  button.c-btn.--caution.u-mt12(v-if="$route.query.charId" @click='')
    | 削除
    <img svg-inline src="@/assets/icon/delete.svg" />
  #pointFooter
    | 職業Pあと
    output {{ '320' }}
    span /
    | 興味Pあと
    output {{ '16' }}

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class CharacterEditFooter extends Vue {}
</script>

<style scoped lang="scss">
#pointFooter {
  width: calc(100% - 0.8rem);
  height: 4.8rem;
  line-height: 4.8rem;
  border-radius: 0.4rem;
  position: fixed;
  left: 0.4rem;
  bottom: #{$L-NAV_SM_H + 0.4rem};
  background: rgba($COLOR_MAIN, 0.1);
  backdrop-filter: blur(8px);
  color: $COLOR_MAIN;
  text-align: center;
  @include min($SM) {
    bottom: 0.4rem;
  }
  @include min($MD) {
    width: calc(100% - #{0.8rem + $L-NAV_LG_W});
    left: #{$L-NAV_LG_W + 0.4rem};
  }
  output {
    font-size: 1.5em;
    font-weight: 700;
    color: $COLOR_THEME;
    margin-left: 0.2em;
  }
  span {
    font-size: 1.5em;
    margin: 0 0.4em;
    font-weight: 100;
    opacity: 0.5;
  }
}
</style>
