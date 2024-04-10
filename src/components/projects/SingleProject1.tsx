import { Project } from "@/types";
import React, { useRef } from "react";
import Image from "next/image";
import ProjectLink from "./ProjectLink";
import { Github, PanelsTopLeft } from "lucide-react";
import { Amarante, Bodoni_Moda } from "next/font/google";
import { motion, useInView } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import Badge from "../ui/Badge";

const bodoni = Bodoni_Moda({ subsets: ["latin"] });
const amarante = Amarante({ subsets: ["latin"], weight: "400" });

type SingleProjectProps = {
  project: Project;
};

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function SingleProject1({ project }: SingleProjectProps) {
  return (
    <div className="grid place-items-center mb-40 w-screen">
      <div className="max-w-[50rem] w-[90%] mx-auto">
        <div>
          <motion.h1
            variants={variants}
            whileInView={"animate"}
            initial={"initial"}
            className={`text-[5rem] font-bold ${amarante.className}`}
          >
            {project.title}
          </motion.h1>
          <motion.div
          className="flex gap-2 mb-4"
           variants={variants}
           whileInView={"animate"}
             initial={"initial"}
          >
            {project.technologies.map((tech, i) => (
              <Badge key={i}>{tech}</Badge>
            ))}
          </motion.div>
          <motion.div 
        variants={variants}
        whileInView={"animate"}
          initial={"initial"}
          >
          <Image
            src={`/projects-images/${project.image}.webp`}
            width={600}
            height={1000}
            alt={project.title}
            className="mx-auto my-10 shadow-2xl"
          />
        </motion.div>
        </div>
        <div>
          <motion.h3
            variants={variants}
            whileInView={"animate"}
            initial={"initial"}
            className="text-[2rem] font-bold mb-5"
          >
            {project.subtitle}
          </motion.h3>
          <motion.div
            variants={variants}
            whileInView={"animate"}
            initial={"initial"}
            className="flex flex-col gap-5"
          >
            {project.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </motion.div>
          <motion.div
            variants={variants}
            whileInView={"animate"}
            initial={"initial"}
            className="flex w-full gap-5 mt-10"
          >
            <ProjectLink
              icon={<Github />}
              href={project.urls.github}
              text="Code"
            />
            <ProjectLink
              icon={<PanelsTopLeft />}
              href={project.urls.livePage}
              text="Live Page"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
