import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export function ThemeToggleButton() {
    const { theme, setTheme } = useTheme()

    const [mounted, setMounted] = useState(false)
    // When mounted on client, now we can show the UI
    useEffect(() => {
        setMounted(true) // Prevents React Hydration Error
        setTheme('dark') // Prevents initial white screen
    }, [setTheme])
    if (!mounted) return <div />

    return (
        <>
            <button
                className="animated-radius
                  p-2 text-black dark:text-white 
                  hover:text-white dark:hover:text-black
                  border-black dark:border-white border-2 
                  shadow-xl hover:bg-black dark:hover:bg-white
                  transition-all duration-150 ease-linear"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
                <div>
                    {theme === 'light' ? (
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                        </svg>
                    )}
                </div>
            </button>
        </>
    )
}