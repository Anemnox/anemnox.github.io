import React, { useState, useEffect, useRef } from "react";

import "./style.css";

type TypeWriterProps = {
  className: string | undefined,
  text: string,
  speed: number
}

const TypeWriter = (props: TypeWriterProps): JSX.Element => {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  const length = props.text.length;

  useEffect(() => {
    const timer = setInterval(() => {
      if(index < length - 1) {
        setIndex(indexRef.current + 1);
        indexRef.current += 1;
      } else {
        clearInterval(timer);
      }
    }, props.speed);
    return (() => {
      clearInterval(timer);
    });
  }, []);

  return (
    <div className={"typewriter " + props.className}>
      <span>
        {props.text.substring(0, index)}
        <span className="cursor"></span>
      </span>
    </div>
  );
}

export default TypeWriter;
