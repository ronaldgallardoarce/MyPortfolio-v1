import { useEffect } from 'react'
import { applyThemeToDOM, useResolvedTheme, useThemeStore } from '../store/themeStore'

export const useTheme = () => {
  const { theme, setTheme } = useThemeStore()
  const resolvedTheme = useResolvedTheme()

  // Sincronizar con cambios del sistema
  useEffect(() => {
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

      const handleChange = () => {
        applyThemeToDOM(theme)
      }

      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }
  }, [theme])

  return {
    theme,
    resolvedTheme,
    setTheme,
  }
}