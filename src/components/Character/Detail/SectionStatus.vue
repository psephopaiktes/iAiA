<template lang="pug">
section#status

  ul

    li
      input(type='number' value="56")
      span / {{ 64 }}
      footer
        button(@click="") <img svg-inline src="@/assets/icon/remove.svg" />
        p SAN
        button(@click="") <img svg-inline src="@/assets/icon/add.svg" />

    li
      input(type='number' value="9")
      span / {{ 12 }}
      footer
        button(@click="") <img svg-inline src="@/assets/icon/remove.svg" />
        p HP
        button(@click="") <img svg-inline src="@/assets/icon/add.svg" />

    li
      input(type='number' value="18")
      span / {{ 18 }}
      footer
        button(@click="") <img svg-inline src="@/assets/icon/remove.svg" />
        p MP
        button(@click="") <img svg-inline src="@/assets/icon/add.svg" />

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import firebase from "firebase";
import { storage, User } from "firebase";

import CharData from "@/types/CharData";

@Component
export default class CharacterDetailSectionStatus extends Vue {
  // props
  @Prop() CharData!: CharData;
}
</script>

<style scoped lang="scss">
#status {
  margin-top: 3.2rem;
  line-height: 1;

  ul {
    display: flex;
    justify-content: space-between;
    @include min($SM) {
      justify-content: space-evenly;
    }
  }

  li {
    width: 30%;
    max-width: 12rem;
    input {
      width: 55%;
      padding-right: 0.5em;
      text-align: right;
      font-weight: 700;
      font-size: 2.4rem;
      color: $COLOR_THEME;
    }
    span {
      white-space: nowrap;
    }
  }

  li footer {
    border-top: 1px solid rgba($COLOR_MAIN, 0.2);
    position: relative;
    padding-top: 0.4rem;

    p {
      text-align: center;
      line-height: 2.4rem;
    }

    button {
      position: absolute;
      bottom: 0;
      width: 2.4rem;
      height: 2.4rem;
      * {
        fill: $COLOR_THEME;
      }
      svg {
        width: 1.6rem;
        height: 1.6rem;
      }

      &:first-child {
        left: 0;
      }
      &:last-child {
        right: 0;
      }
    }
  }
}
</style>
