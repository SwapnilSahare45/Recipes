import React from 'react'

const Login = () => {
    return (
        <div className='h-dvh w-full flex flex-col justify-around items-center md:flex-row'>

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
                        <input type="text" id="email" className='text-xl p-2 rounded-md outline-none ring-1 ring-warm-salmon' />
                    </div>

                    <div className='flex flex-col gap-1 mt-7'>
                        <label htmlFor="password" className='text-xl'>Password:</label>
                        <input type="text" id="password" className='text-xl p-2 rounded-md outline-none ring-1 ring-warm-salmon' />
                    </div>

                    <div className='my-7 text-center'>
                        <button className='text-xl bg-warm-orange text-white px-8 py-2 rounded-md'>Login</button>
                    </div>
                </div>

                <div className='border border-warm-salmon'></div>

                <div className='text-center mt-4'>
                    <p>Don't have an accout? Sign Up</p>
                </div>

            </div>

        </div>
    )
}

export default Login