import { animated, config, useSpring } from '@react-spring/web';
import React from 'react';

import EarthModel from './EarthModel';

const EarthEaseIn = ({ styleName, height, width }) => {
  const [flip, set] = React.useState(false);

  let { right } = useSpring({
    to: { right: 0 },
    from: { right: 700 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  });

  return (
    <animated.div className="earth-container" style={{ right }}>
      <EarthModel styleName={styleName} height={height} width={width} />
    </animated.div>
  );
};

export default EarthEaseIn;
