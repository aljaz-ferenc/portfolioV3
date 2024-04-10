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
import { usePathname } from 'next/navigation'
import { useCtx } from "@/context/Context";

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
    border: '1px solid rgba(255, 255, 255, 0.3)'
  },
  active: {
    width: 0,
    right: "15px",
    border: '1px solid transparent'
  },
  hovered:{
    border: '1px solid rgba(255, 255, 255, 0.6)'
  }
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
  const pathname = usePathname()
  const {menuOpen, setMenuOpen} = useCtx()
  
  if(pathname === '/') return <></>

  function handleClick(){
    setMenuOpen((prev) => (menuOpen ? prev : !prev))
  }

  return (
    <>
      <Menu/>
      <motion.button
        onClick={handleClick}
        onMouseLeave={() => setHovered(false)}
        onMouseEnter={() => setHovered(true)}
        className={`text-white w-[100px] z-50 gap-2 rounded-[90px] font-semibold h-[45px] flex items-center justify-center fixed bottom-8 right-8 md:top-5 md:right-5 ${
          menuOpen ? "cursor-default" : "pointer"
        }`}
        style={{ zIndex: 10001 }}
      >
        <motion.div
          className="w-full h-full bg-black origin-top right-0 absolute rounded-[90px]"
          variants={backgroundVariants}
          initial="initial"
          animate={menuOpen ? "active" :hovered ? 'hovered': "initial"}
        ></motion.div>
        <motion.span
          className={`text-xs absolute `}
          variants={textVariants}
          initial="initial"
          animate={menuOpen ? "active" : hovered ? "hovered" : "initial"}
        >
          MENU
        </motion.span>
        <motion.div
          variants={circleVariants}
          initial="initial"
          animate={menuOpen ? "active" : hovered ? "hovered" : "initial"}
          className={`bg-[#dd875d] rounded-full  justify-center origin-right  absolute translate-x-[27px] ${
            menuOpen ? "cursor-pointer" : "default"
          }`}
          onClick={() => setMenuOpen((prev) => (menuOpen ? !prev : prev))}
        >
          <motion.div
            className="h-full flex w-full relative justify-center items-center "
            variants={hamburgerVariants}
            initial="initial"
            animate={menuOpen ? "active" : hovered ? "hovered" : "initial"}
          >
            <motion.span
              className="w-[10px] rounded-full h-[2px] bg-black origin-center absolute"
              variants={hamburgerLineVariants}
              initial="initial1"
              animate={menuOpen ? "active1" : "initial1"}
            ></motion.span>
            <motion.span
              className="w-[10px] rounded-full h-[2px] bg-black origin-center absolute"
              variants={hamburgerLineVariants}
              initial="initial2"
              animate={menuOpen ? "active2" : "initial2"}
            ></motion.span>
          </motion.div>
        </motion.div>
      </motion.button>
    </>
  );
}



