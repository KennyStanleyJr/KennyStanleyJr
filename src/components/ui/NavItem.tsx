import Link from 'next/link'
import { useRouter } from 'next/router'

export const NavItem = ({ pageName }: { pageName: string }) => {
  const router = useRouter()
  const isActive = router.pathname === `/${pageName}`
  return (
    <li
      className={`text-almost-black dark:text-white transition-all border-2 border-transparent hover:border-almost-black dark:hover:border-gray-200 rounded-2xl ${
        isActive && 'border-black dark:border-white'
      }`}
    >
      <Link href={`/${pageName}`} passHref>
        <p className="px-4 py-2 cursor-pointer">{pageName}</p>
      </Link>
    </li>
  )
}

export default NavItem
