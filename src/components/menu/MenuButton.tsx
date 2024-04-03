"use client";

import {
  AnimatePresence,
  motion,
  easeIn,
  easeOut,
  anticipate,
} from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Bodoni_Moda } from "next/font/google";

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

const linksContainerVariants = {
  initial: {
    y: -20,
  },
  animate: {
    y: 0,
    transition: {
      staggerChildren: .5
        },
  },
};

const linkVariants = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    }
  },
}

const links = [
  {text: 'About', href: '/about'},
  {text: 'Projects', href: '/projects'},
  {text: 'Stack', href: '/stack'},
  {text: 'Blog', href: '/blog'},
]
const bodoni = Bodoni_Moda({subsets: ['latin']})


export default function MenuButton() {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {active && (
          <motion.div
            key={"menu"}
            className="fixed w-full h-full bg-black top-[100%] left-0 flex items-center text-white"
            initial={{ top: "100%" }}
            animate={{ top: "0", transition: { ease: easeIn, duration: 0.3 } }}
            exit={{
              top: "-100%",
              transition: { ease: easeOut, duration: 0.5 },
            }}
          >
            <motion.ul
              key={"links-container"}
              variants={linksContainerVariants}
              animate="animate"
              initial="initial"
              className={`${bodoni.className} pl-[5rem] text-[5rem] flex flex-col gap-5 font-bold w-full`}
            >
              {links.map(link => (
                <motion.li
                  variants={linkVariants}
                  className=""
                  key={link.href}
                >
                  <Link 
                  href={link.href}
                  onClick={() => setActive(false)}
                  >{link.text}</Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        onClick={() => setActive((prev) => (active ? prev : !prev))}
        onMouseLeave={() => setHovered(false)}
        onMouseEnter={() => setHovered(true)}
        className={`text-white w-[100px] z-50 gap-2 rounded-[90px] font-semibold h-[45px] flex items-center justify-center absolute top-5 right-5 ${
          active ? "cursor-default" : "pointer"
        }`}
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
