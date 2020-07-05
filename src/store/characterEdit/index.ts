import { Module } from "vuex";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import CharacterEditState from "@/types/CharacterEditState";
import { RootState } from "@/types/RootState";

const state: CharacterEditState = {
  charData: {
    ability: {
      STR: 0,
      CON: 0,
      POW: 0,
      DEX: 0,
      APP: 0,
      SIZ: 0,
      INT: 0,
      EDU: 0
    },
    profile: {
      name: "",
      isDead: false,
      avatarUrl: "",
      occupation: "",
      backstory: "",
      heightCentimeter: null,
      age: null,
      weightKilogram: null,
      sex: "",
      nationality: "",
      money: null,
      moneyUnit: "",
      weapons: [{}],
      belongings: [{}]
    }
  }
};

export const characterEdit: Module<CharacterEditState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
