import { useState, useEffect, ComponentType, SVGProps } from 'react';
import SunIcon from '../../icons/sunIcon';
import MoonIcon from '../../icons/moonIcon';
import ComputerIcon from '../../icons/computerIcon';

type IconType = ComponentType<SVGProps<SVGSVGElement>>;
interface buttonItem {
    theme: Theme,
    icon: IconType
}
type Theme = 'light' | 'dark' | 'system';
const Themes: buttonItem[] = [
    { theme: 'dark', icon: MoonIcon },
    { theme: 'light', icon: SunIcon },
    { theme: 'system', icon: ComputerIcon }
]

export default function ThemeSwitcher() {
    // Estado para almacenar el tema actual
    const [theme, setTheme] = useState<Theme>(() => {
        // Recuperar el tema guardado en localStorage al iniciar
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme') as Theme | null;
            return savedTheme || 'system';
        }
        return 'system';
    });

    // Estado para seguir si el tema del sistema es oscuro
    const [systemIsDark, setSystemIsDark] = useState<boolean>(false);

    // Efecto para manejar cambios en el tema del sistema
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setSystemIsDark(mediaQuery.matches);

        // Listener para detectar cambios en la preferencia del sistema
        const handleChange = (e: MediaQueryListEvent) => {
            setSystemIsDark(e.matches);
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    // Efecto para aplicar el tema a la página
    useEffect(() => {
        // Para Tailwind 4, debemos actualizar el class toggle según la documentación
        if (theme === 'dark') {
            // Usuario eligió explícitamente modo oscuro
            localStorage.theme = 'dark';
            document.documentElement.classList.add('dark');
        } else if (theme === 'light') {
            // Usuario eligió explícitamente modo claro
            localStorage.theme = 'light';
            document.documentElement.classList.remove('dark');
        } else {
            // Usuario eligió seguir la preferencia del sistema
            localStorage.removeItem('theme');

            // Aplicar dark según la preferencia del sistema
            document.documentElement.classList.toggle(
                'dark',
                window.matchMedia('(prefers-color-scheme: dark)').matches
            );
        }
    }, [theme, systemIsDark]);

    const handleThemeChange = (newTheme: Theme) => {
        setTheme(newTheme);
    };

    return (
        <section className={`bg-cover bg-center flex flex-row items-center justify-center rounded-full bg-gray-100 dark:bg-[#1D202A] p-1 size-max`}>
            {
                Themes.map((item) => {
                    return (
                        <button
                            className={`cursor-pointer rounded-full p-1 border ${theme === item.theme ? 'border-[#9a9a9a] bg-white dark:bg-[#364153]' : 'border-transparent'}`}
                            key={item.theme}
                            onClick={() => handleThemeChange(item.theme)}
                        >
                            <item.icon className='size-4' />
                        </button>
                    )
                })
            }
        </section>
    );
}