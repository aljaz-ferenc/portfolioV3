"use client";

import { AnimatePresence, motion, useScroll } from "framer-motion";
import React, { useEffect, useState } from "react";
import projects from '@/projects.json'
import Project from './../../components/projects/Project';

export default function Projects() {
  const [active, setActive] = useState("hypertrophy");
  const [previousActive, setPreviousActive] = useState("hypertrophy")

  function handleClick(active: string){
    setActive(prev => {
      setPreviousActive(prev)
      return active
    })
  }


  return (
    <div className="w-screen min-h-screen max-h-screen overflow-y-hidden">
      {projects.map(project => (
        <Project key={project.title} previousActive={previousActive} project={project} active={active}/>
      ))}
      <div className="w-full absolute bottom-[5rem]">
        <ul className="mx-auto flex w-[90%] justify-between font-semibold uppercase">
          {projects.map((project, index) => (
            <li
            key={index}
              className="flex gap-5 relative cursor-pointer z-50"
              onClick={() => handleClick(project.title)}
            >
              <span>0{index + 1}</span>
              <span>{project.title}</span>
              {active === project.title && (
                <motion.div
                  layoutId="active"
                  className="absolute bottom-0 w-full h-[2px] bg-black"
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
