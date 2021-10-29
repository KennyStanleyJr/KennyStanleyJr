export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main
      className="h-screen max-w-7xl mx-auto sm:px-6 lg:px-8
      bg-gray-200 dark:bg-almost-black font-poppins transition-colors"
    >
      {children}
    </main>
  )
}
