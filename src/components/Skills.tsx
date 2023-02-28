type Category = 'languages' | 'front-end' | 'back-end' | 'tools' | 'other'

export type Skill = {
    name: string
    icon: string
    category: Category
}

export function Skills({ skills }: { skills: Skill[] }) {
    return <>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">Skills</h1>

        <Category category="languages" skills={skills} />
        <Category category="front-end" skills={skills} />
        <Category category="back-end" skills={skills} />
        <Category category="tools" skills={skills} />
        <Category category="other" skills={skills} />

    </>
}

function Category({ category, skills }: { category: Category, skills: Skill[] }) {
    return <>
        <h3 className="mt-1 text-md md:text-lg lg:text-xl capitalize">{category}</h3>
        <div className="flex gap-1 flex-wrap">
            {skills.filter(skill => skill.category === category).map(skill => <Skill key={skill.name} {...skill} />)}
        </div>
    </>
}

function Skill({ name, icon, category }: Skill) {
    return <div className="text-xs md:text-sm bg-black text-white dark:bg-white dark:text-black rounded px-2 py-1">{name}</div>
}