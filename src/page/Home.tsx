import React from 'react'
import Hero from '../Components/Home/Hero'
import CollectionShowcase from '../Components/Home/CollectionShowcase'
import Subcategories from '../Components/Home/Subcategories'

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <CollectionShowcase />
      <Subcategories />
    </main>
  )
}

export default Home