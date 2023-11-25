import { useState, useEffect } from 'react';

function getCurrentWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

// // USAGE:
// const Component = () => {
//   const { height, width } = useWindowDimensions();
//   return ( <div>  width: {width} ~ height: {height}  </div>   );
// }

export default function GetWindowDimensions() {
  const [WindowDimensions, setWindowDimensions] = useState(getCurrentWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getCurrentWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return WindowDimensions;
}
