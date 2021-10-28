import { useTheme } from '@/context/themeContext'

export const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useTheme()

  return (
    <>
      <button
        onClick={() => setIsDarkMode((_isDarkMode: boolean) => !_isDarkMode)}
      >
        <div className="bg-white border-black border-2 rounded-2xl w-10 h-10"></div>
      </button>
    </>
  )
}
export default DarkModeToggle
