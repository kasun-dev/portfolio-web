import React, { useEffect, useState } from "react";

const titles = [
  "Frontend Developer",
  "Backend Developer",
  "Fullstack Developer",
];

const Animate = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (subIndex === titles[index].length + 1 && !deleting) {
      setDeleting(true);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  // blinking cursor effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <h1
      className="text-white text-xs text-center ml-20 pl-20 min-h-[30px] leading-6 overflow-hidden"
    >
      {`${titles[index].substring(0, subIndex)}${blink ? "|" : " "}`}
    </h1>
  );
};

export default Animate;
