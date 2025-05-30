// import { ReactNode } from "react";
import { Outlet } from "react-router";
import Header from "../components/header";
import ThemeGradientBackground from "../components/ui/themeGradientBackground";

// interface MainLayoutProps {
//     children: ReactNode
// }

const MainLayout = () => {
    return (
        <>
            <ThemeGradientBackground />
            <Header />
            <Outlet />
            {/* <Footer /> */}
        </>
    );
}

export default MainLayout;