import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import { Suspense } from 'react';
import Loading from '../utility/Loading';
import useGlobal from '../../hooks/useGlobal';
function Layout() {
    const { sidebarState } = useGlobal();
    return (
        <>
            <Header />
            <div className="h-[calc(100vh-4rem)] overflow-y-scroll flex relative">
                <div className={`${sidebarState ? 'absolute w-full top-0 left-0 height-screen' : 'hidden'} lg:flex lg:w-1/5`}>
                    <Sidebar />
                </div>
                <div className="w-full lg:w-4/5">
                    <Suspense fallback={<Loading />}>
                        <div className="h-full overflow-y-scroll">
                            <Outlet />
                        </div>
                    </Suspense>
                </div>
            </div>
        </>
    );
}

export default Layout;
