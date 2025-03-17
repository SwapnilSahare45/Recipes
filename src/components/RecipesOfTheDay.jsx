import React from 'react'
import RecipeCard from './RecipeCard'

const RecipesOfTheDay = () => {
    return (
        <div className='w-full py-4'>

            <div className='mx-3 flex flex-col justify-between mb-6 space-y-4 md:flex-row md:space-y-0'>
                <h1 className='text-warm-tomato text-3xl font-semibold'>Recipes Of The Day</h1>
                <button className='w-1/2 bg-warm-salmon text-white px-6 py-2 rounded-md shadow-md md:w-auto'>See More</button>
            </div>

            <div className='mx-3 flex flex-col justify-center gap-4 md:flex-row'>
                <RecipeCard />
            </div>

        </div>
    )
}

export default RecipesOfTheDay