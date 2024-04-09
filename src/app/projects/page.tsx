"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import projectsData from "@/projects.json";
import { Project } from "@/types";
import { Group, PointLight } from "three";
import { lerp } from "@/utils/functions";
import { AnimatePresence, motion } from "framer-motion";
import ProjectsMenu from "@/components/projects/ProjectsMenu";
import SingleProject from "@/components/projects/SingleProject";
import ProjectLink from "@/components/projects/ProjectLink";
import ProjectText from "@/components/projects/ProjectText";
import Projects1 from "../projects1/page";

const projects = projectsData.reverse();

export default function Experience() {
  const [state, setState] = useState(0);
  const project: Project = projects[state];


  return (
    <div>
      <div
        className="h-screen relative w-screen hidden lg:flex bg-black"
      >
        <div className="md:w-[50%] w-[30%] h-full grid place-items-center relative">
          <AnimatePresence mode="wait">
            <ProjectText key={state} project={project} />
          </AnimatePresence>
          <ProjectsMenu state={state} setState={setState} projects={projects} />
        </div>
        <div className="w-[50%] h-full">
          <Canvas>
            <Projects state={state} setState={setState} />
          </Canvas>
        </div>
      </div>
      <div className="lg:hidden">
        <Projects1 />
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

