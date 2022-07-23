import React from "react";

import type Command from "../declarations/command";
import type TerminalInterface from "../declarations/terminalInterface";

import Help from "../outputComponents/Help";

export const help: Command = (terminal: TerminalInterface, args: string[] = []): boolean => {
  const history = {
    ...terminal.getUser(),
    ...{
      input: ["help", ...args].join(" "),
      output: <Help />
    }
  }
  terminal.addHistory(history);

  return true;
};

export default help;
