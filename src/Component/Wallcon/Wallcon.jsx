import React from 'react'
import g from "../../assets/Icons/E-Wallet-rafiki.svg"
import b from "../../assets/Icons/Information-bro.svg"
import p from "../../assets/Icons/Suc.svg"
const Wallcon = () => {
  return (
    <div>
        <div className='mt-20  mx-10'>
            <p className='text-[3rem] flex items-center justify-center h-15 mb-10 font-extrabold font-serif text-white'>How It Works</p>
            <div className=' grid grid-cols-3 gap-4 text-white border border-[#a5afc7] rounded-[20px]  p-10 '>
              <div className=''>
                    <img src={g} className='h-80 mt-5 ml-10 ' alt="" />
                    <p className='pl-20 text-[1.5rem]'>Connect Wallet</p>
                    <p className=' h-10 pl-15 text-[1rem]'>link your web3 wallet or create smart one</p>
              </div>
             <div className=''>
                 <img src={b} className='h-80 mt-5 ml-10 ' alt="" />
                  <p className=' pl-20 text-[1.5rem]'>Send Tip Instantly</p>
                  <p className=' h-10 pl-15  text-[1rem]'>Choose amount and send in one click</p>
             </div>
             <div className=''>
                  <img src={p} className='h-80 mt-5 ml-10 ' alt="" />
                  <p className=' pl-20 text-[1.5rem]'>Recieve Transparently</p>
                  <p className=' h-10 pl-15 text-[1rem]'>Track on blockchain forever verified</p>
             </div>
            </div>
        </div>

    </div>
  )
}

export default Wallcon