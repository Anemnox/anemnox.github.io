import React, { useState, useRef, useEffect } from "react";
import type UserData from "./declarations/userData";
import type History from "./declarations/history";
import type Command from "./declarations/command";
import type TerminalInterface from "./declarations/terminalInterface";

import TextOutput from "./outputComponents/TextOutput";
import Prompt from "./Prompt";
import CommandInput from "./CommandInput";

import * as commands from "./commands";
import error from "./commands/error";

import "./terminalstyle.css";

const userDat: UserData = {
  user: "guest",
  hostname: "anemnox.github.io",
  dir: ""
};

const fullStyle = {
  left: "1%",
  top: "2vh",
  width: "97%",
  height: "96vh"
}

const halfStyle = {
  left: "20%",
  top: "20vh",
  width: "60%",
  height: "48vh"
}

const Terminal = (): JSX.Element => {
  const inputRef: React.RefObject<HTMLInputElement> = useRef(null);

  const [history, setHistory]: [History[], Function] = useState([]);
  const [isRunningCommand, setRunningCommand]: [boolean, Function] = useState(false);
  const [isFullScreen, setFullScreen]: [boolean, Function] = useState(false);

  const terminalInterface: TerminalInterface = {
    addHistory: (output: History) => {
      setHistory([...history, output]);
    },
    setHistory: setHistory as ((hist: History[]) => void),
    getHistory: () => {
      return history;
    },
    getUser: () => {
      return userDat;
    },
    clear: () => {
      setHistory([]);
    }
  }

  const handleClick = () => {
    inputRef.current && inputRef.current.focus()
  }

  const toggleFullScreen = () => {
    setFullScreen(!isFullScreen);
  }

  const runCommand = async (command: string, args: string[]) => {
    setRunningCommand(true);

    try {
      (commands[command as keyof typeof commands] as Command)(terminalInterface, args);
    } catch (err) {
      console.log(commands["time"](terminalInterface, args));
      terminalInterface.addHistory({
        ...terminalInterface.getUser(),
        ...{
          input: [command, ...args].join(' '),
          output: command ?
            <TextOutput
              text={"Error: keyword " + command + " not recognized!"}
            /> : null
        }
      });
    }
    setRunningCommand(false);
  }

  const renderInput = (): JSX.Element | null => {
    if (!isRunningCommand) {
      return (
        <CommandInput
          userData={userDat}
          handleInput={runCommand}
          inputRef={inputRef}
        />
      );
    }
    return null;
  }

  useEffect(() => {
    commands["banner"](terminalInterface, []);
  }, []);

  return (
    <div
      className="terminal"
      onClick={handleClick}
      style={isFullScreen ? fullStyle : halfStyle}
    >
      <div className="terminal-head" onClick={toggleFullScreen}>
        Terminal
        <span className="toggleButton">
          {isFullScreen ? "<" : ">"}
        </span>
      </div>
      <div className="terminal-body">
        {renderTerminalHistory(history)}
        {renderInput()}
      </div>
    </div>
  );
}

const renderTerminalHistory = (history: History[]): JSX.Element[] => {
  return (
    history.map((element: History) => {
      return (
        <div>
          <Prompt userData={element} />
          <span>{element.input}</span>
          {element.output}
        </div>
      );
    })
  );
}

export default Terminal;
