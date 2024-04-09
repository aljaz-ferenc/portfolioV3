import { Amarante, Bodoni_Moda } from "next/font/google";
import {motion} from 'framer-motion'

const bodoni = Bodoni_Moda({ subsets: ["latin"] });
const amarante = Amarante({ subsets: ["latin"], weight: "400" });

export default function About() {
  return (
    <div className={`w-screen ${bodoni.className}`}>
      <div className="max-w-[50rem] mx-auto w-[90%]">
        <h1 className={`text-[8rem] font-bold ${amarante.className}`}>Aljaž Ferenc</h1>
        <h2 className={`text-[3rem] font-bold mb-10 ${amarante.className}`}>Web Developer</h2>
        <div className="flex flex-col gap-10 text-xl">
          <p>
            Welcome to my portfolio site! My name is Aljaž, and I am a
            self-taught frontend web developer with a passion for creating
            beautiful, user-friendly websites and web apps.
          </p>
          <p>
            After working in a different field, I decided to pursue my dream of
            becoming a frontend web developer. I am motivated, driven, and
            willing to learn whatever it takes to succeed in this exciting and
            fast-paced industry. I believe that with hard work, dedication, and
            a strong commitment to learning, anything is possible.
          </p>
          <p>
            On my portfolio page, you will find examples of my work, including
            websites and apps I have designed and built from scratch. Every
            project contains links to its GitHub repo and live page.
          </p>
          <p>
            Thank you for taking the time to visit my portfolio site, and I look
            forward to connecting with you soon!
          </p>
        </div>
      </div>
    </div>
  );
}
