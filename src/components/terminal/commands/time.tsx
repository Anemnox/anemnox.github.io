import React from 'react';

import type Command from '../declarations/command';
import type TerminalInterface from '../declarations/terminalInterface';
import TextClock from '../outputComponents/TextClock';

export const time: Command = (
  terminal: TerminalInterface,
  args: string[] = [],
): boolean => {
  const history = {
    ...terminal.getUser(),
    ...{
      input: ['time', ...args].join(' '),
      output: <TextClock />,
    },
  };
  terminal.addHistory(history);

  return true;
};

export default time;
