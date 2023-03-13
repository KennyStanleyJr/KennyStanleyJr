import { type NextPage } from "next";
import Image from "next/image";
import { motion as m } from "framer-motion";

import { type Skill, Skills } from "~/components/Skills";

const skills: Skill[] = [
  {
    name: 'Git',
    category: 'other'
  },
  {
    name: 'GitHub Actions',
    category: 'other'
  },
  {
    name: 'JavaScript',
    category: 'languages'
  },
  {
    name: 'TypeScript',
    category: 'languages'
  },
  {
    name: 'Python',
    category: 'languages'
  },
  {
    name: 'HTML',
    category: 'front-end'
  },
  {
    name: 'CSS',
    category: 'front-end'
  },
  {
    name: 'TailwindCSS',
    category: 'front-end'
  },
  {
    name: 'React',
    category: 'front-end'
  },
  {
    name: 'Next.js',
    category: 'back-end'
  },
  {
    name: 'Node.js',
    category: 'back-end'
  },
  {
    name: 'Express.js',
    category: 'back-end'
  },
  {
    name: 'SQL',
    category: 'back-end'
  },
  {
    name: 'MongoDB',
    category: 'back-end'
  },
  {
    name: 'Prisma',
    category: 'back-end'
  },
  {
    name: 'Solid.js',
    category: 'front-end'
  },
  {
    name: 'tRPC',
    category: 'other'
  },
  {
    name: 'WebRTC',
    category: 'other'
  },
  {
    name: 'XState',
    category: 'other'
  },
  {
    name: 'Three.js',
    category: 'front-end'
  },
  {
    name: 'React Three Fiber',
    category: 'front-end'
  },
  {
    name: 'Babylon.js',
    category: 'front-end'
  },
  {
    name: 'Framer Motion',
    category: 'front-end'
  },
  {
    name: 'Figma',
    category: 'tools'
  },
  {
    name: 'Blender',
    category: 'tools'
  },
  {
    name: 'Arduino',
    category: 'other'
  },
  {
    name: 'Raspberry Pi',
    category: 'other'
  },
  {
    name: 'ROS',
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
        <div className="md:max-w-xl flex-1 text-sm md:text-base font-light">
          <p>As an electrical engineering graduate, I have a strong foundation in technical problem-solving and innovation. My career began in the LED screen manufacturing industry, where I gained valuable experience in product development and project management.</p>
          <p className="mt-4">I taught myself web development, which has allowed me to expand my skillset, create websites for various clients, and tackle new challenges in the digital space. Currently, I&apos;m working on a startup with a small team, where we hope to bring innovative ideas to life.</p>
          <p className="mt-4">In my free time, I enjoy making robots, which allows me to explore my creativity and passion for technology. With a diverse range of experiences and a love for all things tech, I&apos;m excited for what the future holds.</p>
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
