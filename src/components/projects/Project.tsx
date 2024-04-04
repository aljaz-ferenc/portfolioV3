import { Project } from "@/types";
import { motion, animate } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

type ProjectProps = {
  project: Project;
  active: string;
  previousActive: string;
  onAnimating: (bool: boolean) => void
};

const projectVariants = {
  initial: {
    clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
    zIndex: 0,
  },
  animate: {
    clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
  },
  exit: {
    clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
  },
};

export default function Project({
  project,
  active,
  previousActive,
  onAnimating
}: ProjectProps) {

  const projectRef = useRef<HTMLDivElement | null>(null)
  
  function onAnimationComplete(e: any){
    if(!projectRef.current) return
    if(e === 'exit'){
      onAnimating(false)
      animate(projectRef.current, {clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)", zIndex: 0}, {duration: 0})
    }
  }

  useEffect(() => {
    if(!projectRef.current) return
    if(project.title === 'hypertrophy'){
      animate(projectRef.current, {clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)", zIndex: 10}, {duration: 0})
    }
  }, [])

  return (
    <motion.div
    ref={projectRef}
      variants={projectVariants}
      initial={"initial"}
      exit={"exit"}
      onAnimationComplete={onAnimationComplete}
      transition={{duration: .75}}
      animate={
        active === project.title
          ? "animate"
          : previousActive === project.title
          ? "exit"
          : "initial"
      }
      className={`absolute top-0 left-0 w-full h-full`}
      style={{ backgroundColor: project.color }}
    >
      <h1 className="text-black capitalize text-[4rem]">{project.title}</h1>
    </motion.div>
  );
}
