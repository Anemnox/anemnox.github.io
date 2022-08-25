import { useEffect, useState } from 'react';

type InnerDimension = {
  innerWidth: number;
  innerHeight: number;
};

type Dimension = {
  width: number;
  height: number;
};

function getWindowDimensions(): Dimension {
  const { innerWidth: width, innerHeight: height }: InnerDimension = window;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions(): Dimension {
  const [windowDimensions, setWindowDimensions]: [Dimension, Function] =
    useState(getWindowDimensions());

  useEffect(() => {
    function handleResize(): void {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
