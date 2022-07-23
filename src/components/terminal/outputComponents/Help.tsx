import React, { useState, useEffect } from "react";

import TerminalOutput from "../declarations/TerminalOutput";

import * as commands from "../commands";

const commandsStyle = {
  display: "flex",
  paddingLeft: "5%",
  width: "95%",
  flexWrap: "wrap" as "wrap",
  gap: "0px 30px"
}

const spanStyle = {
  width: "100px"
}
const Help = (): TerminalOutput => {
  const listOfCommands = Object.keys(commands);

  const renderCommands = () => {
    return listOfCommands.map((command) => {
      return (<span style={spanStyle}>{command}</span>)
    });
  }

  return (
    <div>
      Available commands:
      <div style={commandsStyle}>
        {renderCommands()}
      </div>
    </div>
  );
}

export default Help;
