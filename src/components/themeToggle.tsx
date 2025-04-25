import { useEffect, useState } from "react";

const ThemeToggle = () => {
    type Theme = "light" | "dark" | "system"
    const [theme, setTheme] = useState<Theme>("system")
    const [isDarkTheme, setIsDarkTheme] = useState(true)
    useEffect(() => {
        const theme = localStorage.getItem("isDark")
        if (theme === null) return
        setIsDarkTheme(theme === 'true')
    }, [])
    useEffect(() => {
        localStorage.setItem("isDark", isDarkTheme.toString())
    }, [isDarkTheme])
    return (
        < button
            onClick={() => setIsDarkTheme(!isDarkTheme)}
            className={`size-10 rounded-full transition-colors ${isDarkTheme ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-white text-gray-800 hover:bg-gray-100"
                }`}
            aria-label={isDarkTheme ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
        >
            Tema: {isDarkTheme ? 'Oscuro' : 'Claro'}
        </button >
    );
}

export default ThemeToggle;