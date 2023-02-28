import Image from "next/image";
import Link from "next/link";
import { TbBrandGithub, TbExternalLink } from "react-icons/tb";

export type Project = {
    name: string;
    description: string;
    image: string;
    link: string;
    github?: string;
    technologies: string[];
};

export function ProjectCard(props: Project) {
    return <Link href={props.link} target="_blank" className="bg-white dark:bg-black bg-opacity-80 rounded-lg border-2 border-neutral-300 dark:border-neutral-800">
        <div className="">
            <Image src={props.image} alt={props.name} width={600} height={300} className="object-cover rounded-t-md" />
        </div>

        <div className="rounded-b-md p-4">
            <div className="flex justify-between">
                <div>
                    <h3 className="text-xl font-bold">{props.name}</h3>
                    <p className="text-sm">{props.description}</p>
                </div>
                <div className="flex gap-2">
                    {props.github && <Link href={props.github} target="_blank" className="animated-radius bg-black text-white dark:bg-white dark:text-black text-sm p-2 hover:scale-105 transition-all duration-300 ease-in-out"><TbBrandGithub size={20} /></Link>}
                    <Link href={props.link} target="_blank" className="animated-radius bg-black text-white dark:bg-white dark:text-black text-sm p-2 hover:scale-105 transition-all duration-300 ease-in-out"><TbExternalLink size={20} /></Link>
                </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
                {props.technologies.map((technology, index) => (
                    <div key={index} className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-xs px-2 py-1 rounded-md">{technology}</div>
                ))}
            </div>
        </div>
    </Link>
}