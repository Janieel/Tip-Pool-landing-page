import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Hero from '../../Component/Hero/Hero'
import Procons from '../../Component/Procons/Procons'
import Wallcon from '../../Component/Wallcon/Wallcon'
import Feautures from '../../Component/Feautures/Feautures'
import Users from '../../Component/Users/Users'
import Teckstack from '../../Component/Map/Map'

const Landing = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Procons/>
        <Wallcon/>
        <Feautures/>
        <Users/>
        <Teckstack/>
        
    </div>
  )
}

export default Landing