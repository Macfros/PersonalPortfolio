"use client";

import { useState, useEffect } from 'react';

const Typewriter = () => {
  const words = ["Welcome to My Portfolio.", "I am a full Stack Web Developer", "And a Tech Enthusiast"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [typeSpeed, setTypeSpeed] = useState(100);

  useEffect(() => {
    const updateTypeSpeed = () => {
      // Speed up for deleting, slow down for typing
      setTypeSpeed(isDeleting ? 50 : 100);
    };

    const typeStep = () => {
      // Determine the current word and its length
      const currentWord = words[index];
      const currentLength = currentWord.length;

      if (isDeleting) {
        // If deleting, decrease subIndex
        setSubIndex((prev) => prev - 1);
      } else {
        // If typing, increase subIndex
        setSubIndex((prev) => prev + 1);
      }

      // Update the displayed text
      setText(currentWord.substring(0, subIndex));

      // Determine if the word is completely typed or deleted
      if (!isDeleting && subIndex === currentLength) {
        // If the word is completely typed, start deleting
        setIsDeleting(true);
        updateTypeSpeed();
      } else if (isDeleting && subIndex === 2) {
        // If the word is completely deleted, move to the next word
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
        updateTypeSpeed();
      }
    };

    // Execute the typewriting step after a delay
    const timeout = setTimeout(typeStep, typeSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index, typeSpeed]);

  return (
    <div className="w-full h-full flex">
      <h1 id="typewriter" className="text-2xl font-bold">{text}</h1>
    </div>
  );
};

export default Typewriter;
