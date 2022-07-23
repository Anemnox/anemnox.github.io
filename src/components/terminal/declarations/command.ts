import type TerminalInterface from "./terminalInterface";

type Command = ((terminal: TerminalInterface, args: string[]) => boolean);

export default Command
