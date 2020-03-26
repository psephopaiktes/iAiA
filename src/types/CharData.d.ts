import firebase from "firebase";
import DocumentReference = firebase.firestore.DocumentReference;

export default interface CharData {
  id?: string; // キャラクターの一意のID
  user?: string; // キャラクター作成者
  createDate?: number; // 作成日 経過ミリ秒の文字列でいいのかな？
  modifiedDate?: string; // 更新日 キャラ一覧の並び替えなどで使う用
  userRef?: DocumentReference; //?
  profile?: {
    // キャラクターの基本情報
    name?: string; // 名前
    isDead?: boolean; // 生存状況
    avatarUrl?: string; // プロフィール画像のURL
    occupation?: string; // 職業
    backstory?: string; // 説明文 改行を許容
    height?: number; // 身長
    age?: number;
    weight?: number;
    sex?: string; // 性別 [male|female]
    nationality?: string; // 出身
    money?: number; // 所持金
    // weapon?: [ // 武器
    //   {},
    // ],
    // belongings?: [ // 所持品
    //   {},
    // ],
  };
  characteristics?: {
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
  secondAttribute?: {
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
