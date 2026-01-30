import React from 'react'
import EW from "../../assets/Icons/E-Wallet-bro.svg"

const Hero = () => {
  return (
    <div>
          <div className='bg-red-600 h-100 grid grid-cols-2 mt-10'>
             <div className='bg-blue-800 col-span-1 pl-10 pt-15'>
                
             <p className='bg-fuchsia-500 text-[4rem] font-serif'> Fair <br /> Transparent </p>
             <p className='text-[1.5rem]'>A decentralized tipping platform for all</p>
             
             </div>
             <div className='bg-green-600 col-span-1 pl-20 '>
                <img src={EW} className='h-90 ' alt="" />
             </div>
          </div>
    </div>
  )
}

export default Hero