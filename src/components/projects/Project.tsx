import { Project } from "@/types";
import { motion } from "framer-motion";

type ProjectProps = {
  project: Project;
  active: string;
  previousActive: string
};

const projectVariants = {
  initial:{
    clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
    zIndex: 0
  },
  animate:{
    clipPath: 'polygon(100% 0, 0 0, 0 100%, 100% 100%)',
  },
  exit:{
    clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)'
  }
}

export default function Project({ project, active, previousActive }: ProjectProps) {

  return (
    <motion.div
      variants={projectVariants}
      initial={'initial'}
      exit={'exit'}
      animate={active === project.title ? 'animate' : previousActive === project.title ? 'exit' :  'initial'}
      className={`absolute top-0 left-0 w-full h-full`}
      style={{ backgroundColor: project.color}}
    >
      <h1 className='text-black'>{project.title}</h1>
    </motion.div>
  );
}
