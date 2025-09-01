import { BriefcaseBusiness, Home, UserRound } from "lucide-react";
import { NavItem } from "../shared/types";
import ThemeSwitcher from "./ui/themeSwitcher";
import { motion } from "framer-motion";
import StyledContainer from "./ui/styledContainer";

const glowVariants = {
    initial: { opacity: 0, scale: 0.8 },
    hover: {
        opacity: 1,
        scale: 2,
        transition: {
            opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
            scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
        },
    },
}

const navGlowVariants = {
    initial: { opacity: 0 },
    hover: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
        },
    },
}

const navItems: NavItem[] = [
    {
        id: 1,
        icon: <Home className="size-4" />,
        label: "Inicio",
        href: "/#inicio",
        gradient: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(37,99,235,0.10) 50%, rgba(29,78,216,0) 100%)",
        iconColor: "text-blue-500",
    },
    {
        id: 2,
        icon: <BriefcaseBusiness className="size-4" />,
        label: "Proyectos",
        href: "/#proyectos",
        gradient: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(37,99,235,0.10) 50%, rgba(29,78,216,0) 100%)",
        iconColor: "text-blue-500",
    },
    {
        id: 3,
        icon: <UserRound className="size-4" />,
        label: "Contacto",
        href: "/#contacto",
        gradient: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(37,99,235,0.10) 50%, rgba(29,78,216,0) 100%)",
        iconColor: "text-blue-500",
    }
]
const Header = () => {
    return (
        <header className="flex items-center justify-center w-full sticky top-4 z-10 mb-5">
            <StyledContainer className="dark:bg-background/50">
                <motion.nav className="flex gap-3 sm:gap-8 items-center px-2 sm:px-10 py-1 overflow-hidden"
                    initial="initial"
                    whileHover="hover"
                >
                    <motion.div
                        className={`absolute -inset-2 bg-gradient-radial from-transparent to-transparent rounded-3xl z-0 pointer-events-none`}
                        variants={navGlowVariants}
                    />
                    <ul className="flex items-center gap-2 relative z-10">
                        {
                            navItems.map((item) => {
                                return (
                                    <motion.li key={item.label} className="relative">
                                        <motion.div
                                            className="block rounded-xl overflow-visible group relative"
                                            style={{ perspective: "600px" }}
                                            whileHover="hover"
                                            initial="initial"
                                        >
                                            <motion.div
                                                className="absolute inset-0 z-0 pointer-events-none"
                                                variants={glowVariants}
                                                style={{
                                                    background: item.gradient,
                                                    opacity: 0,
                                                    borderRadius: "16px",
                                                }}
                                            />
                                            <motion.a
                                                href={item.href}
                                                className="flex items-center gap-2 px-2 sm:px-4 py-2 relative z-10 bg-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-white transition-colors rounded-xl"
                                            >
                                                <span className={`transition-colors duration-300 group-hover:${item.iconColor} dark:text-white`}>
                                                    {item.icon}
                                                </span>
                                                <span className="hidden sm:block">{item.label}</span>
                                            </motion.a>
                                        </motion.div>
                                    </motion.li>
                                )
                            })
                        }
                    </ul>
                    <ThemeSwitcher />
                </motion.nav>
            </StyledContainer>
        </header>
    );
}

export default Header;