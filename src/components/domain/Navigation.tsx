import NavItem from '../ui/NavItem'

export const Navigation = () => {
  const NavItems = ['about', 'skills', 'projects', 'contact']
  return (
    <nav>
      <div className="hidden md:block">
        <ul className="flex text-xl gap-4">
          {NavItems.map((pageName) => (
            <NavItem key={pageName} pageName={pageName} />
          ))}
        </ul>
      </div>
      <div className="block md:hidden fixed bottom-0 left-0 right-0 py-4 z-50 bg-light-transparent dark:bg-dark-transparent">
        <ul className="flex justify-evenly">
          {NavItems.map((pageName) => (
            <NavItem key={pageName} pageName={pageName} />
          ))}
        </ul>
      </div>
    </nav>
  )
}
export default Navigation
