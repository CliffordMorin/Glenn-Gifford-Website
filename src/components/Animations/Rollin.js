import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

const RollIn = ({ text, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  const animation = useSpring({
    transform: isVisible ? "translate3d(0, 0, 0)" : "translate3d(0, 100%, 0)",
    opacity: isVisible ? 1 : 0,
    config: { mass: 1, tension: 280, friction: 28 },
    delay,
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return <animated.div style={animation}>{text}</animated.div>;
};

export default RollIn;
