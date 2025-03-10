import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='h-16 bg-warm-tomato flex justify-between items-center fixed top-0 w-full z-40 md:h-20'>
            <div className='ml-4 md:ml-6'>
                <h1 className='text-2xl font-bold text-white md:text-3xl'>Recipe Master</h1>
            </div>

            <nav className='hidden md:flex'>
                <ul className='flex gap-8 text-lg text-white'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/recipes">Recipes</Link>
                    </li>
                    <li>
                        <Link to="/add">Add Recipe</Link>
                    </li>
                </ul>
            </nav>

            <div className='mr-6 space-x-3 hidden md:flex'>
                <Link to='/login' className='bg-warm-orange text-white px-5 py-2 rounded-md shadow-md'>Login</Link>
                <Link to='/signup' className='bg-warm-orange text-white px-5 py-2 rounded-md shadow-md'>Signup</Link>
            </div>
        </header>
    )
}

export default Header