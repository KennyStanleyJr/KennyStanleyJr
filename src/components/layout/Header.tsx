export const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      data-testid="header"
      className="flex justify-between items-center pt-2"
    >
      {children}
    </div>
  )
}
export default Header
