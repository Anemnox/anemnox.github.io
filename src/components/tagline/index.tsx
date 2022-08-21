import React, { useState, useRef } from "react";

import TypeWriter from "../typewriter";

import "./style.css";

type AnimDat = {
  text: string,
  className: string,
  speed: number,
  delay: number,
  isReversed: boolean
}

const INTERESTS: string[] = [
    `SOFTWARE DEVELOPMENT`,
    `DATA SCIENCE`,
    `MATH`,
    `GRAPHIC DESIGN`,
    `MUSIC`
]

const TAGLINE_DATA: AnimDat[] = [
  {
    text: `Passionate about`,
    className: "tagline-subtext",
    speed: 100,
    delay: 100,
    isReversed: false
  },
  ...INTERESTS.reduce((r, e) => {
    r.push(
        {
        text: e,
        className: "tagline-maintext",
        speed: 100,
        delay: 1000,
        isReversed: false
      },
      {
        text: e,
        className: "tagline-maintext",
        speed: 100,
        delay: 1000,
        isReversed: true
      }
    );
    return r;
  }, [])
]

const TagLine = (): JSX.Element => {
  const [index, setIndex]: [number, Function] = useState(0);
  const indexRef = useRef(index);

  const updateTagLine = (delay) => {
    let newIndex = indexRef.current + 1;
    if(newIndex >= TAGLINE_DATA.length) {
      newIndex = 1;
    }
    setTimeout(() => {
      setIndex(newIndex);
      indexRef.current = newIndex;
    }, delay);
  }

  const renderTagLine = (): JSX.ELement => {
    const dat = TAGLINE_DATA[indexRef.current];
    const subtextDat = TAGLINE_DATA[0];

    if (index == 0) {
      return (
        <>
          <TypeWriter
            className={"tagline " + dat.className}
            text={dat.text}
            speed={dat.speed}
            isReversed={dat.isReversed}
            callback={() => {updateTagLine(dat.delay)}}
            />
        </>
      );
    }

    return (
      <>
        <span className={subtextDat.className}>{subtextDat.text}</span>
        <br />
        <TypeWriter
          className={dat.className}
          text={dat.text}
          speed={dat.speed}
          isReversed={dat.isReversed}
          callback={() => {updateTagLine(dat.delay)}}
          />
      </>
    );
  }

  return (
    <div className="tagline">
      {renderTagLine()}
    </div>
  );
}

export default TagLine;
