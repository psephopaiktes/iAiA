import { DiceItem } from "./DiceItem";
import { UserInfo } from "@/types/UserInfo";
import CharData from "@/types/CharData";

export interface RootState {
  login: boolean;
  loading: boolean;
  user: UserInfo | null;
  editedCharacter: CharData | null;
  dice: {
    showModal: boolean;
    result: number;
    n: number;
    ub: number;
    add: number;
    log: DiceItem[];
  };
}
