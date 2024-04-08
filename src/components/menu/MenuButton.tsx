"use client";

import {
  AnimatePresence,
  motion,
  easeIn,
  easeOut,
  anticipate,
} from "framer-motion";
import { useEffect, useState } from "react";
import Menu from "./Menu";


const circleVariants = {
  initial: {
    width: 4,
    height: 4,
  },
  hovered: {
    width: 30,
    height: 30,
  },
  active: {
    height: 50,
    width: 50,
    transition: {
      type: "spring",
      stiffness: 700,
      duration: 0.1,
      damping: 30,
    },
  },
};

const textVariants = {
  initial: {
    transform: "translateX(-10px)",
  },
  hovered: {
    transform: "translateX(-20px)",
  },
  active: {
    transform: "translateX(-20px)",
    opacity: 0,
  },
};

const backgroundVariants = {
  initial: {
    width: "100%",
  },
  active: {
    width: 0,
    right: "15px",
  },
};

const hamburgerLineVariants = {
  initial1: {
    rotate: 0,
    y: 2,
  },
  initial2: {
    rotate: 0,
    y: -2,
  },
  active1: {
    rotate: "45deg",
    y: 0,
  },
  active2: {
    rotate: "-45deg",
    y: 0,
  },
};

const hamburgerVariants = {
  initial: {
    y: 10,
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
  hovered: {
    opacity: 1,
    y: 0,
  },
  active: {
    opacity: 1,
    y: 0,
  },
};


export default function MenuButton() {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);


  return (
    <>
      <Menu active={active} setActive={setActive}/>
      <motion.button
        onClick={() => setActive((prev) => (active ? prev : !prev))}
        onMouseLeave={() => setHovered(false)}
        onMouseEnter={() => setHovered(true)}
        className={`text-white w-[100px] z-50 gap-2 rounded-[90px] font-semibold h-[45px] flex items-center justify-center absolute top-5 right-5 ${
          active ? "cursor-default" : "pointer"
        }`}
        style={{ zIndex: 10001 }}
      >
        <motion.div
          className="w-full h-full bg-black origin-top right-0 absolute rounded-[90px]"
          variants={backgroundVariants}
          initial="initial"
          animate={active ? "active" : "initial"}
        ></motion.div>
        <motion.span
          className={`text-xs absolute`}
          variants={textVariants}
          initial="initial"
          animate={active ? "active" : hovered ? "hovered" : "initial"}
        >
          MENU
        </motion.span>
        <motion.div
          variants={circleVariants}
          initial="initial"
          animate={active ? "active" : hovered ? "hovered" : "initial"}
          className={`bg-[#dd875d] rounded-full  justify-center origin-right  absolute translate-x-[27px] ${
            active ? "cursor-pointer" : "default"
          }`}
          onClick={() => setActive((prev) => (active ? !prev : prev))}
        >
          <motion.div
            className="h-full flex w-full relative justify-center items-center"
            variants={hamburgerVariants}
            initial="initial"
            animate={active ? "active" : hovered ? "hovered" : "initial"}
          >
            <motion.span
              className="w-[10px] rounded-full h-[2px] bg-black origin-center absolute"
              variants={hamburgerLineVariants}
              initial="initial1"
              animate={active ? "active1" : "initial1"}
            ></motion.span>
            <motion.span
              className="w-[10px] rounded-full h-[2px] bg-black origin-center absolute"
              variants={hamburgerLineVariants}
              initial="initial2"
              animate={active ? "active2" : "initial2"}
            ></motion.span>
          </motion.div>
        </motion.div>
      </motion.button>
    </>
  );
}


type CursorCircleProps = {
  linkHovered: boolean;
};

export function CursorCircle({ linkHovered }: CursorCircleProps) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({
    x: innerWidth,
    y: innerHeight,
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

  const circleRadius = 200

  const cursorCircleVariants = {
    initial: {
      opacity: 1,
      width: circleRadius,
      height: circleRadius,
    },
    hidden: {
      opacity: 0,
    },
    hovering: {
      width: 200,
      height: 200,
    },
  };

  return (
    <motion.div
      variants={cursorCircleVariants}
      initial="initial"
      transition={{ duration: 0.2 }}
      animate={

          mouse.x > windowSize.x - 200 && mouse.y < 200
          ? "hidden"
          : "initial"
      }
      style={{
        zIndex: 10,
        position: "absolute",
        top: ( mouse.y - circleRadius / 2) + "px",
        left: (mouse.x - circleRadius / 2) + "px",
      }}
      className={`w-[200px] h-[200px] absolute bg-white rounded-full cursor-none origin-center`}
    ></motion.div>
  );
}
