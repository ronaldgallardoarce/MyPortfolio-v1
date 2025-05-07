import { ComponentType, SVGProps } from "react";
import FileCvIcon from "../icons/fileCvIcon";
import GitHub from "../icons/github";
import LinkedIn from "../icons/linkedin";
import MailIcon from "../icons/mailIcon";
import ButtonIcon from "./ui/buttonIcon";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;
interface buttonItem {
    id: number,
    className: string,
    href: string,
    icon: IconType,
    iconClassname: string,
    text?: string
}

const SocialButtonsSection = () => {
    const items: buttonItem[] = [
        {
            id: 1,
            className: "hover:bg-[#0A66C2]",
            href: "https://www.linkedin.com/in/ronald-gallardo-arce-a01b53279",
            icon: LinkedIn,
            iconClassname: "group-hover:fill-white"
        },
        {
            id: 2,
            className: "hover:bg-black",
            href: "https://github.com/ronaldgallardoarce",
            icon: GitHub,
            iconClassname: ""
        },
        {
            id: 3,
            className: "hover:bg-purple-950",
            href: "mailto:ronaldgallardoarce78@gmail.com?subject=¡Hola!%20desde%20tu%20portafolio&body=Hola,%20me%20interesa%20contactarte%20por%20lo%20siguiente...",
            icon: MailIcon,
            iconClassname: ""
        },
        {
            id: 4,
            className: "gap-2 hover:bg-[#414141]/50",
            href: "",
            icon: FileCvIcon,
            iconClassname: "",
            text: "Descargar currículum"
        },
    ]
    return (
        <nav className="flex flex-row gap-4 items-center justify-center sm:justify-start 
        my-6">
            {
                items.map((item) => {
                    return (
                        <ButtonIcon key={item.id} className={item.className} href={item.href}>
                            <item.icon className={`size-5 ${item.iconClassname}`} /> 
                            {/* <span className="hidden sm:block">{item.text ? item.text : ""}</span> */}
                        </ButtonIcon>
                    )
                })
            }
        </nav>
    );
}

export default SocialButtonsSection;