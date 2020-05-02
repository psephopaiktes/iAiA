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
    moneyUnit: "円",
    weapons: [
      {
        name: "ナイフ",
        probability: 50,
        damage: "1D4",
        range: "近接",
        numberOfAttack: 1,
        numberOfBullets: 1,
        durability: 9,
        note: "護身用の一般的な小型のナイフ。スイス製。"
      }
    ],
    belongings: [
      {
        name: "スマホ",
        note: "ごく普通のiPhoneX。"
      }
    ]
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
