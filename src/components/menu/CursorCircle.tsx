"use state";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type CursorCircleProps = {
  linkHovered: boolean;
};

export default function CursorCircle({ linkHovered }: CursorCircleProps) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({
    x: window.innerWidth,
    y: window.innerHeight,
  });

  useEffect(() => {
    addEventListener("mousemove", onMouseMove);
    addEventListener("resize", onResize);

    return () => {
      removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  function onMouseMove(e: MouseEvent) {
    setMouse({ x: e.clientX, y: e.clientY });
  }

  function onResize() {
    setWindowSize({ x: innerWidth, y: innerHeight });
  }

  const circleRadius = 100;

  const cursorCircleVariants = {
    initial: {
      opacity: 1,
      width: circleRadius,
      height: circleRadius,
    },
    hidden: {
      opacity: 0,
      width: 0,
      height: 0,
    },
    hovering: {
      width: 200,
      height: 200,
    },
  };

  return (
    <div
      className="absolute grid place-items-center hidden lg:block"
      style={{
        zIndex: 10,
        position: "absolute",
        top: mouse.y + "px",
        left: mouse.x + "px",
      }}
    >
      <motion.div
        variants={cursorCircleVariants}
        initial="initial"
        transition={{ duration: 0.2 }}
        exit="hidden"
        animate={
          mouse.x > windowSize.x - 200 && mouse.y < 200 ? "hidden" : "initial"
        }
        className={`w-[200px] h-[200px] absolute bg-white rounded-full cursor-none`}
      ></motion.div>
    </div>
  );
}
