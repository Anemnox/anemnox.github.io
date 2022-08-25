import type Command from '../declarations/command';
import type TerminalInterface from '../declarations/terminalInterface';

export const error: Command = (
  terminal: TerminalInterface,
  args: string[] = [],
): boolean => {
  return true;
};

export default error;
