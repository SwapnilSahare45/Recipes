import React from 'react'

const RecipeCard = () => {
    return (
        <div className='bg-warm-cream flex flex-col items-center px-3 py-5 rounded-md shadow-md md:px-7 md:pb-7'>

            <div className='text-center mb-3 md:mb-6'>
                <h1 className='text-2xl font-bold text-warm-tomato uppercase'>Title</h1>
            </div>

            <div>
                <img className='w-96 rounded-md' src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj1xAUC2rB4XYU6l64Knei61zna2pHJd-zWRkS3ADunLlKdhwLnVIw24yl0G2fE1RHPbxevG92ygOLNCi8Vw8303T3EtCzJo-klBKf2PzFtozmr4KzNLJM5LraCTqFao-Fhzu8p4drPCC5I/s1600/2.jpg" alt="Puran Poli" />
            </div>

            <div className='w-full text-right mt-3'>
                <h5 className='text-lg text-warm-tomato'>By Swapnil Sahare</h5>
            </div>

            <div className='w-full mt-3'>
                <button className='bg-warm-salmon w-full text-white text-lg font-semibold py-2 rounded-md shadow-md'>See Recipe</button>
            </div>

        </div>
    )
}

export default RecipeCard