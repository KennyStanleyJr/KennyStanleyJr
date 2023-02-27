import Link from 'next/link'
import { useRouter } from 'next/router'

export const NavItem = ({ pageName }: { pageName: string }) => {
  const router = useRouter()

  const adjustedPageName = pageName === 'home' ? '' : `${pageName}`

  const pageLink = `/${adjustedPageName}`

  const isActive = router.pathname === pageLink
  return (
    <li
      className={`text-almost-black dark:text-white transition-all duration-300 border-2 border-transparent hover:border-almost-black hover:bg-almost-black hover:text-white dark:hover:bg-white dark:hover:text-black dark:hover:border-white animated-radius ${
        isActive && 'border-black dark:border-white'
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

export default NavItem
