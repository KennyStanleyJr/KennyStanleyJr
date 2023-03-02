import { type NextPage } from "next";
import { motion as m } from "framer-motion";
import { ProjectCard, type Project } from "~/components/ProjectCard";

const projects: Project[] = [
  {
    name: 'Charta',
    description: '',
    image: '/screenshots/charta.png',
    link: 'https://getcharta.com',
    github: '',
    technologies: ['Next.js', 'React', 'TailwindCSS', 'TypeScript', 'Vercel', 'Framer Motion', 'Mailchimp']
  },
  {
    name: 'This Portfolio',
    description: '',
    image: '/screenshots/portfolio.png',
    link: 'https://kennystanley.dev',
    github: 'https://github.com/KennyStanley/KennyStanley',
    technologies: ['Next.js', 'React', 'TailwindCSS', 'TypeScript', 'Vercel', 'Framer Motion', 'Three.js', 'React Three Fiber']
  }
]

const Projects: NextPage = () => {
  return <div className="flex flex-col h-full justify-start">
    <m.div animate={{ opacity: 100 }} initial={{ opacity: 0 }} transition={{ duration: 0.5, ease: 'backOut' }} className="h-full">
      <h3 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Projects
      </h3>

      <div className="pb-28 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </m.div>
  </div>
};

export default Projects;
