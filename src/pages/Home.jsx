import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import WhyUs from '../components/WhyUs'
import RecipesOfTheDay from '../components/RecipesOfTheDay'

const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <WhyUs/>
        <RecipesOfTheDay/>
        <Footer/>
    </div>
  )
}

export default Home