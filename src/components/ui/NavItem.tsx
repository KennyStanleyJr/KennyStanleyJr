import Link from 'next/link'

export const NavItem = ({ pageName }: { pageName: string }) => {
  return (
    <li className="dark:text-white transition-all border-2 border-transparent hover:border-gray-200 rounded-2xl">
      <Link href={`/${pageName}`} passHref>
        <p className="px-4 py-2 cursor-pointer">{pageName}</p>
      </Link>
    </li>
  )
}

export default NavItem
