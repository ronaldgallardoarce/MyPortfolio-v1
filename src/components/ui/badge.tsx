import { FC, ReactNode } from "react";
import { GralProps } from "../../shared/types";
import { SparklesCore } from "./sparkles";
import { cn } from "../../lib/utils";
interface Props extends GralProps {
    children?: ReactNode,
}
const Badge: FC<Props> = ({ children, className }) => {
    return (
        <span className={cn(
            "relative flex flex-row items-center gap-2 size-max py-1 px-2 rounded-md overflow-hidden border border-gray-200 dark:border-border",
            className
        )}>

            <SparklesCore
                minSize={0.2}
                maxSize={0.5}
                className="w-full h-full absolute mask-radial-at-bottom mask-b-from-20% mask-b-to-80%"
                particleDensity={1200}
                background="transparent"
                particleColor="#FFFFFF"
                particleLightColor="#000"
            />
            <span className="relative flex size-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500"></span>
            </span>
            {children}
        </span>
    );
}

export default Badge;