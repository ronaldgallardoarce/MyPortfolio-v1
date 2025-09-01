import { useState, useEffect, ComponentType, SVGProps } from 'react';
import SunIcon from '../../icons/sunIcon';
import MoonIcon from '../../icons/moonIcon';
import ComputerIcon from '../../icons/computerIcon';
import StyledContainer from './styledContainer';
import { useThemeStore } from '../../store/themeStore';

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
    const { theme, setTheme } = useThemeStore();
    const [systemIsDark, setSystemIsDark] = useState(false);

    // Escuchar cambios del sistema
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        setSystemIsDark(mediaQuery.matches);

        const handleChange = (e: MediaQueryListEvent) => {
            setSystemIsDark(e.matches);
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    // Aplicar tema real al <html>
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else if (theme === "light") {
            document.documentElement.classList.remove("dark");
        } else {
            // "system"
            document.documentElement.classList.toggle("dark", systemIsDark);
        }
    }, [theme, systemIsDark]);


    return (
        <StyledContainer className='bg-neutral-200/70 dark:bg-black/60'>
            <section className={`bg-cover bg-center flex flex-row items-center justify-center rounded-full p-1 size-max`}>
                {
                    Themes.map((item) => {
                        return (
                            <button
                                key={item.theme}
                                onClick={() => setTheme(item.theme)}
                                className={`cursor-pointer rounded-full p-1 border ${theme === item.theme ? 'border-[#9a9a9a] bg-white dark:bg-[#364153]' : 'border-transparent'}`}
                            >
                                <item.icon className='size-4' />
                            </button>
                        )
                    })
                }
            </section>
        </StyledContainer>
    );
}