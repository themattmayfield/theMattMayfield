'use client';

import { useState, useEffect, useRef } from 'react';
import { animated, useTransition, config } from 'react-spring';

const WORDS = [
  { id: 0, text: 'Hero of the Web' },
  { id: 1, text: 'Digital Architect' },
  { id: 2, text: 'React Connoisseur' },
];

const wordsFading = () => {
  const [index, setIndex] = useState(0);
  const wordsTransition = useTransition(WORDS[index], {
    key: (item: { id: number; text: string }) => item.id,
    config: config.stiff,
    delay: 450,
    from: {
      opacity: 0,
      transform: 'translateY(10px)',
      position: 'absolute',
      top: 0,
      left: 0,
      margin: 0,
    },
    enter: {
      opacity: 1,
      transform: 'translateY(0px)',
    },
    leave: {
      opacity: 0,
      transform: 'translateY(-10px)',
    },
  });

  const _isMounted = useRef(true);

  useEffect(() => {
    if (_isMounted.current) {
      void setInterval(
        () => setIndex((current) => (current + 1) % WORDS.length),
        2500
      );
    }

    return () => {
      _isMounted.current = false;
    };
  }, []);

  return wordsTransition(({ item, props, key }: any) => (
    <animated.span key={key} style={props}>
      {item?.text || ''}
    </animated.span>
  ));
};

export default wordsFading;
