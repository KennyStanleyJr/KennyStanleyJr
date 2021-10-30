export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-200 dark:bg-almost-black font-poppins transition-colors">
      <main className="flex flex-col h-screen">{children}</main>
    </div>
  )
}
