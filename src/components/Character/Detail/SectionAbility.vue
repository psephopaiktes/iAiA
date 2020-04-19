<template lang="pug">
section#ability.c-panel
  .container
    <img svg-inline src="@/assets/radarchart.svg" />
    canvas#abillityChart(width='340' height='300')
    ul
      li STR <output>{{CharData.ability.STR}}</output>
      li CON <output>{{CharData.ability.CON}}</output>
      li SIZ <output>{{CharData.ability.SIZ}}</output>
      li INT <output>{{CharData.ability.INT}}</output>
      li POW <output>{{CharData.ability.POW}}</output>
      li DEX <output>{{CharData.ability.DEX}}</output>
      li APP <output>{{CharData.ability.APP}}</output>
      li EDU <output>{{CharData.ability.EDU}}</output>
  p: small ※ 内側の線は平均値 ※ 人間の最大値はEDUが21、他は18
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import firebase from "firebase";
import { storage, User } from "firebase";
import Chart from "chart.js";

import CharData from "@/types/CharData";

@Component
export default class CharacterDetailSectionAbility extends Vue {
  // props
  @Prop() CharData!: CharData;

  // lifecycle hook
  public mounted(): void {
    let abilityArray = [
      this.CharData.ability?.STR ? this.CharData.ability.STR : 0,
      this.CharData.ability?.CON ? this.CharData.ability.CON : 0,
      this.CharData.ability?.SIZ ? this.CharData.ability.SIZ : 0,
      this.CharData.ability?.INT ? this.CharData.ability.INT : 0,
      this.CharData.ability?.POW ? this.CharData.ability.POW : 0,
      this.CharData.ability?.DEX ? this.CharData.ability.DEX : 0,
      this.CharData.ability?.APP ? this.CharData.ability.APP : 0,
      this.CharData.ability?.EDU ? this.CharData.ability.EDU : 0
    ];
    const abillityChart = new Chart("abillityChart", {
      type: "radar",
      data: {
        labels: ["STR", "CON", "SIZ", "INT", "POW", "DEX", "APP", "EDU"],
        datasets: [
          {
            data: abilityArray,
            backgroundColor: "RGBA(0, 255, 238, 0.5)"
          }
        ]
      },
      options: {
        legend: { display: false },
        tooltips: { enabled: false },
        elements: {
          point: { radius: 0 },
          line: { borderWidth: 0 }
        },
        scale: {
          display: false,
          ticks: {
            min: 0,
            max: 18
          }
        }
      }
    });
  }
}
</script>

<style scoped lang="scss">
#ability {
  margin-top: 2.4rem;
  padding: 2rem;

  .container {
    margin: auto;
    max-width: 32rem;
    position: relative;
    svg {
      opacity: 0.5;
    }
    canvas {
      position: absolute;
      top: 0;
    }
    ul {
      letter-spacing: 0;
      font-size: 1rem;
      color: rgba($COLOR_MAIN, 0.6);
      output {
        font-size: 1.2em;
        color: rgba($COLOR_MAIN, 0.8);
      }
    }
    li {
      width: 5rem;
      height: 1.2rem;
      line-height: 1.2rem;
      text-align: center;
      position: absolute;
      &:nth-child(1) {
        bottom: 95%;
        left: calc(50% - 2.5rem);
      }
      &:nth-child(2) {
        left: 78%;
        bottom: 80%;
      }
      &:nth-child(3) {
        left: 88%;
        top: calc(50% - 0.6rem);
      }
      &:nth-child(4) {
        left: 78%;
        top: 78%;
      }
      &:nth-child(5) {
        top: 92%;
        left: calc(50% - 2.5rem);
      }
      &:nth-child(6) {
        right: 78%;
        top: 78%;
      }
      &:nth-child(7) {
        right: 88%;
        top: calc(50% - 0.6rem);
      }
      &:nth-child(8) {
        right: 78%;
        bottom: 80%;
      }
    }
  }

  p {
    text-align: right;
    font-size: 1rem;
    opacity: 0.6;
    margin: 1.6rem -0.8rem -0.8rem;
  }
}
</style>
