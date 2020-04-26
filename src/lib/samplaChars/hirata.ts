import CharData from "../../types/CharData";

const Hirata: CharData = {
  profile: {
    name: "平田 章",
    isDead: true,
    avatarUrl:
      "https://pbs.twimg.com/profile_images/919519162287849472/RuH3Vk9H_400x400.jpg",
    occupation: "UIデザイナー",
    backstory:
      "動画&書籍サービスのUIデザイナーをしています。WEBフロントの実装もすきです。たまに料理と猫を自慢します。",
    heightCentimeter: 167,
    age: 27,
    weightKilogram: 68,
    sex: "男",
    nationality: "日本",
    money: 20,
    moneyUnit: "円"
  },
  ability: {
    STR: 12,
    CON: 12,
    POW: 12,
    DEX: 12,
    APP: 12,
    SIZ: 12,
    INT: 12,
    EDU: 12
  },
  status: {
    // HP: number,
    // MAXHP: number,
    // MP: number,
    // MAXMP: number,
    // idea: number,
    // luck: number,
    // knowledge: number,
    // occupationSkillPoint: number,職業技能ポイント
    // interestSkillPoint: number,趣味技能ポイント
    // damageBonus: number[],
  },
  skill: {
    //  キャラクターの技能
    //   combat: {
    //    戦闘技能
    //     avoid: number,回避
    //   },
  }
};

export default Hirata;
