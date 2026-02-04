import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Hero from '../../Component/Hero/Hero'
import Procons from '../../Component/Procons/Procons'
import Wallcon from '../../Component/Wallcon/Wallcon'
import Feautures from '../../Component/Feautures/Feautures'
import Users from '../../Component/Users/Users'
import Journeyroadmap from '../../Component/Journeyroadmap/Journeyroadmap'
import Techstack from '../../Component/Techstack/Techstack'
import Vision from '../../Component/Vision/Vision'
import Footer from '../../Component/Footer/Footer'


const Landing = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Procons/>
        <Wallcon/>
        <Feautures/>
        <Users/>
        <Journeyroadmap/>
        <Techstack/>
        <Vision/>
        <Footer/>
        
    </div>
  )
}

export default Landing