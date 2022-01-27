import useAuth from '../hooks/useAuth';
import useConfig from '../hooks/useConfig';
import getNameInitials from '../utils/getNameInitials';
import { FaHome, FaSitemap, FaUsers, FaWallet, FaFile } from 'react-icons/fa';
import SideNavItem from './SideNavItem';

function Sidebar() {

    const { user } = useAuth();
    const { defaultUser, appName } = useConfig();

    return (
        <aside className="w-full flex flex-col overflow-y-scroll border-gray-200 border-r-2 shadow-md">
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
                        <FaHome className="text-xl" />
                    </SideNavItem>
                    <SideNavItem navHeading="Party" navigateTo="/party">
                        <FaUsers className="text-xl" />
                    </SideNavItem>
                    <SideNavItem navHeading="Item" navigateTo="/item">
                        <FaSitemap className="text-xl" />
                    </SideNavItem>
                    <SideNavItem navHeading="Sale" navigateTo="/sale">
                        <FaFile className="text-xl" />
                    </SideNavItem>
                    <SideNavItem navHeading="Expense" navigateTo="/expense">
                        <FaWallet className="text-xl" />
                    </SideNavItem>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;


