import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='bg-warm-tomato flex flex-col justify-center items-center py-2 space-y-2 md:flex-row md:justify-between'>

            <div className='md:ml-6'>
                <h1 className='text-2xl text-white font-semibold'>Recipe Master</h1>
            </div>

            <div>
                <p className='text-white'>&copy;{currentYear}. All rights reserved.</p>
            </div>

            <div className='md:mr-6'>
                <ul className='flex gap-5 text-white'>
                    <li>Email</li>
                    <li>LinkedIn</li>
                    <li>GitHub</li>
                </ul>
            </div>

        </footer>
    )
}

export default Footer