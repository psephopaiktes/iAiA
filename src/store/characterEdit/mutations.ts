import { MutationTree } from "vuex";
import firebase from "firebase";
import CharacterEditState from "@/types/CharacterEditState";
import { defaultCharData } from "@/store/characterEdit";
import CharData from "@/types/CharData";
import Timestamp = firebase.firestore.Timestamp;

function fillAbilityDelta(data: CharData | null): CharData {
  if (data == null) {
    return defaultCharData;
  } else if (data.abilityDelta === undefined) {
    data.abilityDelta = {
      STR: 0,
      CON: 0,
      POW: 0,
      DEX: 0,
      APP: 0,
      SIZ: 0,
      INT: 0,
      EDU: 0
    };
    return data;
  }
  return data;
}

const mutations: MutationTree<CharacterEditState> = {
  setCharData: function(state, data: CharData) {
    if (data.ability === undefined) {
      data.ability = defaultCharData.ability;
    }
    state.charData = fillAbilityDelta(data);
  },

  resetCharData: function(state) {
    state.charData = defaultCharData;
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
  },

  setCharacterAbilityDeltaStrength: function(state, input: number) {
    state.charData = fillAbilityDelta(state.charData);
    if (state.charData != null && state.charData.abilityDelta != null) {
      state.charData.abilityDelta.STR = input;
    }
  },
  setCharacterAbilityDeltaConstitution: function(state, input: number) {
    state.charData = fillAbilityDelta(state.charData);
    if (state.charData != null && state.charData.abilityDelta != null) {
      state.charData.abilityDelta.CON = input;
    }
  },
  setCharacterAbilityDeltaPower: function(state, input: number) {
    state.charData = fillAbilityDelta(state.charData);
    if (state.charData != null && state.charData.abilityDelta != null) {
      state.charData.abilityDelta.POW = input;
    }
  },
  setCharacterAbilityDeltaDexterity: function(state, input: number) {
    state.charData = fillAbilityDelta(state.charData);
    if (state.charData != null && state.charData.abilityDelta != null) {
      state.charData.abilityDelta.DEX = input;
    }
  },
  setCharacterAbilityDeltaAppearance: function(state, input: number) {
    state.charData = fillAbilityDelta(state.charData);
    if (state.charData != null && state.charData.abilityDelta != null) {
      state.charData.abilityDelta.APP = input;
    }
  },
  setCharacterAbilityDeltaSize: function(state, input: number) {
    state.charData = fillAbilityDelta(state.charData);
    if (state.charData != null && state.charData.abilityDelta != null) {
      state.charData.abilityDelta.SIZ = input;
    }
  },
  setCharacterAbilityDeltaIntelligence: function(state, input: number) {
    state.charData = fillAbilityDelta(state.charData);
    if (state.charData != null && state.charData.abilityDelta != null) {
      state.charData.abilityDelta.INT = input;
    }
  },
  setCharacterAbilityDeltaEducation: function(state, input: number) {
    state.charData = fillAbilityDelta(state.charData);
    if (state.charData != null && state.charData.abilityDelta != null) {
      state.charData.abilityDelta.EDU = input;
    }
  }
};

export default mutations;
