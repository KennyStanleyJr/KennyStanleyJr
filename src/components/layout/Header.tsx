export const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="flex justify-between items-center pt-2 px-8">
      {children}
    </header>
  )
}
export default Header
