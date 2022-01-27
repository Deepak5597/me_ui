import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../../images/logo.png';
import logoWithoutTextColored from '../../images/logo_without_text_colored.png';
import useConfig from '../../hooks/useConfig';

function Login() {
    const { login } = useAuth();
    const { appName } = useConfig();

    const navigate = useNavigate();
    const location = useLocation();
    const routeTo = location?.state?.from ? location.state.from : '/';

    const [loginForm, setLoginForm] = useState({ email: '', password: '' })
    const handleLogin = (e) => {
        e.preventDefault();
        login({ email: loginForm.email, role: 'admin', name: "Deepak Bisht" });
        navigate(routeTo, { replace: true });
    }
    const handleFieldChange = (e) => {
        const target = e.target;
        setLoginForm({
            ...loginForm,
            [target.name]: target.value
        })
    }

    return (
        <div className="h-screen w-screen flex">
            <div className="bg-primary-900 md:flex justify-center items-center h-full hidden md:w-1/2">
                <div className="px-10 max-w-xl max-h-xl">
                    <img src={logo} className="h-full w-full object-fit" alt="logo"></img>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-10 xl:p-20">
                <img className="md:hidden" src={logoWithoutTextColored} alt="form_logo" height={50} width={50} />
                <h4 className="font-bold text-md md:text-xl pb-10 pt-5">
                    Login to {appName}
                </h4>
                <form className="w-full lg:w-3/4" onSubmit={handleLogin}>
                    <div className="pt-5">
                        <label htmlFor="email" className="block pb-3 text-sm md:text-md">Enter Your Email</label>
                        <input id="email" className="w-full rounded-lg" type="text" name="email" onChange={handleFieldChange}></input>
                    </div>
                    <div className="pt-5">
                        <label htmlFor="password" className="block pb-3 text-sm md:text-md">Enter Your Password</label>
                        <input id="password" className="w-full rounded-lg" type="password" name="password" onChange={handleFieldChange}></input>
                    </div>
                    <div className="pt-8">
                        <button className="w-full bg-primary-900 text-white rounded-lg py-3 cursor-pointer text-sm md:text-md"> Log In </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;
