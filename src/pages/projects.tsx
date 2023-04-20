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
    technologies: ['Next.js', 'React', 'TailwindCSS', 'TypeScript', 'Framer Motion', 'Mailchimp', 'Vercel']
  },
  {
    name: 'Ashe Cain',
    description: '',
    image: '/screenshots/ashecain.png',
    link: 'https://ashecain.com',
    github: '',
    technologies: ['SquareSpace', "HTML", "CSS", "JavaScript"]
  },
  {
    name: 'Group Video-Chat',
    description: '',
    image: '/screenshots/group-video-chat.png',
    link: 'https://video-chat.up.railway.app/',
    github: 'https://github.com/KennyStanley/group-video-chat',
    technologies: ['HTML', 'TailwindCSS', 'JavaScript', 'WebRTC', 'Socket.io', 'Node.js', 'Express.js', 'Railway']
  },
  {
    name: 'This Portfolio',
    description: '',
    image: '/screenshots/portfolio.png',
    link: 'https://kennystanley.dev',
    github: 'https://github.com/KennyStanley/KennyStanley',
    technologies: ['Next.js', 'React', 'TailwindCSS', 'TypeScript', 'Framer Motion', 'Three.js', 'React Three Fiber', 'Vercel']
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
