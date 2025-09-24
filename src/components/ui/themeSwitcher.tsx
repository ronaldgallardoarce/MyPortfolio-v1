import { ComponentType, SVGProps } from 'react';
import SunIcon from '../../icons/sunIcon';
import MoonIcon from '../../icons/moonIcon';
import ComputerIcon from '../../icons/computerIcon';
import StyledContainer from './styledContainer';
import { useTheme } from '../../hooks/useResolvedTheme';

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
    const { theme, setTheme } = useTheme()

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