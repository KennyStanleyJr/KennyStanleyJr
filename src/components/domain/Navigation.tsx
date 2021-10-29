import NavItem from '../ui/NavItem'

export const Navigation = () => {
  const NavItems = ['about', 'skills', 'projects', 'contact']
  return (
    <ul className="flex text-xl gap-4">
      {NavItems.map((pageName) => (
        <NavItem key={pageName} pageName={pageName} />
      ))}
    </ul>
  )
}
export default Navigation
