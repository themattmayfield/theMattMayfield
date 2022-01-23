import React, { useState, useEffect } from "react";
import { animated, useTransition, config } from "react-spring";

const WORDS = [
  { id: 0, text: "Hero of the Web" },
  { id: 1, text: "Digital Architect" },
  { id: 2, text: "React Connoisseur" },
];

const wordsFading = () => {
  // Subtitle keywords loop
  const [index, setIndex] = useState(0);
  const wordsTransition = useTransition(WORDS[index], (span) => span.id, {
    config: config.stiff,
    delay: 450,
    duration: 100,
    from: {
      opacity: 0,
      transform: "translateY(10px)",
      position: "absolute",
      top: 0,
      left: 0,
      margin: 0,
    },
    enter: {
      opacity: 1,
      transform: "translateY(0px)",
    },
    leave: {
      opacity: 0,
      transform: "translateY(-10px)",
    },
  });

  useEffect(
    () =>
      void setInterval(
        () => setIndex((current) => (current + 1) % WORDS.length),
        2500
      ),
    []
  );

  return wordsTransition.map(({ item, props, key }) => (
    <animated.span key={key} style={props}>
      {item.text}
    </animated.span>
  ));
};

export default wordsFading;
