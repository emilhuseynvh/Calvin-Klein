import React from 'react'
import Hero from '../Components/Home/Hero'
import CollectionShowcase from '../Components/Home/CollectionShowcase'

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <CollectionShowcase />
    </main>
  )
}

export default Home