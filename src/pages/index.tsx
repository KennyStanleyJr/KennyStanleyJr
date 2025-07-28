import { type NextPage } from "next";
import { motion as m } from "framer-motion";

const Home: NextPage = () => {
  return <div className="flex flex-col mt-16 md:mt-32">
    <m.div animate={{ y: 0, opacity: 100 }} initial={{ y: 100, opacity: 0 }} transition={{ duration: 0.5, ease: 'backOut' }} >
      <h3 className="text-xl md:text-3xl font-light">👋 Hello! I&apos;m</h3>
    </m.div>
    <m.div animate={{ y: 0, opacity: 100 }} initial={{ y: 100, opacity: 0 }} transition={{ duration: 0.75, ease: 'backOut' }} >
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold pt-4 pb-8">
        Kenny Stanley
      </h1>
    </m.div>
    <m.div animate={{ y: 0, opacity: 100 }} initial={{ y: 100, opacity: 0 }} transition={{ duration: 1, ease: 'backOut' }} >
      <h2 className="text-2xl md:text-4xl font-medium text-blue-700 dark:text-blue-400 pb-2">
        Full Stack Developer
      </h2>
      <p className="max-w-md text-lg md:text-xl">
        Passionate about technology, dedicated to continuous learning, and committed to making a positive impact on the world.
      </p>
    </m.div>
  </div>
};

export default Home;
