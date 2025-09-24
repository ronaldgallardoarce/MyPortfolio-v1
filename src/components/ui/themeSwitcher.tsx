import { ComponentType, SVGProps } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SunIcon from '../../icons/sunIcon';
import MoonIcon from '../../icons/moonIcon';
import ComputerIcon from '../../icons/computerIcon';
import StyledContainer from './styledContainer';
import { useTheme } from '../../hooks/useResolvedTheme';
import { cn } from '../../lib/utils';

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
];

const MobileThemes = Themes.filter(item => item.theme !== 'system');

export default function ThemeSwitcher() {
    const { theme, setTheme, resolvedTheme } = useTheme();


    const handleMobileThemeChange = () => {
        const currentMobileIndex = MobileThemes.findIndex(item => item.theme === resolvedTheme);
        const nextIndex = (currentMobileIndex + 1) % MobileThemes.length;
        const nextTheme = MobileThemes[nextIndex];
        setTheme(nextTheme.theme);
    };

    const currentMobileTheme = MobileThemes.find(item => item.theme === resolvedTheme) || MobileThemes[0];

    return (
        <StyledContainer className='bg-neutral-200/70 dark:bg-black/60 rounded-full'>
            {/* Desktop/Tablet View (sm+) */}
            <section className={`hidden sm:flex bg-cover bg-center flex-row items-center justify-center rounded-full p-1 size-max`}>
                {Themes.map((item) => {
                    return (
                        <motion.button
                            key={item.theme}
                            onClick={() => setTheme(item.theme)}
                            className={cn(
                                'cursor-pointer rounded-full p-1 border transition-colors duration-200',
                                theme === item.theme
                                    ? 'border-[#9a9a9a] bg-white dark:bg-[#364153]'
                                    : 'border-transparent hover:border-gray-300 dark:hover:border-gray-600'
                            )}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.15 }}
                        >
                            <item.icon className='size-4' />
                        </motion.button>
                    );
                })}
            </section>

            {/* Mobile View - Bubble pop animation (sin system) */}
            <section className='sm:hidden'>
                <motion.button
                    onClick={handleMobileThemeChange}
                    className={cn(
                        'cursor-pointer rounded-full p-2 border border-[#9a9a9a] bg-white dark:bg-[#364153] relative overflow-hidden'
                    )}
                    whileTap={{
                        scale: [1, 1.3, 0.8, 1.1, 1],
                        transition: {
                            duration: 0.6,
                            times: [0, 0.2, 0.4, 0.7, 1],
                            ease: "easeInOut"
                        }
                    }}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={theme === 'system' ? 'dark' : theme}
                            className="relative"
                            initial={{
                                scale: 0,
                                rotate: -180,
                                opacity: 0
                            }}
                            animate={{
                                scale: [0, 1.4, 0.9, 1.1, 1],
                                rotate: [0, 10, -5, 2, 0],
                                opacity: [0, 0.7, 1, 1, 1]
                            }}
                            exit={{
                                scale: [1, 1.3, 0],
                                rotate: [0, 15, 45],
                                opacity: [1, 0.8, 0]
                            }}
                            transition={{
                                duration: 0.5,
                                times: [0, 0.3, 0.6, 0.8, 1],
                                ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                        >
                            {/* Efecto de "pop" con círculo que se expande */}
                            <motion.div
                                className="absolute inset-0 rounded-full border-current opacity-30"
                                initial={{ scale: 1, opacity: 0 }}
                                animate={{
                                    scale: [1, 2, 3],
                                    opacity: [0, 0.4, 0]
                                }}
                                transition={{
                                    duration: 0.4,
                                    ease: "easeOut"
                                }}
                            />

                            <currentMobileTheme.icon className='size-4 relative z-10' />
                        </motion.div>
                    </AnimatePresence>

                </motion.button>
            </section>
        </StyledContainer>
    );
}