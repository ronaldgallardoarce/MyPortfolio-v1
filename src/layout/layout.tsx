// import { ReactNode } from "react";
import { Outlet } from "react-router";

// interface MainLayoutProps {
//     children: ReactNode
// }

const MainLayout = () => {
    return (
        <>
            <h1>soy nav</h1>
            <Outlet />
        </>
    );
}

export default MainLayout;