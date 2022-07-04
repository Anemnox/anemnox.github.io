import React from "react";

import { useSpring, animated, config } from "@react-spring/web";

const ScrollPositioner = ({ children }) => {
  const [flip, set] = React.useState(false)

  let scrollStyle = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  });
  let style = {

  }
  
  return (
    <animated.div style={{...style}}>
      {children}
    </animated.div>
  );
}


export default ScrollPositioner;
