import Link from 'next/link'

export const NavItem = ({ pageName }: { pageName: string }) => {
  return (
    <li className="dark:text-white transition-all">
      <Link href={`/${pageName}`}>{pageName}</Link>
    </li>
  )
}

export default NavItem
