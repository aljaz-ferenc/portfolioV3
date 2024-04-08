'use client'

import React, {useState} from 'react'
import {motion} from 'framer-motion'

type LinkProps = {
    icon: React.ReactNode;
    href: string;
    text: string;
  };
  
 export default function ProjectLink({ icon, href, text }: LinkProps) {
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