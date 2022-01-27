import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

function Layout() {
    return (
        <>
            <Header />
            <div className="h-[calc(100vh-4rem)] overflow-y-scroll flex">
                <div className="hidden md:flex w-1/6">
                    <Sidebar />
                </div>
                <div className="w-full md:w-5/5">
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default Layout;
