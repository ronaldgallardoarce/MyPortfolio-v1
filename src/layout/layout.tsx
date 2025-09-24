// import { ReactNode } from "react";
import { Outlet } from "react-router";
import Header from "../components/header";
import { AnimatedGridPattern } from "../components/ui/AnimatedGridPattern";
import { cn } from "../lib/utils";
import GradientBackground from "../components/ui/GradientBackground";

// interface MainLayoutProps {
//     children: ReactNode
// }

const MainLayout = () => {
    return (
        <>
            <GradientBackground />
            <AnimatedGridPattern
                numSquares={30}
                maxOpacity={0.1}
                duration={3}
                repeatDelay={1}
                strokeDasharray={3}
                width={45}
                height={45}
                className={cn(
                    "[mask-image:radial-gradient(2000px_circle_at_bottom_left,transparent,white)]",
                    "w-full min-h-screen fixed opacity-60",
                )}
            />
            <Header />
            <Outlet />
            {/* <BackgroundBeams
                className="min-h-screen"
                rayCount={40}
                rayOpacity={0.4}
                raySpeed={0.8}
                rayLength="90vh"
                backgroundColor="#161616"
            >
                <Header />
                <Outlet />
            </BackgroundBeams> */}
            {/* <Footer /> */}
        </>
    );
}

export default MainLayout;