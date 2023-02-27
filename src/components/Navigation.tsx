import Link from "next/link"
import { useRouter } from "next/router"

export function Navigation() {
    const tabs = ['home', 'about', 'projects', 'contact']
    return (
        <nav>
            <div className="hidden md:block">
                <ul className="flex text-xl gap-4">
                    {tabs.map((pageName) => (
                        <Tab key={pageName} pageName={pageName} />
                    ))}
                </ul>
            </div>
            <div className="block md:hidden fixed bottom-0 left-0 right-0 py-4 z-50 bg-light-transparent dark:bg-dark-transparent">
                <ul className="flex justify-evenly">
                    {tabs.map((pageName) => (
                        <Tab key={pageName} pageName={pageName} />
                    ))}
                </ul>
            </div>
        </nav>
    )
}

function Tab({ pageName }: { pageName: string }) {
    const router = useRouter()

    const adjustedPageName = pageName === 'home' ? '' : `${pageName}`

    const pageLink = `/${adjustedPageName}`

    const isActive = router.pathname === pageLink

    return (
        <li
            className={`text-almost-black dark:text-white transition-all duration-300 border-2 hover:border-almost-black hover:bg-almost-black hover:text-white dark:hover:bg-white dark:hover:text-black dark:hover:border-white animated-radius ${isActive ? 'border-black dark:border-white' : 'border-transparent'
                }`}
        >
            <Link href={pageLink} passHref>
                <p className="px-3 py-2 sm:px-4 sm:py-2 cursor-pointer text-sm md:text-base">
                    {pageName}
                </p>
            </Link>
        </li>
    )
}