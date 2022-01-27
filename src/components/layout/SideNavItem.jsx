import { Link, useLocation } from 'react-router-dom';
function SideNavItem(props) {
    const { pathname } = useLocation();
    return (
        <Link to={props.navigateTo ? props.navigateTo : '/'}>
            <li className={`flex justify-start items-center pl-5 py-4 cursor-pointer hover:bg-blue-900 hover:text-white active:bg-blue-900 active:text-white border-gray-100 border-b-2 ${pathname === props.navigateTo ? "bg-primary-900 text-white" : "bg-white text-black"}`} >
                <div className=" lg:block">
                    {props.children}
                </div>
                <span className="pl-5 text-xl font-normal">{props.navHeading}</span>
            </li>
        </Link>
    )
}

export default SideNavItem;