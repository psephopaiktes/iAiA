<template lang="pug">
p.error
  <img svg-inline src="@/assets/icon/warning.svg" />
  | {{ description }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ErrorText extends Vue {
  // props
  @Prop() description!: string;
}
</script>

<style scoped lang="scss">
p.error {
  color: $COLOR_CAUTION;
  font-weight: 500;
  margin-top: 0.8rem;
  font-size: 1.4rem;
  svg {
    width: 1.6rem;
    vertical-align: text-bottom;
    margin: 0 0.4em;
  }
}
</style>
