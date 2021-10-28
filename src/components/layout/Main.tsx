import { useTheme } from '@/context/themeContext'

export default function Main({ children }: { children: React.ReactNode }) {
  let [darkMode, _] = useTheme()
  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="bg-gray-200 dark:bg-almost-black">
        <main className="h-screen max-w-7xl mx-auto sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  )
}
