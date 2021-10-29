import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export const DarkModeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        <div className="bg-black dark:bg-white text-white dark:text-black border-black border-2 rounded-2xl w-10 h-10">
          {theme}
        </div>
      </button>
    </>
  )
}
export default DarkModeToggle
