export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-poppins transition-colors">
      <main className="flex flex-col h-screen">{children}</main>
      <div className="h-20 bg-transparent md:hidden"></div>
    </div>
  )
}
