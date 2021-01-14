import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export const useMobileSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return width <= 640;
};
