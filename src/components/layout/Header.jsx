import { useState, useEffect } from 'react';
import logo from '../../images/logo.png';
import useAuth from '../../hooks/useAuth';
import useConfig from '../../hooks/useConfig';
import useGlobal from '..//../hooks/useGlobal';

import { FaUser, FaPowerOff, FaBars, FaTimes } from 'react-icons/fa';
import getNameInitials from '../../utils/getNameInitials';

function Header() {
    const { user, isLoggedIn, logout } = useAuth();
    const { defaultUser, defaultRole } = useConfig();
    const { sidebarState, setSidebarState } = useGlobal();
    const [loginStatus, setLoginStatus] = useState(false);

    useEffect(() => {
        setLoginStatus(isLoggedIn);
    }, [isLoggedIn])

    const changeSidebarState = () => {
        setSidebarState(!sidebarState);
    }
    const handleLogout = () => {
        setSidebarState(false);
        logout();
    }
    return (
        <header className="h-16 bg-primary-900 flex justify-between items-center px-5">
            <div className="h-[50px] flex justify-between items-center brightness-200">
                <img height="100" width="100" src={logo} alt="header_logo" className=" object-cover"></img>
            </div>
            {
                loginStatus && (
                    <>
                        <div className="hidden lg:flex justify-center items-center">
                            <div className="text-white text-sm h-100 flex flex-col justify-center">
                                <div className="self-end">
                                    {user?.name ? user.name : defaultUser}
                                </div>
                                <div className="text-gray-50 self-end">
                                    {user?.role ? user.role : defaultRole}
                                </div>
                            </div>
                            <div className="relative h-[40px] w-[40px] bg-white ml-2 rounded-full flex justify-center items-center font-bold cursor-pointer group">
                                {user?.name ? getNameInitials(user.name) : 'XX'}
                                <div className="hidden group-hover:flex absolute bg-gray-200 w-[150px] right-1/2 top-3/4 rounded-lg flex-col justify-center items-center overflow-hidden">
                                    <button className="py-2 w-full border-b-2 border-gray-300 flex justify-start items-center pl-3 hover:bg-primary-700 hover:text-white"> <FaUser /> <span className="ml-3">Profile</span></button>
                                    <button className="py-2 w-full border-b-2 border-gray-300 flex justify-start items-center pl-3 hover:bg-primary-700 hover:text-white" onClick={handleLogout} > <FaPowerOff /> <span className="ml-3">Log Out</span></button>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
            <div className="flex lg:hidden">
                {
                    sidebarState ? <FaTimes className="text-2xl text-white cursor-pointer" onClick={changeSidebarState} />
                        : <FaBars className="text-2xl text-white cursor-pointer" onClick={changeSidebarState} />
                }
            </div>
        </header>
    );
}

export default Header;
