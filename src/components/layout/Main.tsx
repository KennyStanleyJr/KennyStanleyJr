import { useTheme } from '@/context/themeContext'
import { useDarkMode } from 'next-dark-mode'

export default function Main({ children }: { children: React.ReactNode }) {
  // let [darkMode, _] = useTheme()
  const {
    autoModeActive, // boolean - whether the auto mode is active or not
    autoModeSupported, // boolean - whether the auto mode is supported on this browser
    darkModeActive, // boolean - whether the dark mode is active or not
    switchToAutoMode, // function - toggles the auto mode on
    switchToDarkMode, // function - toggles the dark mode on
    switchToLightMode, // function - toggles the light mode on
  } = useDarkMode()

  return (
    <div className={`${darkModeActive ? 'dark' : ''}`}>
      <div className="bg-gray-200 dark:bg-almost-black">
        <main className="h-screen max-w-7xl mx-auto sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  )
}
