import Link from 'next/link'

export const NavItem = ({ pageName }: { pageName: string }) => {
  return (
    <li className="text-white">
      <Link href={`/${pageName}`}>{pageName}</Link>
    </li>
  )
}

export default NavItem
