import { cn } from "../../lib/utils";

interface StyledContainerProps {
    children: React.ReactNode,
    className?: string
}
const StyledContainer: React.FC<StyledContainerProps> = ({
    children,
    className
}) => (
    <div
        className={cn(
            "group relative flex overflow-hidden rounded-2xl outline-1 border border-[hsla(0,0%,100%,.1)] backdrop-blur-xl",
            // light styles
            "bg-background/20 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] outline-zinc-200",
            // dark styles
            "transform-gpu dark:bg-background/20 dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:outline-[#1a1a1a]",
            className,
        )}
    >
        {children}
        <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
    </div>
);
export default StyledContainer