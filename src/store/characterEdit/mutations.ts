import { MutationTree } from "vuex";
import firebase from "firebase";
import CharacterEditState from "@/types/CharacterEditState";
import CharData from "@/types/CharData";
import Timestamp = firebase.firestore.Timestamp;

const mutations: MutationTree<CharacterEditState> = {
  setCharData: function(state, data: CharData) {
    state.charData = data;
  },

  setCharacterProfileName: function(state, name: string) {
    if (state.charData != null && state.charData.profile != null) {
      state.charData.profile.name = name;
    }
  },

  setCharacterProfileOccupation: function(state, s: string) {
    if (state.charData != null && state.charData.profile != null) {
      state.charData.profile.occupation = s;
    }
  },

  setCharacterProfileAge: function(state, num: number) {
    if (state.charData != null && state.charData.profile != null) {
      state.charData.profile.age = num;
    }
  },

  setCharacterProfileSex: function(state, s: string) {
    if (state.charData != null && state.charData.profile != null) {
      state.charData.profile.sex = s;
    }
  },

  setCharacterProfileHeightCentiMeter: function(state, num: number) {
    if (state.charData != null && state.charData.profile != null) {
      state.charData.profile.heightCentimeter = num;
    }
  },

  setCharacterProfileWeightKilogram: function(state, num: number) {
    if (state.charData != null && state.charData.profile != null) {
      state.charData.profile.weightKilogram = num;
    }
  },

  setCharacterUserId: function(state, s: string) {
    if (state.charData != null) {
      state.charData.userId = s;
    }
  },

  setCharacterCreateDate: function(state, t: Timestamp) {
    if (state.charData != null) {
      state.charData.createDate = t;
    }
  },

  setCharacterModifiedDate: function(state, t: Timestamp) {
    if (state.charData != null) {
      state.charData.modifiedDate = t;
    }
  },

  setCharacterAvatarUrl: function(state, url: string) {
    if (state.charData != null && state.charData.profile != null) {
      state.charData.profile.avatarUrl = url;
    }
  }
};

export default mutations;
