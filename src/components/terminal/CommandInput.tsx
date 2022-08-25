import React, { useState } from 'react';

import Prompt from './Prompt';
import Command from './declarations/command';
import UserData from './declarations/userData';
import TextOutput from './outputComponents/TextOutput';

type InputProps = {
  userData: UserData;
  handleInput: (command: string, args: string[]) => Promise<void>;
  inputRef: React.RefObject<HTMLInputElement>;
};

type InputObject = {
  command: string;
  commandArgs: string[];
};

const CommandInput = (props: InputProps): JSX.Element => {
  const [inputValue, setInputValue]: [string, Function] = useState('');

  const handleTextChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ): void => {
    switch (event.charCode) {
      case 13: // Enter Key
        const input = cleanInputText(inputValue);
        props.handleInput(input.command, input.commandArgs);
        setInputValue('');
        break;
      default:
        break;
    }
  };

  return (
    <div className="terminal-input-wrapper">
      <Prompt userData={props.userData} />
      <input
        className="terminal-input"
        ref={props.inputRef}
        value={inputValue}
        onChange={handleTextChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

const cleanInputText = (text: string): InputObject => {
  const [cmd, ...args] = text.split(' ');

  return {
    command: cmd,
    commandArgs: args,
  };
};

export default CommandInput;
