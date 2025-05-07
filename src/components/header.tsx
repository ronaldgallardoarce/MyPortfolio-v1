import { NavItem } from "../shared/types";
import ThemeSwitcher from "./ui/themeSwitcher";

const Header = () => {
    const navItems: NavItem[] = [
        {
            id: 1,
            title: "Inicio",
            label: "inicio",
            url: "/#inicio"
        },
        {
            id: 2,
            title: "Proyectos",
            label: "proyectos",
            url: "/#proyectos"
        },
        {
            id: 3,
            title: "Contacto",
            label: "contacto",
            url: "/#contacto"
        }
    ]
    return (

        <header className="flex items-center justify-center w-full mt-4 fixed z-10">
            <nav className="flex gap-8 items-center px-10 py-1 
            rounded-2xl 
            -bg-zinc-100/70 dark:bg-[#18181b]/30 
            outline-1 outline-offset-1 outline-zinc-300 dark:outline-[#1A1A1A] 
            ring-1 ring-zinc-100 dark:ring-[#413D40] 
            backdrop-blur-xl 
            shadow-lg shadow-black/20 dark:shadow-black/30">
                {
                    navItems.map((item) => {
                        return (
                            <a
                                key={item.id}
                                href={item.url}
                                aria-label={item.label}
                                className="py-3"
                            >
                                {item.title}
                            </a>
                        )
                    })
                }
                <ThemeSwitcher />
            </nav>
        </header>
    );
}

export default Header;