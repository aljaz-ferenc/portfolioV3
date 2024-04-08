"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import projectsData from "@/projects.json";
import { Project } from "@/types";
import { Group, PointLight } from "three";
import { lerp } from "@/utils/functions";
import { AnimatePresence, motion } from "framer-motion";
import ProjectsMenu from "@/components/projects/ProjectsMenu";
import SingleProject from "@/components/projects/SingleProject";
import ProjectLink from "@/components/projects/ProjectLink";
import ProjectText from "@/components/projects/ProjectText";

const projects = projectsData.reverse();

export default function Experience() {
  const [state, setState] = useState(0);
  const project: Project = projects[state];

  return (
    <div className="h-screen relative w-screen flex">
      <div className="md:w-[50%] w-[30%] h-full grid place-items-center relative">
        <AnimatePresence mode="wait">
          <ProjectText key={state} project={project} />
        </AnimatePresence>
        <ProjectsMenu state={state} setState={setState} projects={projects}/>
      </div>
      <div className="w-[50%] h-full">
        <Canvas>
          <Projects state={state} setState={setState} />
          <ambientLight />
        </Canvas>
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
  const pointLightRef = useRef<PointLight | null>(null);

  useFrame(({ camera }) => {
    if (!pointLightRef.current) return;
    const position = lerp(camera.position.y, state + 2 * state, 0.1);
    camera.position.y = position;
    pointLightRef.current.position.y = position;
  });

  return (
    <>
      <pointLight intensity={10} position={[-1, 0, 2]} ref={pointLightRef} />
      <group ref={groupRef} rotation-y={-1}>
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