import React from 'react'
import RecipeCard from './RecipeCard'

const RecipesList = () => {
    return (
        <div className='flex flex-col justify-center items-center'>

            <div className='mt-28 w-[94%] text-center space-y-2 sm:w-[70%] md:w-[60%]'>
                <h1 className='text-3xl font-semibold text-warm-tomato uppercase lg:text-4xl'>Delicious Recipes for Every Occasion</h1>
                <p className='text-warm-charcoal sm:px-10 md:px-12 lg:px-24'>Explore an ever-growing collection of recipes shared by home cooks and food enthusiasts. From quick snacks to elaborate meals, find dishes that inspire your next culinary adventure.</p>
            </div>

            <div className='mt-6 space-x-2'>
                <input className='p-2 rounded-md w-50 outline-none ring-1 ring-warm-salmon focus:ring-2 focus:ring-warm-orange text-warm-orange font-semibold sm:w-96' type="text" placeholder='Search...'/>
                <button className='bg-warm-orange text-white font-semibold px-6 py-2 rounded-md'>Search</button>
            </div>

            <div className='flex flex-wrap justify-center gap-2 my-6 sm:w-[60%] md:w-[50%] lg:w-[40%]'>
                <button className='bg-warm-salmon text-white px-3 py-1 rounded-md md:py-2 md:px-4'>All</button>
                <button className='bg-warm-salmon text-white px-3 py-1 rounded-md'>Breakfast</button>
                <button className='bg-warm-salmon text-white px-3 py-1 rounded-md md:py-2 md:px-4'>Brunch</button>
                <button className='bg-warm-salmon text-white px-3 py-1 rounded-md md:py-2 md:px-4'>Lunch</button>
                <button className='bg-warm-salmon text-white px-3 py-1 rounded-md md:py-2 md:px-4'>Dinner</button>
                <button className='bg-warm-salmon text-white px-3 py-1 rounded-md md:py-2 md:px-4'>Snacks</button>
                <button className='bg-warm-salmon text-white px-3 py-1 rounded-md md:py-2 md:px-4'>Desserts</button>
                <button className='bg-warm-salmon text-white px-3 py-1 rounded-md md:py-2 md:px-4'>Appetizers</button>
                <button className='bg-warm-salmon text-white px-3 py-1 rounded-md md:py-2 md:px-4'>Drinks</button>
                <button className='bg-warm-salmon text-white px-3 py-1 rounded-md md:py-2 md:px-4'>Side Dishes</button>
                <button className='bg-warm-salmon text-white px-3 py-1 rounded-md md:py-2 md:px-4'>Soups</button>
                <button className='bg-warm-salmon text-white px-3 py-1 rounded-md md:py-2 md:px-4'>Salads</button>
            </div>

            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 px-2 lg:grid-cols-3'>
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
            </div>

            <div className='my-6'>
                <button className='bg-warm-orange text-white px-4 py-2 rounded-md'>Load More</button>
            </div>

        </div>
    )
}

export default RecipesList