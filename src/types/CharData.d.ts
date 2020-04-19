import firebase from "firebase";
import Timestamp = firebase.firestore.Timestamp;

export default interface CharData {
  id?: string; // キャラクターの一意のID
  user?: string; // キャラクター作成者
  createDate?: Timestamp; // 作成日
  modifiedDate?: Timestamp; // 更新日 キャラ一覧の並び替えなどで使う用
  userId?: string;
  profile?: {
    // キャラクターの基本情報
    name?: string; // 名前
    isDead?: boolean; // 生存状況
    avatarUrl?: string; // プロフィール画像のURL
    occupation?: string; // 職業
    backstory?: string; // 説明文 改行を許容
    heightCentimeter?: number; // 身長
    age?: number; // 年齢
    weightKilogram?: number; // 体重
    sex?: string; // 性別
    nationality?: string; // 国籍
    money?: number; // 所持金
    moneyUnit?: string; // 所持金の単位
    weapons?: [
      // 武器
      {
        name?: string; // 名称
        probability?: number; // 成功率
        damage?: string; // ダメージ
        range?: string; // 射程
        numberOfAttack?: number; // 攻撃回数
        numberOfBullets?: number; // 装弾数
        durability?: number; // 耐久力
        note?: string; // 備考
      }
    ];
    belongings?: [
      // 所持品
      {
        name?: string; // 名称
        note?: string; // 備考
      }
    ];
  };
  ability?: {
    // キャラクターの能力値 ダイスで決まるもの
    STR?: number;
    CON?: number;
    POW?: number;
    DEX?: number;
    APP?: number;
    SIZ?: number;
    INT?: number;
    EDU?: number;
  };
  status?: {
    // キャラクターの状態 stausから導き出されるもの
    HP?: number;
    MAXHP?: number;
    MP?: number;
    MAXMP?: number;
    idea?: number;
    luck?: number;
    knowledge?: number;
    occupationSkillPoint?: number; // 職業技能ポイント
    interestSkillPoint?: number; // 趣味技能ポイント
    damageBonus?: number[]; // ダメージボーナス
    // SAN関連いろいろ追加予定
  };
  skill?: {
    // キャラクターの技能
    combat?: {
      // 戦闘技能
      avoid?: number; // 回避
    };
  };
}
