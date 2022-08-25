import type TerminalOutput from './TerminalOutput';
import type UserData from './userData';

export default interface History extends UserData {
  input: string;
  output: TerminalOutput | null;
}
