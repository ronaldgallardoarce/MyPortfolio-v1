// import { ReactNode } from "react";
import { Outlet } from "react-router";
import ThemeGradientBackground from "../components/themeGradientBackground";
import Header from "../components/header";

// interface MainLayoutProps {
//     children: ReactNode
// }

const MainLayout = () => {
    return (
        <>
            <ThemeGradientBackground />
            <Header/>
            <Outlet />
        </>
    );
}

export default MainLayout;