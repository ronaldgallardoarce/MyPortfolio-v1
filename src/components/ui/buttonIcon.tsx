import { FC, ReactNode } from "react";
import { GralProps } from "../../shared/types";

interface Props extends GralProps {
    children?: ReactNode,
    href: string
}
const ButtonIcon: FC<Props> = ({ children, className, href }) => {
    return (
        <a
            target="_blank"
            rel="noopener noreferrer"
            href={href}
            className={`${className} flex items-center justify-center
             p-2 rounded-xl 
             dark:bg-[#383838]/40 
             transition-all ease-in-out duration-300 trasnform hover:scale-110
             backdrop-blur-2xl 
             group dark:text-zinc-300 hover:text-white
            outline-1 outline-offset-1 outline-zinc-300 dark:outline-[#1A1A1A] hover:outline-transparent 
            ring-1 ring-zinc-100 dark:ring-[#413D40] hover:ring-transparent`}
        >
            {children}
        </a>
    );
}

export default ButtonIcon;