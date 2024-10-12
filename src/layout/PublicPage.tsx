import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const PublicPage: React.FC = () => {
  return (
    <div className='font-klein'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default PublicPage