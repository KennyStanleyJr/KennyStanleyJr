import { createContext, useContext, useState } from 'react'

import useLocalStorage from '@/hooks/useLocalStorage'

const ThemeContext = createContext([] as any)

export function useTheme() {
  return useContext(ThemeContext)
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // const value = useLocalStorage('dark-mode')
  const value = useState(true)
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
