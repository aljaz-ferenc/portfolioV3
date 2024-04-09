"use client";

import projects from "@/projects.json";
import SingleProject1 from "@/components/projects/SingleProject1";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function ProjectsSmall() {

  return (
    <div>
        <motion.div className="flex flex-col " >
          {projects.map((project, index) => (
            <SingleProject1 key={project.id} project={project} />
          ))}
        </motion.div>
    
    </div>
  );
}
