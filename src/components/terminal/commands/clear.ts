import type Command from "../declarations/command";
import type TerminalInterface from "../declarations/terminalInterface";

export const clear: Command = (terminal: TerminalInterface, args: string[] = []): boolean => {
  terminal.clear();
  return true;
};

export default clear;
