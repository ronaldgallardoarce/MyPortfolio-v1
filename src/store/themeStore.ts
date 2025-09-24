import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Theme = 'light' | 'dark' | 'system'

interface ThemeState {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'system',
      setTheme: (theme: Theme) => {
        set({ theme })
        applyThemeToDOM(theme)
      },
    }),
    {
      name: 'theme', // nombre en localStorage
    }
  )
)

// Función para aplicar el tema al DOM
export function applyThemeToDOM(theme: Theme) {
  const root = document.documentElement
  
  if (theme === 'dark') {
    root.classList.add('dark')
    root.style.colorScheme = 'dark'
  } else if (theme === 'light') {
    root.classList.remove('dark')
    root.style.colorScheme = 'light'
  } else {
    // system
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (systemPrefersDark) {
      root.classList.add('dark')
      root.style.colorScheme = 'dark'
    } else {
      root.classList.remove('dark')
      root.style.colorScheme = 'light'
    }
  }
}

// Hook para obtener el tema resuelto (útil para mostrar en UI)
export function useResolvedTheme() {
  const theme = useThemeStore((state) => state.theme)
  
  if (theme === 'system') {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return 'light'
  }
  
  return theme
}