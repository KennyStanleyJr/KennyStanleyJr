export const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <div data-testid="header" className="flex justify-between items-center">
      {children}
    </div>
  )
}
export default Header
