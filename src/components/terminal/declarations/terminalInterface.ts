import type History from "./history";
import type UserData from "./userData";

type TerminalInterface = {
  addHistory: ((output: History) => void),
  setHistory: ((hist: History[]) => void),
  getHistory: (() => History[]),
  getUser: (() => UserData),
  clear: Function
}

export default TerminalInterface;
