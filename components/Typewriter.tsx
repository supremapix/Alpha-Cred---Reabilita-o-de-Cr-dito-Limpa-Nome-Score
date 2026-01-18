
import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  words: string[];
  wait?: number;
  speed?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ words, wait = 3000, speed = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Fix: Replaced NodeJS.Timeout with any to resolve "Cannot find namespace 'NodeJS'" error
    let timer: any;

    const type = () => {
      const currentWord = words[wordIndex];
      const shouldDelete = isDeleting;

      setDisplayText(prev => {
        if (shouldDelete) {
          return currentWord.substring(0, prev.length - 1);
        } else {
          return currentWord.substring(0, prev.length + 1);
        }
      });

      let typeSpeed = speed;

      if (isDeleting) {
        typeSpeed /= 2;
      }

      if (!shouldDelete && displayText === currentWord) {
        typeSpeed = wait;
        setIsDeleting(true);
      } else if (shouldDelete && displayText === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        typeSpeed = 500;
      }

      timer = setTimeout(type, typeSpeed);
    };

    timer = setTimeout(type, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex, words, wait, speed]);

  return (
    <span className="border-r-4 border-blue-500 pr-1 animate-pulse">
      {displayText}
    </span>
  );
};

export default Typewriter;
