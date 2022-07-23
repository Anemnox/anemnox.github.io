import React from "react";

import type Command from "../declarations/command";
import type TerminalInterface from "../declarations/terminalInterface";

import Banner from "../outputComponents/Banner";

export const banner: Command = (terminal: TerminalInterface, args: string[] = []): boolean => {
  const history = {
    ...terminal.getUser(),
    ...{
      input: ["banner", ...args].join(" "),
      output: <Banner />
    }
  }
  terminal.addHistory(history);

  return true;
};

export default banner;
