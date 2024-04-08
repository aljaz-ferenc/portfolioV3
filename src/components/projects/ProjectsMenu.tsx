import { Project } from "@/types";
import {motion} from 'framer-motion'

type ProjectMenuProps = {
    state: number;
    setState: React.Dispatch<React.SetStateAction<number>>;
    projects: Project[]
  };
  
 export default function ProjectsMenu({ state, setState, projects }: ProjectMenuProps) {
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