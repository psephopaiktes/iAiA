import { DiceItem } from "./DiceItem";
import { UserInfo } from "@/types/UserInfo";

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
