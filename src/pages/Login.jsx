import React, { useContext, useState, useEffect } from 'react'
import UserContext from '../context/UserContext'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const { userLogin } = useContext(UserContext);
    const navigate = useNavigate();
    const isAuthenticated = !!localStorage.getItem("token");

    useEffect(()=>{
        if(isAuthenticated){
            navigate("/");
        }
    })

    const [user, setUser] = useState({ email: "", password: "" });
    const [error, setError] = useState(null);

    const login = async () => {
        const response = await userLogin(user);
        if (response.success) {
            navigate("/");
        } else {
            setError(response.error);
            setUser({ email: "", password: "" });
        }
    }

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => setError(null), 3000); // Error disappears after 3 seconds
            return () => clearTimeout(timer); // Cleanup the timer
        }
    }, [error]);

    return (
        <div className='h-dvh w-full flex flex-col justify-around items-center relative md:flex-row'>

            {/* Section for show errors */}

            {
                error
                    ?
                    <div className='absolute top-2 bg-red-500 py-2 px-6 rounded-md text-lg text-white '>
                        <p>{error}</p>
                    </div>
                    :
                    null
            }

            {/* Logo */}
            <div>
                <h1 className='text-warm-tomato text-4xl font-bold sm:text-5xl'>Recipe Master</h1>
            </div>


            {/* Form Container */}
            <div className='w-[92%] bg-warm-cream shadow-md px-10 py-6 mt-12 rounded-md sm:w-[60%] md:w-[50%] lg:w-[40%]'>

                <div className='text-center mb-7'>
                    <h1 className='text-warm-tomato text-3xl font-semibold'>Login</h1>
                </div>

                <div className='border border-warm-salmon'></div>

                {/* Login Form */}
                <div className='my-4'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="email" className='text-xl'>Email:</label>
                        <input type="text" id="email" className='text-xl p-2 rounded-md outline-none ring-1 ring-warm-salmon' value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                    </div>

                    <div className='flex flex-col gap-1 mt-7'>
                        <label htmlFor="password" className='text-xl'>Password:</label>
                        <input type="password" id="password" className='text-xl p-2 rounded-md outline-none ring-1 ring-warm-salmon' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                    </div>

                    <div className='my-7 text-center'>
                        <button className='text-xl bg-warm-orange text-white px-8 py-2 rounded-md' onClick={login}>Login</button>
                    </div>
                </div>

                <div className='border border-warm-salmon'></div>

                <div className='text-center mt-4'>
                    <p>Don't have an accout? <Link to="/signup" >Sign Up</Link> </p>
                </div>

            </div>

        </div>
    )
}

export default Login