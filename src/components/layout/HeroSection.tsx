export const HeroSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex md:flex-row flex-col-reverse">{children}</div>
  )
}
export default HeroSection
