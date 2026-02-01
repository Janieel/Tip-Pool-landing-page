import React from 'react'
import g from "../../assets/Icons/E-Wallet-rafiki.svg"
import b from "../../assets/Icons/Information-bro.svg"
import p from "../../assets/Icons/Suc.svg"
const Wallcon = () => {
  return (
<div>
        <div className='mt-20  mx-4 sm:mx-6 lg:mx-10'>
            <p className='text-[2rem] sm:text-[2.5rem] lg:text-[3rem] flex items-center justify-center h-15  sm:mb-10 font-extrabold font-serif text-white'>How It Works</p>
            <div className=' grid grid-cols-1 sm:grid-cols-3 gap-4 text-white  rounded-[20px]    lg:p-10 '>
              <div className='flex flex-col items-center   md:items-center'>
                    <img src={g} className='h-80  ml-0 sm:ml-10 ' alt="" />
                    <p className=' text-[2rem] sm:text-[1.5rem]   text-center '>Connect Wallet</p>
                    <p className=' text-[1rem]  text-center '>link your web3 wallet or create smart one</p>
              </div>
             <div className='flex flex-col items-center md:items-center'>
                 <img src={b} className='h-80  ml-0 sm:ml-10 ' alt="" />
                  <p className=' text-center text-[1.5rem]'>Send Tip Instantly</p>
                  <p className=' text-center text-[1rem]'>Choose amount and send in one click</p>
             </div>
             <div className='flex flex-col items-center  md:items-center mb-5 sm:mb-0'>
                  <img src={p} className='h-80  ml-0  ' alt="" />
                  <p className=' text-center text-[1.3rem] '>Recieve Transparently</p>
                  <p className=' text-center text-[1rem]'>Track on blockchain forever verified</p>
             </div>
            </div>
        </div>

    </div>
  )
}

export default Wallcon