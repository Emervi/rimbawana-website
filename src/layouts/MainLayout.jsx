import { Outlet } from "react-router-dom";

function MainLayout() {
    return (
        <>
            <h1>Navbar</h1>

            <Outlet />

            <h1>Footer</h1>
        </>
    );
}

export default MainLayout;