import logo from '../images/logo.png';
import { Link } from 'react-router-dom'
import useConfig from '../hooks/useConfig';
import { FaBackward } from 'react-icons/fa'
function NotFound() {
    const { appDefaultRoute } = useConfig();
    return (

        <div className="h-screen w-screen flex">
            <div className="bg-primary-900 md:flex justify-center items-center h-full hidden md:w-1/2">
                <div className="px-10 max-w-xl max-h-xl">
                    <img src={logo} className="h-full w-full object-fit" alt="logo"></img>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-20">
                <h1 className="text-5xl font-bold">404</h1>
                <h4 className="font-bold text-xl pt-5 pb-10">
                    Sorry, We don't have anything to show you here
                </h4>
                <Link className="bg-primary-900 text-white py-2 px-5 flex items-center" to={appDefaultRoute ? '/' : appDefaultRoute}><FaBackward /><span className="ml-3">Back To Dashboard</span></Link>
            </div>
        </div>
    );
}

export default NotFound;
