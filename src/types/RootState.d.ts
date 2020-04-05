import { User } from "firebase";

export interface RootState {
  login: boolean;
  loading: boolean;
  user?: User;
  dice: {
    showModal: boolean;
    result: number;
    n: number;
    ub: number;
    add: number;
    log: DiceItem[];
  };
}

export interface DiceItem {
  dice: string;
  date: string;
}
