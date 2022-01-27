import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import { Suspense } from 'react';
import Loading from '../utility/Loading';
function Layout() {
    return (
        <>
            <Header />
            <div className="h-[calc(100vh-4rem)] overflow-y-scroll flex">
                <div className="hidden md:flex w-1/5">
                    <Sidebar />
                </div>
                <div className="w-full md:w-4/5">
                    <Suspense fallback={<Loading />}>
                        <Outlet />
                    </Suspense>
                </div>
            </div>
        </>
    );
}

export default Layout;
