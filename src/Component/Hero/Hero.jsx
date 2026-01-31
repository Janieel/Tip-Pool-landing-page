import React from 'react'
import EW from "../../assets/Icons/E-Wallet-bro.svg"
import Swipercarousel from '../Swipercarousel/Swipercarousel'


const Hero = () => {
  return (
    <div>
          <div className=' h-100 grid grid-cols-2 mt-10'>
             <div className=' col-span-1 pl-20 pt-15'>
                
             <p className='text-[4rem] text-blue-500 font-serif'> Fair <br /> Transparent </p>
             <p className='text-[1.5rem] text-white'>A decentralized tipping platform for all</p>
             
             </div>
             <div className=' col-span-1  mr-10'>
                  <Swipercarousel/>
             </div>
          </div>
    </div>
  )
}

export default Hero