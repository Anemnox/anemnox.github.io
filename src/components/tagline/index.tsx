import React, { useRef, useState } from 'react';

import TypeWriter from '../typewriter';
import './style.css';

type AnimDat = {
  text: string;
  className: string;
  speed: number;
  delay: number;
  isReversed: boolean;
};

const INTERESTS: string[] = [
  `GEOGRAPHY`,
  `SOFTWARE DEVELOPMENT`,
  `DATA SCIENCE`,
  `MATH`,
  `GRAPHIC DESIGN`,
  `MUSIC`,
];

const TAGLINE_DATA: AnimDat[] = [
  {
    text: `Passionate about`,
    className: 'tagline-subtext',
    speed: 100,
    delay: 100,
    isReversed: false,
  },
  ...INTERESTS.reduce<AnimDat[]>((r, e) => {
    const typeIn: AnimDat = {
      text: e,
      className: 'tagline-maintext',
      speed: 100,
      delay: 1000,
      isReversed: false,
    };
    const typeOut: AnimDat = {
      text: e,
      className: 'tagline-maintext',
      speed: 100,
      delay: 1000,
      isReversed: true,
    };
    r.push(typeIn, typeOut);

    return r;
  }, []),
];

const TagLine = (): JSX.Element => {
  const [index, setIndex]: [number, Function] = useState(0);
  const indexRef = useRef(index);

  const updateTagLine = (delay: number): void => {
    let newIndex = indexRef.current + 1;
    if (newIndex >= TAGLINE_DATA.length) {
      newIndex = 1;
    }
    setTimeout(() => {
      setIndex(newIndex);
      indexRef.current = newIndex;
    }, delay);
  };

  const renderTagLine = (): JSX.Element => {
    const dat = TAGLINE_DATA[indexRef.current];
    const subtextDat = TAGLINE_DATA[0];

    if (index == 0) {
      return (
        <>
          <TypeWriter
            className={'tagline ' + dat.className}
            text={dat.text}
            speed={dat.speed}
            isReversed={dat.isReversed}
            callback={() => {
              updateTagLine(dat.delay);
            }}
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
          callback={() => {
            updateTagLine(dat.delay);
          }}
        />
      </>
    );
  };

  return <div className="tagline">{renderTagLine()}</div>;
};

export default TagLine;
