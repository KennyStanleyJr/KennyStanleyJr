export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-200 dark:bg-almost-black font-poppins transition-colors">
      <main className="h-screen max-w-7xl mx-auto sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  )
}
