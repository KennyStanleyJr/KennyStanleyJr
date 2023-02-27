import { type NextPage } from "next";
import { motion as m } from "framer-motion";

const Projects: NextPage = () => {
  return <div className="flex flex-col h-full justify-center">
    <m.div animate={{ opacity: 100 }} initial={{ opacity: 0 }} transition={{ duration: 0.5, ease: 'backOut' }} >
      <h3 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Projects
      </h3>
    </m.div>
  </div>
};

export default Projects;
