"use client"
import { useEffect, useState } from 'react';

export const useWindowDimensions = () => {
    const hasWindow = typeof window !== 'undefined';

  const [width, setWidth] = useState(hasWindow ? window.innerWidth : 0);
  const [height, setHeight] = useState(hasWindow ? window.innerHeight : 0);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    if (hasWindow) {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

    return {width, height};
};
