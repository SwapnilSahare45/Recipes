import React from 'react'
import RecipeCard from './RecipeCard'

const MyRecipes = () => {
    return (
        <div className='flex flex-col justify-center items-center mb-6'>

            <div className='my-6 flex gap-3'>
                <buton className='text-xl font-semibold py-2 w-36 text-center bg-warm-orange text-white rounded-md cursor-pointer shadow-md'>My Recipes</buton>
                <buton className='text-xl font-semibold py-2 w-36 text-center bg-warm-orange text-white rounded-md cursor-pointer shadow-md'>Favorite</buton>
            </div>

            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 px-2 lg:grid-cols-3'>
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
            </div>

        </div>
    )
}

export default MyRecipes