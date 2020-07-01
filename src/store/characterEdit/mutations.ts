import { MutationTree } from "vuex";
import firebase from "firebase";
import CharacterEditState from "@/types/CharacterEditState";
import CharData from "@/types/CharData";
import { Ability } from "@/types/CharData";
import Timestamp = firebase.firestore.Timestamp;

const mutations: MutationTree<CharacterEditState> = {
  setCharData: function(state, data: CharData) {
    if (data.ability === undefined) {
      const ability: Ability = {
        STR: 0,
        CON: 0,
        POW: 0,
        DEX: 0,
        APP: 0,
        SIZ: 0,
        INT: 0,
        EDU: 0
      };
      data.ability = ability;
    }
    state.charData = data;
  },

  resetCharData: function(state) {
    state.charData = {
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
        weapons: [{}],
        belongings: [{}]
      }
    };
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

  setCharacterProfileBackstory: function(state, s: string) {
    if (state.charData != null && state.charData.profile != null) {
      state.charData.profile.backstory = s;
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
  },

  setCharacterAbilityStrength: function(state, input: number) {
    if (state.charData != null && state.charData.ability != null) {
      state.charData.ability.STR = input;
    }
  },

  setCharacterAbilityConstitution: function(state, input: number) {
    if (state.charData != null && state.charData.ability != null) {
      state.charData.ability.CON = input;
    }
  },
  setCharacterAbilityPower: function(state, input: number) {
    if (state.charData != null && state.charData.ability != null) {
      state.charData.ability.POW = input;
    }
  },
  setCharacterAbilityDexterity: function(state, input: number) {
    if (state.charData != null && state.charData.ability != null) {
      state.charData.ability.DEX = input;
    }
  },
  setCharacterAbilityAppearance: function(state, input: number) {
    if (state.charData != null && state.charData.ability != null) {
      state.charData.ability.APP = input;
    }
  },
  setCharacterAbilitySize: function(state, input: number) {
    if (state.charData != null && state.charData.ability != null) {
      state.charData.ability.SIZ = input;
    }
  },
  setCharacterAbilityIntelligence: function(state, input: number) {
    if (state.charData != null && state.charData.ability != null) {
      state.charData.ability.INT = input;
    }
  },
  setCharacterAbilityEducation: function(state, input: number) {
    if (state.charData != null && state.charData.ability != null) {
      state.charData.ability.EDU = input;
    }
  }
};

export default mutations;
