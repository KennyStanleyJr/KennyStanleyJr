import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"

const tabs = ['home', 'about', 'projects', 'contact']

export function DesktopNavigation() {
    return (
        <nav>
            <div className="hidden md:block">
                <ul className="flex text-xl gap-4">
                    {tabs.map((pageName) => (
                        <Tab key={pageName} pageName={pageName} />
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export function MobileNavigation() {
    return (
        <div className="block md:hidden fixed bottom-0 left-0 right-0 py-4 z-50 backdrop-blur-md shadow-xl border-t border-neutral-200 dark:border-neutral-800">
            <ul className="flex justify-evenly">
                {tabs.map((pageName) => (
                    <Tab key={pageName} pageName={pageName} />
                ))}
            </ul>
        </div>
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