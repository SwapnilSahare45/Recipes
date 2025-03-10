import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import AddRecipe from './pages/AddRecipe'
import Profile from './pages/Profile'

const routes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/recipes' element={<Recipes />} />
            <Route path='/add' element={<AddRecipe />} />

            <Route path='/profile' element={<Profile />} />

            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
        </Routes>
    )
}

export default routes