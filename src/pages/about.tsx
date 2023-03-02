import { type NextPage } from "next";
import Image from "next/image";
import { motion as m } from "framer-motion";

import { Skill, Skills } from "~/components/Skills";

const skills: Skill[] = [
  {
    name: 'Git',
    icon: '/icons/git.svg',
    category: 'other'
  },
  {
    name: 'TypeScript',
    icon: '/icons/typescript.svg',
    category: 'languages'
  },
  {
    name: 'Python',
    icon: '/icons/python.svg',
    category: 'languages'
  },
  {
    name: 'HTML',
    icon: '/icons/html.svg',
    category: 'front-end'
  },
  {
    name: 'CSS',
    icon: '/icons/css.svg',
    category: 'front-end'
  },
  {
    name: 'TailwindCSS',
    icon: '/icons/tailwindcss.svg',
    category: 'front-end'
  },
  {
    name: 'React',
    icon: '/icons/react.svg',
    category: 'front-end'
  },
  {
    name: 'Next.js',
    icon: '/icons/nextjs.svg',
    category: 'back-end'
  },
  {
    name: 'Node.js',
    icon: '/icons/nodejs.svg',
    category: 'back-end'
  },
  {
    name: 'Express.js',
    icon: '/icons/expressjs.svg',
    category: 'back-end'
  },
  {
    name: 'SQL',
    icon: '/icons/sql.svg',
    category: 'back-end'
  },
  {
    name: 'MongoDB',
    icon: '/icons/mongodb.svg',
    category: 'back-end'
  },
  {
    name: 'Prisma',
    icon: '/icons/prisma.svg',
    category: 'back-end'
  },
  {
    name: 'Solid.js',
    icon: '/icons/solidjs.svg',
    category: 'front-end'
  },
  {
    name: 'tRPC',
    icon: '/icons/trpc.svg',
    category: 'other'
  },
  {
    name: 'WebRTC',
    icon: '/icons/webrtc.svg',
    category: 'other'
  },
  {
    name: 'XState',
    icon: '/icons/xstate.svg',
    category: 'other'
  },
  {
    name: 'Three.js',
    icon: '/icons/threejs.svg',
    category: 'front-end'
  },
  {
    name: 'React Three Fiber',
    icon: '/icons/react-three-fiber.svg',
    category: 'front-end'
  },
  {
    name: 'Babylon.js',
    icon: '/icons/babylonjs.svg',
    category: 'front-end'
  },
  {
    name: 'Figma',
    icon: '/icons/figma.svg',
    category: 'tools'
  },
  {
    name: 'Blender',
    icon: '/icons/blender.svg',
    category: 'tools'
  },
  {
    name: 'Arduino',
    icon: '/icons/arduino.svg',
    category: 'other'
  },
  {
    name: 'Raspberry Pi',
    icon: '/icons/raspberry-pi.svg',
    category: 'other'
  },
  {
    name: 'ROS',
    icon: '/icons/ros.svg',
    category: 'other'
  },
]

const About: NextPage = () => {
  return <div className="flex flex-col h-full justify-start">
    <m.div animate={{ opacity: 100 }} initial={{ opacity: 0 }} transition={{ duration: 0.5, ease: 'backOut' }} >
    <h3 className="text-4xl md:text-5xl font-bold text-center mb-12">
      About
    </h3>
      <div className="mb-12 max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
        <div className="md:max-w-lg flex-1 text-sm md:text-base font-light">
          <p>As an electrical engineering graduate, I have a strong foundation in technical problem-solving and innovation. My career began in the LED screen manufacturing industry, where I gained valuable experience in product development and project management.</p>
          <p className="mt-4">I taught myself web development, which has allowed me to expand my skillset and tackle new challenges in the digital space. Currently, I'm working on a startup with a small team, where we hope to bring innovative ideas to life.</p>
          <p className="mt-4">In my free time, I enjoy making robots, which allows me to explore my creativity and passion for technology. With a diverse range of experiences and a love for all things tech, I'm excited for what the future holds.</p>
        </div>

        <div className="self-center isolate z-0 relative w-52 h-52 md:w-72 md:h-72 mx-auto">
          <Image
            src="/kenny.png"
            alt="Picture of me, Kenny Stanley"
            fill
            className="rounded-xl object-cover"
            priority
          />
          <div id="bottomBorder" className="absolute bottom-0 bg-neutral-300 dark:bg-neutral-800 h-0.5 w-full rounded-full" />
          <div id="bottomBorderShadow" className="absolute -bottom-2 bg-black dark:bg-neutral-500 h-0.5 w-full blur-[10px] rounded-full" />
        </div>
      </div>

      <Skills skills={skills} />

      <div className="h-28" />

    </m.div>
  </div>
};

export default About;
