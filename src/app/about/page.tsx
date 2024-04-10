"use client";

import { Bodoni_Moda } from "next/font/google";
import { motion } from "framer-motion";
import { H1, H2, P } from "@/components/about/Highlighter";

const bodoni = Bodoni_Moda({ subsets: ["latin"] });

const variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export default function About() {
  return (
    <div
      className={`w-full min-h-screen ${bodoni.className} grid place-items-center`}
    >
      <div className="max-w-[50rem] mx-auto w-[90%] ">
        <motion.div initial="initial" animate="animate" variants={variants}>
          <H1>Aljaž Ferenc</H1>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={variants}
          transition={{ delay: 0.2 }}
        >
          <H2>Portfolio</H2>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={variants}
          transition={{ delay: 0.4 }}
        >
          <P>
            Welcome to my portfolio site! My name is Aljaž, and I am a
            self-taught frontend web developer with a passion for creating
            beautiful, user-friendly websites and web apps.
          </P>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={variants}
          transition={{ delay: 0.6 }}
        >
          <P>
            After working in a different field, I decided to pursue my dream of
            becoming a frontend web developer. I am motivated, driven, and
            willing to learn whatever it takes to succeed in this exciting and
            fast-paced industry. I believe that with hard work, dedication, and
            a strong commitment to learning, anything is possible.
          </P>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={variants}
          transition={{ delay: 0.8 }}
        >
          <P>
            On my portfolio page, you will find examples of my work, including
            websites and apps I have designed and built from scratch. Every
            project contains links to its GitHub repo and live page.
          </P>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={variants}
          transition={{ delay: 1 }}
        >
          {" "}
          <P>
            Thank you for taking the time to visit my portfolio site, and I look
            forward to connecting with you soon!
          </P>
        </motion.div>
      </div>
    </div>
  );
}
