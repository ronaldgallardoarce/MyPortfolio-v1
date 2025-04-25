import { ReactNode } from "react";
interface Props {
    children?: ReactNode,
    className: string
}
const Badge = ({ children, className }: Props) => {
    return (
        <span className={`${className} relative flex flex-row items-center gap-2 h-max w-max py-0.5 px-3 rounded-full overflow-hidden border-[1.5px] border-emerald-200`}>
            <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
            </span>
            {children}
        </span>
    );
}

export default Badge;