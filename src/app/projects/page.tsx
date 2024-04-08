"use client";

import { Canvas, ThreeElements, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useHelper, useTexture } from "@react-three/drei";
import React, { SetStateAction, useRef, useState } from "react";
import projectsData from "@/projects.json";
import { Project } from "@/types";
import { Group, Mesh, PointLight, PointLightHelper } from "three";
import { lerp } from "@/utils/functions";
import { AnimatePresence, motion } from "framer-motion";
import { Github, PanelsTopLeft } from "lucide-react";

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
        <ProjectsMenu state={state} setState={setState} />
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

  useFrame(({ camera }, delta) => {
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

type SingleProjectProps = {
  project: Project;
  index: number;
  active: boolean;
  setState: React.Dispatch<SetStateAction<number>>;
};

function SingleProject({
  project,
  index,
  active,
  setState,
}: SingleProjectProps) {
  const positionY = index + 2 * index;
  const texture = useTexture(`/projects-images/${project.image}.webp`);
  const meshRef = useRef<Mesh | null>(null);

  useFrame(({ camera }, delta) => {
    if (!meshRef.current) return;

    if (active) {
      meshRef.current.rotation.y = lerp(meshRef.current.rotation.y, 1, 0.1);
      meshRef.current.scale.x = lerp(meshRef.current.scale.x, 1.5, 0.1);
      meshRef.current.scale.y = lerp(meshRef.current.scale.y, 1.5, 0.1);
    } else {
      meshRef.current.rotation.y = lerp(meshRef.current.rotation.y, 0, 0.1);
      meshRef.current.scale.x = lerp(meshRef.current.scale.x, 1, 0.1);
      meshRef.current.scale.y = lerp(meshRef.current.scale.y, 1, 0.1);
    }
  });

  return (
    <mesh
      onClick={() => setState(index)}
      position={[0, positionY, 0]}
      scale={1}
      ref={meshRef}
    >
      <planeGeometry args={[3, 2]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

type ProjectMenuProps = {
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
};

function ProjectsMenu({ state, setState }: ProjectMenuProps) {
  return (
    <div className="absolute w-[90%] bottom-[5rem] left-[50%] translate-x-[-50%]  flex justify-between ">
      {projects.map((project: Project, index) => (
        <div
          onClick={() => setState(index)}
          key={project.id}
          className={` cursor-pointer relative`}
        >
          <p className="w-max ">
            <span className="font-bold text-xl">0{index + 1}</span>{" "}
            <span>{project.title}</span>
          </p>
          {state === index && (
            <motion.div
              layoutId="active"
              className="absolute bottom-0 w-full h-[1px] bg-white left-0"
            ></motion.div>
          )}
        </div>
      ))}
    </div>
  );
}

type ProjectTextProps = {
  project: Project;
};

function ProjectText({ project }: ProjectTextProps) {
  return (
    <motion.div
      className="w-[90%] flex flex-col justify-center gap-5 max-w-[50rem]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-[5rem] font-bold">{project.title}</h1>
      <h3 className="text-[2rem] font-bold">{project.subtitle}</h3>
      <div className="flex flex-col gap-5">
        {project.paragraphs.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
      <div className="flex w-full gap-5 mt-10">
        <Link icon={<Github />} href={project.urls.github} text="Code" />
        <Link
          icon={<PanelsTopLeft />}
          href={project.urls.livePage}
          text="Live Page"
        />
      </div>
    </motion.div>
  );
}

type LinkProps = {
  icon: React.ReactNode;
  href: string;
  text: string;
};

function Link({ icon, href, text }: LinkProps) {
  const [hovered, setHovered] = useState(false);

  const variants = {
    initial: {
        y: 0
    },
    animate:{
        y: '-50%'
    }
  }

  return (
    <a
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`w-full h-[3rem] overflow-hidden grid relative place-items-center border rounded transition ${hovered ? 'bg-white bg-opacity-10' : ''}`}
      href={href}
      target="_blank"
      
    >
        <motion.div
        className='absolute top-0 grid place-items-center '
        variants={variants}
            initial='initial'
            animate={hovered ? 'animate' : 'initial'}
        >

      <div className='h-[3rem] grid place-items-center'>{icon}</div>
      <div className='h-[3rem] grid place-items-center'>{text}</div>
        </motion.div>
    </a>
  );
}
