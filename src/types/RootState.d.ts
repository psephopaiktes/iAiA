import { DiceItem } from "./DiceItem";

export interface RootState {
  login: boolean;
  loading: boolean;
  user: UserInfo | null;
  dice: {
    showModal: boolean;
    result: number;
    n: number;
    ub: number;
    add: number;
    log: DiceItem[];
  };
}

export interface UserInfo {
  displayName: string | null;
  email: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
  providerId: string;
  uid: string;
}
