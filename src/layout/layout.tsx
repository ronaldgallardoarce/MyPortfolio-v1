// import { ReactNode } from "react";
import { Outlet } from "react-router";
import Header from "../components/header";
import { BackgroundBeams } from "../components/ui/background-beans";

// interface MainLayoutProps {
//     children: ReactNode
// }

const MainLayout = () => {
    return (
        <>
            <BackgroundBeams
                className="min-h-screen"
                rayCount={40}
                rayOpacity={0.4}
                raySpeed={0.8}
                rayLength="90vh"
                backgroundColor="#161616"
            >
                <Header />
                <Outlet />
            </BackgroundBeams>
            {/* <Footer /> */}
        </>
    );
}

export default MainLayout;