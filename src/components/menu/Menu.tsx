"use client";

import { MenuLink as MenuLinkType } from "@/types";
import { motion, AnimatePresence, easeOut, animate } from "framer-motion";
import { Bodoni_Moda, Amarante } from "next/font/google";
import  CursorCircle  from "@/components/menu/CursorCircle";
import MenuLink from "./MenuLink";
import React, { useEffect, useRef, useState } from "react";
import Ornament from "./Ornament";
const bodoni = Bodoni_Moda({ subsets: ["latin"] });
const amarante = Amarante({ subsets: ["latin"], weight: "400" });
import { usePathname } from 'next/navigation'
import { useCtx } from "@/context/Context";


const links: MenuLinkType[] = [
  { text: "About", href: "/about" },
  { text: "Projects", href: "/projects" },
  { text: "Stack", href: "/stack" },
  { text: "Blog", href: "https://blog-next-virid.vercel.app/" },
];

const headingVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const headingCharVariants = {
  initial: {
    opacity: 0,
    x: -200,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const developerVariants = {
  initial: {
    opacity: 0,
    x: 100,
    rotate: "90deg",
  },
  animate: {
    opacity: 0.1,
    x: 0,
    transition: {
      duration: 1,
      delay: 1,
    },
  },
};

const linksContainerVariants = {
  initial: {
    y: -20,
  },
  animate: {
    y: 0,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const menuVariants = {
  initial:{
    top:'100%',
    transition: {
      delay: .2
    }
  },
  animate:{
    top:0
  }
}

export default function Menu() {
  const mouseRef = useRef({x: 0, y: 0})
  const [linkHovered, setLinkHovered] = useState(false);
  const pathname = usePathname()
  const {menuOpen, setMenuOpen} = useCtx()

  useEffect(() => {
    if(pathname === '/') setMenuOpen(true)
  }, [])
  

  return (
    <div onMouseMove={(e) => {
      mouseRef.current.x = e.clientX / innerWidth * 2 - 1
      mouseRef.current.y = e.clientY/ -innerHeight * 2 + 1
      }}>
   
    <motion.div
      key={"menu"}
      variants={menuVariants}
      className="cursor-none select-none fixed top-0 w-screen h-screen bg-black left-0 flex items-center text-white z-20"
      initial={'initial'}
      animate={menuOpen? 'animate' : 'initial'}
      exit={'initial'}
    >
      <div className="z-0 w-full h-full absolute top-0 left-0" >
        <Ornament mouse={mouseRef.current}/>
      </div>
      <div>
        

      <motion.h1
        className={`absolute right-[20%] bottom-[2rem] lg:text-[5rem] md:text-[3rem] text-[2rem] 2xl:text-[8rem]  ${amarante.className}`}
        variants={headingVariants}
        initial="initial"
        animate="animate"
        style={{ mixBlendMode: "difference", zIndex:102 }}
      >
        {"ALJAŽ FERENC".split("").map((char, i) => (
          <motion.span key={i} variants={headingCharVariants}>
            {char}
          </motion.span>
        ))}
      </motion.h1>
      <motion.span
        variants={developerVariants}
        initial="initial"
        animate="animate"
        style={{ mixBlendMode: "difference", opacity: 0.1, zIndex:102 }}
        className=" absolute rotate-[90deg] right-[-8rem] top-[50%] translate-y-[-50%] font-bold text-[3rem]"
      >
        WEB DEVELOPER
      </motion.span>
      
      <AnimatePresence mode='wait'>
      {menuOpen && 
      <CursorCircle linkHovered={linkHovered}/>
    }
      </AnimatePresence>
      <motion.ul
        key={"links-container"}
        variants={linksContainerVariants}
        animate="animate"
        initial="initial"

        onMouseLeave={() => setLinkHovered(false)}
        onMouseEnter={() => setLinkHovered(true)}
        className={`${amarante.className} pl-[5vw] text-[1.5rem] md:text-[2rem] 2xl:text-[5rem] lg:text-[3rem] flex flex-col gap-5 font-bold`}
      >
        {links.map((link) => (
          <MenuLink key={link.href} 
          setActive={setMenuOpen} 
          link={link}/>
        ))}
      </motion.ul>
      
          </div>
    </motion.div>
    </div>
  );
}
