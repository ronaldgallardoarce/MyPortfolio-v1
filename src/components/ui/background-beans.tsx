import { motion } from "motion/react";
import React, { HTMLAttributes, useMemo } from "react";
import { cn } from "../../lib/utils";

const generateRayConfig = (index: number, total: number) => {
    const progress = index / Math.max(total - 1, 1);
    const leftPercent = 2 + progress * 96;
    const rotation = 28 - progress * 56;
    const variation = (index * 0.618) % 1;

    return {
        left: `${leftPercent}%`,
        rotation,
        width: 40 + variation * 70,
        duration: 6 + variation * 5,
        delay: -variation * 10,
        swayDuration: 12 + variation * 9,
        swayDelay: -variation * 10,
        blur: 24 + variation * 9,
        strongSway: index % 2 === 0,
    };
};

interface BackgroundBeamsProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    gridSize?: number;
    rayCount?: number;
    rayOpacity?: number;
    raySpeed?: number;
    rayLength?: string;
    backgroundColor?: string;
}

interface LightRayProps {
    left: string;
    rotation: number;
    width: number;
    delay: number;
    duration: number;
    swayDuration: number;
    swayDelay: number;
    blurAmount: number;
    isStrongerSway: boolean;
    opacity: number;
    speed: number;
    length: string;
}

const LightRay = React.memo<LightRayProps>(
    ({
        left,
        rotation,
        width,
        delay,
        duration,
        swayDuration,
        swayDelay,
        blurAmount,
        isStrongerSway,
        opacity,
        speed,
        length,
    }) => {
        return (
            <motion.div
                className="absolute pointer-events-none -top-[5%] left-[var(--ray-left)] w-[var(--ray-width)] h-[var(--ray-height)] origin-top mix-blend-screen dark:bg-[linear-gradient(to_bottom,rgba(98,47,142,var(--ray-opacity)),rgba(17,116,130,1))] bg-[linear-gradient(to_bottom,rgba(72,165,196,var(--ray-opacity)),rgba(165,88,179,1))] blur-[var(--ray-blur)] translate-x-[-50%] rotate-[var(--ray-rotation)] shadow-md shadow-purple-950"
                style={
                    {
                        "--ray-left": left,
                        "--ray-width": `${width}px`,
                        "--ray-height": length,
                        "--ray-opacity": opacity,
                        "--ray-blur": `${blurAmount}px`,
                        "--ray-rotation": `${rotation}deg`,
                    } as React.CSSProperties
                }
                animate={{
                    opacity: [0.3, 0.7, 0.3],
                    transform: [
                        `translateX(-50%) rotate(${rotation}deg)`,
                        `translateX(-50%) rotate(${rotation + (isStrongerSway ? 1 : 0.5)}deg)`,
                        `translateX(-50%) rotate(${rotation}deg)`,
                    ],
                }}
                transition={{
                    opacity: {
                        duration: duration / speed,
                        delay: delay / speed,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                    transform: {
                        duration: swayDuration / speed,
                        delay: swayDelay / speed,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                }}
            />
        );
    },
);

export const BackgroundBeams: React.FC<BackgroundBeamsProps> = ({
    children,
    className,
    gridSize = 40,
    rayCount = 15,
    rayOpacity = 0.35,
    raySpeed = 1,
    rayLength = "45vh",
    backgroundColor = "#020412",
    ...props
}) => {
    const rayConfigs = useMemo(() => {
        return Array.from({ length: rayCount }, (_, i) =>
            generateRayConfig(i, rayCount),
        );
    }, [rayCount]);

    return (
        <div
            className={cn(
                "relative overflow-hidden dark:bg-[radial-gradient(ellipse_at_right_top,#1a2c5a,transparent_70%)] bg-[radial-gradient(ellipse_at_right_top,#48A5C4,transparent_50%)] bg-background-light dark:bg-background-dark",
                className,
            )}
            style={
                {
                    "--bg-color": backgroundColor,
                } as React.CSSProperties
            }
            {...props}
        >
            <div
                className="absolute inset-0 pointer-events-none bg-[linear-gradient(var(--grid-color)_1px,transparent_1px),linear-gradient(90deg,var(--grid-color)_1px,transparent_1px)] bg-size-[var(--grid-size)_var(--grid-size)] [mask-image:var(--grid-mask)] [webkit-mask-image:var(--grid-mask)]"
            />
            <div className="absolute inset-0 pointer-events-none -right-280 rotate-[30deg]">
                {rayConfigs.map((config, index) => {
                    const length = `${Math.floor(Math.random() * (65 - 45 + 1)) + 45}vh`;
                    return (
                        <LightRay
                            key={index}
                            left={config.left}
                            rotation={config.rotation}
                            width={config.width}
                            delay={config.delay}
                            duration={config.duration}
                            swayDuration={config.swayDuration}
                            swayDelay={config.swayDelay}
                            blurAmount={config.blur}
                            isStrongerSway={config.strongSway}
                            opacity={rayOpacity}
                            speed={raySpeed}
                            length={length}
                        />
                    )
                })}
            </div>

            <div className="z-10 fixed inset-0 overflow-auto ">{children}</div>
        </div>
    );
};