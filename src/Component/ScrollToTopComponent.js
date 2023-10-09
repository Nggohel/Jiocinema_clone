import React, { useEffect, useRef } from "react";

const ScrollToTopComponent = () => {
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      // componentDidMount
      mounted.current = true;
    } else {
      // componentDidUpdate
      window.scrollTo(0, 0);
    }
  });

  return null;
};

export default ScrollToTopComponent;
