import { useReducer, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import sha256 from 'sha256';
import logo from '../../images/logo.png';
import logoWithoutTextColored from '../../images/logo_without_text_colored.png';
import useAuth from '../../hooks/useAuth';
import useConfig from '../../hooks/useConfig';
import loginReducer from '../../reducers/loginReducer';

import db from '../../firebase';
import { collection, query, where, getDocs } from "firebase/firestore/lite";


function Login() {
    const { login } = useAuth();
    const { appName } = useConfig();

    const navigate = useNavigate();
    const location = useLocation();
    const routeTo = location?.state?.from ? location.state.from : '/';

    const [loginForm, setLoginForm] = useState({ email: '', password: '' })
    const [loginData, loginDispatcher] = useReducer(loginReducer, { data: [], isLoading: false, isSuccess: true });


    const handleLogin = async (e) => {
        e.preventDefault();
        if (process.env.REACT_APP_ENV === "dev") {
            login({ email: 'deepakbisht@gmail.com', role: 'admin', name: 'Deepak Bisht' });
            navigate(routeTo, { replace: true });
            return;
        }
        loginDispatcher("INITIATE");
        if (!loginForm.email || !loginForm.password) {
            loginDispatcher("FAILURE_VALIDATION");
            return;
        }
        try {
            const loginQuery = query(collection(db, process.env.REACT_APP_USER_DB_NAME), where("email", "==", loginForm.email), where("password", "==", sha256(loginForm.password)));
            const userInfoSnapshot = await getDocs(loginQuery);
            if (userInfoSnapshot.size) {
                const userData = [];
                userInfoSnapshot.forEach((doc) => { userData.push(createDataObject(doc.data())) })
                loginDispatcher("SUCCESS");
                login(userData[0]);
                navigate(routeTo, { replace: true });
            } else {
                loginDispatcher("FAILURE_ERROR");
            }
        } catch (err) {
            console.log(err)
            loginDispatcher("FAILURE_EXCEPTION");
        }
    }

    const createDataObject = (data) => {
        return {
            name: data.name,
            email: data.email,
            role: data.role
        }
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
                    {(!loginData.isSuccess && loginData?.message) &&
                        <div className="h-50 bg-red-500 text-white text-center w-full py-3 rounded-lg">
                            {loginData.message}
                        </div>
                    }
                    <div className="pt-5">
                        <label htmlFor="email" className="block pb-3 text-sm md:text-md">Enter Your Email</label>
                        <input id="email" className="w-full rounded-lg" type="text" name="email" onChange={handleFieldChange}></input>
                    </div>
                    <div className="pt-5">
                        <label htmlFor="password" className="block pb-3 text-sm md:text-md">Enter Your Password</label>
                        <input id="password" className="w-full rounded-lg" type="password" name="password" onChange={handleFieldChange}></input>
                    </div>
                    <div className="pt-8">
                        <button className="w-full bg-primary-900 text-white rounded-lg py-3 cursor-pointer text-sm md:text-md" disabled={loginData.isLoading} onClick={handleLogin}> {loginData.isLoading ? "Loading ..." : "Log In"}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;
