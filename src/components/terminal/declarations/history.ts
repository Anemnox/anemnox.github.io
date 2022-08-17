import type UserData from "./userData";
import type TerminalOutput from "./TerminalOutput";

export default interface History extends UserData {
  input: string,
  output: TerminalOutput | null
}
