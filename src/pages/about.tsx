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
      <div className="mb-12 flex flex-col md:flex-row gap-8">
        <div className="text-base md:text-xl font-light">
          <p>Hello, my name is Kenny Stanley.</p>
          <p>I am passionate about solving problems with technology.</p>
          <p>I&apos;m really cool, trust me.</p>
          <p>No, like really, I promise.</p>
        </div>

        <div className="isolate z-0 relative w-52 h-52 md:w-72 md:h-72 mx-auto">
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
