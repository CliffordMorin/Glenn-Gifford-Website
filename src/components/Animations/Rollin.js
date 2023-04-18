import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

const RollIn = ({ text, delay = 200 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.5, // trigger animation when 50% of the element is in view
    triggerOnce: true, // only trigger animation once
  });

  const animation = useSpring({
    from: { transform: "translate3d(-100%, 0, 0)", opacity: 0 },
    to: {
      transform: isVisible ? "translate3d(0, 0, 0)" : "translate3d(0, 0, 0) ",
      opacity: isVisible ? 1 : 0,
    },
    config: { mass: 1, tension: 100, friction: 10 },
    delay,
  });

  if (inView && !isVisible) {
    setIsVisible(true);
  }

  return (
    <animated.div
      ref={ref}
      style={{ display: "inline-block", whiteSpace: "pre" }}
    >
      {text.split("").map((char, index) => (
        <animated.span key={index} style={animation}>
          {char}
        </animated.span>
      ))}
    </animated.div>
  );
};

export default RollIn;
