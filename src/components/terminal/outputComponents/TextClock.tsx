import React, { useEffect, useState } from 'react';

import TerminalOutput from '../declarations/TerminalOutput';

const TextClock = (): TerminalOutput => {
  let intervalID: ReturnType<typeof setInterval> | undefined;
  const [time, setTime]: [string, Function] = useState(
    new Date().toLocaleString(),
  );

  const tick = () => {
    setTime(new Date().toLocaleString());
  };

  useEffect(() => {
    intervalID = setInterval(() => tick(), 1000);

    return function cleanUp() {
      clearInterval(intervalID);
    };
  }, []);

  return <>{time}</>;
};

export default TextClock;
