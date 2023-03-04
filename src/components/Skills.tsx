type Category = 'languages' | 'front-end' | 'back-end' | 'tools' | 'other'

export type Skill = {
    name: string
    category: Category
}

export function Skills({ skills }: { skills: Skill[] }) {
    return <>
        <h1 className="text-3xl md:text-4xl text-center mb-2">Skills</h1>

        <div className="h-1 w-32 bg-neutral-200 dark:bg-neutral-800 rounded-full mx-auto mb-4"></div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-4">
        <Category category="languages" skills={skills} />
        <Category category="front-end" skills={skills} />
        <Category category="back-end" skills={skills} />
        <Category category="tools" skills={skills} />
        <Category category="other" skills={skills} />
        </div>

    </>
}

function Category({ category, skills }: { category: Category, skills: Skill[] }) {
    return <div>
        <h3 className="mt-1 text-md md:text-lg lg:text-xl capitalize">{category}</h3>
        <div className="flex gap-1 flex-wrap">
            {skills.filter(skill => skill.category === category).map(skill => <Skill key={skill.name} {...skill} />)}
        </div>
    </div>
}

function Skill({ name, category }: Skill) {
    console.log(name, category)
    return <div className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-xs px-2 py-1 rounded-md">{name}</div>
}