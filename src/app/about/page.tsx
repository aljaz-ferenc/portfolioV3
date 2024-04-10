'use client'

import { Amarante, Bodoni_Moda } from "next/font/google";
import {motion} from 'framer-motion'
import Highlighter from "@/components/about/Highlighter";

const bodoni = Bodoni_Moda({ subsets: ["latin"] });
const amarante = Amarante({ subsets: ["latin"], weight: "400" });

const variants = {
  initial:{
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0
  }
}

export default function About() {
  return (
    <div className={`w-full min-h-screen ${bodoni.className} grid place-items-center`}>
      <div className="max-w-[50rem] mx-auto w-[90%] ">
        <motion.h1 className={` text-[3rem] lg:text-[5rem] font-bold ${amarante.className}`}
        initial='initial'
        animate='animate'
        variants={variants}
        >
          <motion.div
          initial='initial'
          animate='animate'
          variants={variants}
         
          >
          <Highlighter.H1>
          Aljaž Ferenc
          </Highlighter.H1>
          </motion.div>

          <motion.div
          initial='initial'
          animate='animate'
          variants={variants}
          transition={{delay: 0.2}}
          ><Highlighter.H2>
          Portfolio
          </Highlighter.H2>
            </motion.div>
          <motion.div
          initial='initial'
          animate='animate'
          variants={variants}
          transition={{delay: 0.4}}
          ><Highlighter.P>
          Welcome to my portfolio site! My name is Aljaž, and I am a
            self-taught frontend web developer with a passion for creating
            beautiful, user-friendly websites and web apps.
          </Highlighter.P>
            </motion.div>
          <motion.div
          initial='initial'
          animate='animate'
          variants={variants}
          transition={{delay: 0.6}}
          ><Highlighter.P>
          After working in a different field, I decided to pursue my dream of
            becoming a frontend web developer. I am motivated, driven, and
            willing to learn whatever it takes to succeed in this exciting and
            fast-paced industry. I believe that with hard work, dedication, and
            a strong commitment to learning, anything is possible.
          </Highlighter.P>
            </motion.div>

          <motion.div
          initial='initial'
          animate='animate'
          variants={variants}
          transition={{delay: 0.8}}
          ><Highlighter.P>
          On my portfolio page, you will find examples of my work, including
            websites and apps I have designed and built from scratch. Every
            project contains links to its GitHub repo and live page.
          </Highlighter.P>
            </motion.div>
          <motion.div
          initial='initial'
          animate='animate'
          variants={variants}
          transition={{delay: 1}}
          > <Highlighter.P>
          Thank you for taking the time to visit my portfolio site, and I look
            forward to connecting with you soon!
          </Highlighter.P>
            </motion.div>
          
          
          
          
         
          </motion.h1>
        {/* <motion.h2 className={`text-[3rem] font-bold mb-10 ${amarante.className}`}>Web Developer</motion.h2> */}
        <motion.div variants={variants} className="flex flex-col gap-10 text-xl">
          {/* <motion.p
            initial='initial'
            animate='animate'
            variants={variants}
            transition={{delay: .2}}
          >
            Welcome to my portfolio site! My name is Aljaž, and I am a
            self-taught frontend web developer with a passion for creating
            beautiful, user-friendly websites and web apps.
          </motion.p> */}
          {/* <motion.p
          initial='initial'
          animate='animate'
          variants={variants}
          transition={{delay: .4}}
          >
            After working in a different field, I decided to pursue my dream of
            becoming a frontend web developer. I am motivated, driven, and
            willing to learn whatever it takes to succeed in this exciting and
            fast-paced industry. I believe that with hard work, dedication, and
            a strong commitment to learning, anything is possible.
          </motion.p> */}
          {/* <motion.p
          initial='initial'
          animate='animate'
          variants={variants}
          transition={{delay: .6}}
          >
            On my portfolio page, you will find examples of my work, including
            websites and apps I have designed and built from scratch. Every
            project contains links to its GitHub repo and live page.
          </motion.p> */}
          {/* <motion.p
          initial='initial'
          animate='animate'
          variants={variants}
          transition={{delay: .8}}
          >
            Thank you for taking the time to visit my portfolio site, and I look
            forward to connecting with you soon!
          </motion.p> */}
        </motion.div>
      </div>
    </div>
  );
}
