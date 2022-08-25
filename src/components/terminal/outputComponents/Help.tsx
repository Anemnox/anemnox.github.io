import React, { useEffect, useState } from 'react';

import * as commands from '../commands';
import TerminalOutput from '../declarations/TerminalOutput';

const commandsStyle = {
  display: 'flex',
  paddingLeft: '5%',
  width: '95%',
  flexWrap: 'wrap' as 'wrap',
  gap: '0px 30px',
};

const spanStyle = {
  width: '100px',
};
const Help = (): TerminalOutput => {
  const listOfCommands = Object.keys(commands);

  const renderCommands = () => {
    return listOfCommands.map((command) => {
      return <span style={spanStyle}>{command}</span>;
    });
  };

  return (
    <div>
      Available commands:
      <div style={commandsStyle}>{renderCommands()}</div>
    </div>
  );
};

export default Help;
