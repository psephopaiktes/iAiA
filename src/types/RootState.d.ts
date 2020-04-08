import { User } from "firebase";
import { DiceItem } from "./DiceItem";

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
