import * as commands from '../commands';

const commandExists = (command: string): boolean => {
  const list = Object.keys(commands);

  return list.indexOf(command.split(' ')[0]) !== -1;
};

export default commandExists;
