import useAuth from '../../hooks/useAuth';
import useConfig from '../../hooks/useConfig';
import useGlobal from '../../hooks/useGlobal';
import getNameInitials from '../../utils/getNameInitials';
import { FaHome, FaSitemap, FaUsers, FaWallet, FaFile, FaPowerOff } from 'react-icons/fa';
import SideNavItem from './SideNavItem';

function Sidebar() {

    const { user, logout } = useAuth();
    const { defaultUser, appName } = useConfig();
    const { setSidebarState } = useGlobal();
    const handleLogout = () => {
        setSidebarState(false);
        logout();
    }
    return (
        <aside className="w-full flex flex-col overflow-y-scroll border-gray-200 border-r-2 shadow-md relative">
            <div className="py-8 w-full self-center bg-secondary flex flex-col justify-center items-center">
                <div className="h-16 w-16 rounded-full bg-primary-900 text-white flex justify-center items-center text-2xl">
                    {user?.name ? getNameInitials(user.name) : 'XX'}
                </div>
                <div className="flex flex-col justify-center items-center pt-3">
                    <span className="font-bold text-xl">{user?.name ? user.name : defaultUser}</span>
                    <span>{appName}</span>
                </div>
            </div>
            <div className="">
                <ul>
                    <SideNavItem navHeading="Dashboard" navigateTo="/dashboard">
                        <FaHome className="text-lg" />
                    </SideNavItem>
                    <SideNavItem navHeading="Party" navigateTo="/party">
                        <FaUsers className="text-lg" />
                    </SideNavItem>
                    <SideNavItem navHeading="Item" navigateTo="/item">
                        <FaSitemap className="text-lg" />
                    </SideNavItem>
                    <SideNavItem navHeading="Sale" navigateTo="/sale">
                        <FaFile className="text-lg" />
                    </SideNavItem>
                    <SideNavItem navHeading="Expense" navigateTo="/expense">
                        <FaWallet className="text-lg" />
                    </SideNavItem>
                </ul>
            </div>
            <div className="flex flex-col justify-center items-center bg-white w-full h-40 hover:text-primary-900 hover:shadow-inner shadow-blue-900" >
                <div className="flex flex-col justify-center items-center cursor-pointer " onClick={handleLogout}>
                    <FaPowerOff className="text-lg font-bold mb-1" />
                    <p className="text-md">Logout</p>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;


