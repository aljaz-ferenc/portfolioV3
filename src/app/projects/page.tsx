"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import React, {  useRef, useState } from "react";
import projectsData from "@/projects.json";
import { Project } from "@/types";
import { Group } from "three";
import { lerp } from "@/utils/functions";
import { AnimatePresence } from "framer-motion";
import ProjectsMenu from "@/components/projects/ProjectsMenu";
import SingleProject from "@/components/projects/SingleProject";
import ProjectText from "@/components/projects/ProjectText";
import ProjectsSmall from "@/components/projects/ProjectsSmall";

const projects = projectsData;

export default function Experience() {
  const [state, setState] = useState(0);
  const project: Project = projects[state];

  return (
    <div className="w-[90vw] mx-auto">
      <div className="h-screen relative w-full hidden lg:flex bg-black">
        <ProjectsMenu state={state} setState={setState} projects={projects} />
        <div className="md:w-[50%] w-[30%] h-full grid place-items-center relative">
          <AnimatePresence mode="wait">
            <ProjectText key={state} project={project} />
          </AnimatePresence>
        </div>
        <div className="w-[50%] h-full">
          <Canvas camera={{ fov: 60 }}>
            <Projects state={state} setState={setState} />
          </Canvas>
        </div>
      </div>
      <div className="lg:hidden">
        <ProjectsSmall />
      </div>
    </div>
  );
}

type ProjectsProps = {
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
};

function Projects({ state, setState }: ProjectsProps) {
  const groupRef = useRef<Group | null>(null);

  useFrame(({ camera }) => {
    const position = lerp(camera.position.y, state + 2 * state, 0.1);
    camera.position.y = position;
  });

  return (
    <>
      <group ref={groupRef} rotation-y={-Math.PI * 0.5}>
        {projects.map((project: Project, index) => (
          <SingleProject
            setState={setState}
            key={project.id}
            index={index}
            project={project}
            active={state === index}
          />
        ))}
      </group>
    </>
  );
}
