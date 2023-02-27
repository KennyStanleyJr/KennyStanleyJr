import { type NextPage } from "next";

const Home: NextPage = () => {
  return <div className="flex flex-col h-full justify-center">
    <h3 className="text-xl md:text-3xl font-light">👋 Hello! I&apos;m</h3>
    <h1 className="font-permanent-marker text-6xl md:text-7xl lg:text-8xl font-extrabold pt-4 pb-8">
      Kenny Stanley
    </h1>
    <h2 className="text-2xl md:text-4xl font-medium text-blue-700 dark:text-blue-400 pb-2">
      Full Stack Developer
    </h2>
    <p className="text-lg md:text-xl">
      I believe that incredible things are possible <br />
      through the power of technology.
    </p>
  </div>
};

export default Home;
