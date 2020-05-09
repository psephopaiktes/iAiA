import { Module } from "vuex";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import CharacterEditState from "@/types/CharacterEditState";
import { RootState } from "@/types/RootState";

const state: CharacterEditState = {
  charData: {
    profile: { weapons: [{}], belongings: [{}] }
  }
};

export const characterEdit: Module<CharacterEditState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
