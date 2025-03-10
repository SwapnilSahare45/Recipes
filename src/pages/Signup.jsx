import React from 'react'

const Signup = () => {
    return (
        <div className='h-dvh w-full flex flex-col justify-around items-center gap-8 lg:flex-row'>

            {/* Logo */}
            <div>
                <h1 className='text-4xl text-warm-tomato font-bold sm:text-5xl'>Recipe Master</h1>
            </div>

            {/* Form Container */}
            <div className='w-[92%] bg-warm-cream shadow-md px-10 py-6 rounded-md sm:w-[60%] md:w-[50%] lg:w-[40%]'>

                <div className='text-center mb-7'>
                    <h1 className='text-3xl font-semibold text-warm-tomato'>Register</h1>
                </div>

                <div className='border border-warm-salmon'></div>

                {/* Sign up Form */}
                <div className='my-4'>

                    <div className='flex flex-col justify-between lg:flex-row'>

                        <div className='flex flex-col gap-1 lg:w-[48%]'>
                            <label htmlFor="firstName" className='text-xl'>First Name:</label>
                            <input type="text" id="firstName" className='text-xl p-2 rounded-md outline-none ring-1 ring-warm-salmon'/>
                        </div>
                        <div className='flex flex-col gap-1 mt-4 lg:w-[48%] lg:mt-0'>
                            <label htmlFor="lastName" className='text-xl'>Last Name:</label>
                            <input type="text" id="lastName" className='text-xl p-2 rounded-md outline-none ring-1 ring-warm-salmon'/>
                        </div>
                    </div>

                    <div className='flex flex-col gap-1 my-4'>
                        <label htmlFor="email" className='text-xl'>Email:</label>
                        <input type="text" id="email" className='text-xl p-2 rounded-md outline-none ring-1 ring-warm-salmon'/>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="password" className='text-xl'>Password:</label>
                        <input type="password" id="password" className='text-xl p-2 rounded-md outline-none ring-1 ring-warm-salmon'/>
                    </div>

                    <div className='flex flex-col gap-1 my-4'>
                        <label htmlFor="conPassword" className='text-xl'>Confirm Password:</label>
                        <input type="text" id="conPassword" className='text-xl p-2 rounded-md outline-none ring-1 ring-warm-salmon'/>
                    </div>

                    <div className='text-center my-7'>
                        <button className='text-xl bg-warm-orange text-white px-8 py-2 rounded-md'>Signup</button>
                    </div>

                    <div className='border border-warm-salmon'></div>

                    <div className='text-center mt-4'>
                        <p>I have an accoutn? Login</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Signup
