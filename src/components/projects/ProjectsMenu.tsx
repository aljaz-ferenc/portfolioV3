import { Project } from "@/types";
import {motion} from 'framer-motion'

type ProjectMenuProps = {
    state: number;
    setState: React.Dispatch<React.SetStateAction<number>>;
    projects: Project[]
  };
  
 export default function ProjectsMenu({ state, setState, projects }: ProjectMenuProps) {
    return (
      <div className="absolute w-[90%] max-w-[50rem] top-[3rem] left-[3rem] z-10 flex gap-2 flex-wrap justify-between ">
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