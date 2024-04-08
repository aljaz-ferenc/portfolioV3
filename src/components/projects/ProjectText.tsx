import { Project } from "@/types";
import {motion} from 'framer-motion'
import ProjectLink from "@/components/projects/ProjectLink";
import { Github, PanelsTopLeft } from "lucide-react";

type ProjectTextProps = {
    project: Project;
  };
  
 export default function ProjectText({ project }: ProjectTextProps) {
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
          <ProjectLink icon={<Github />} href={project.urls.github} text="Code" />
          <ProjectLink
            icon={<PanelsTopLeft />}
            href={project.urls.livePage}
            text="Live Page"
          />
        </div>
      </motion.div>
    );
  }