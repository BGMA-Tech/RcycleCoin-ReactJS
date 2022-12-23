import React from 'react'
import Announcement from '../components/Announc'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'

function Home() {
  return (
    <div className='container'>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Footer/>
       </div>
  )
}

export default Home