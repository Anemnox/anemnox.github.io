import React, { useEffect, useRef, useState } from 'react';

import './style.css';

type TypeWriterProps = {
  className: string | undefined;
  text: string;
  speed: number;
  callback: Function | undefined;
  isReversed: boolean | undefined;
};

const TypeWriter = (props: TypeWriterProps): JSX.Element => {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  let length = props.text.length;

  useEffect(() => {
    length = props.text.length;
    setIndex(0);
    indexRef.current = 0;
    const timer = setInterval(() => {
      if (indexRef.current < length) {
        setIndex(indexRef.current + 1);
        indexRef.current += 1;
      } else {
        props.callback?.();
        clearInterval(timer);
      }
    }, props.speed);
    return () => {
      clearInterval(timer);
    };
  }, [props]);

  return (
    <span className={'typewriter-span ' + props.className}>
      {props.isReversed
        ? props.text.substring(0, length - index)
        : props.text.substring(0, index)}
      <span className="cursor"></span>
    </span>
  );
};

export default TypeWriter;
