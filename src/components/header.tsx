import { NavItem } from "../shared/types";
import ThemeToggle from "./themeToggle";

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
        <header className="flex items-center justify-center w-full mt-2">
            <nav className="flex flex-row gap-4">
                {
                    navItems.map((item) => {
                        return (
                            <a
                                key={item.id}
                                href={item.url}
                                aria-label={item.label}
                                className="py-2"
                            >
                                {item.title}
                            </a>
                        )
                    })
                }
                <ThemeToggle />
            </nav>
        </header>
    );
}

export default Header;