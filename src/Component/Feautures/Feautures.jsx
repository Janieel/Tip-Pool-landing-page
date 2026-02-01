import React from 'react'
import s from "../../assets/Icons/E-Wallet-bro.svg"
import r from "../../assets/Icons/payments-bro.svg"
import t from "../../assets/Icons/transactions-rafiki.svg"
import p from "../../assets/Icons/Programmer-rafiki.svg"
import c from "../../assets/Icons/collaboration-amico.svg"

const Feautures = () => {
  return (
    <div>

         <div className=' mt-15 '>
              <p className=' text-center text-[2.5rem] mx-5 sm:mx-0 text-white font-extrabold font-serif'>Why Choose Tip-Pool?</p>
              <p className='text-center text-[1.5rem]  mx-5 sm:mx-0 text-white'>Cutting-Edge Features for Everyone</p>
              <div className="flex items-center w-full gap-5  mt-10 px-5 md:px-20  "> 
                 <ul className=' w-full flex gap-4 overflow-x-scroll '>
                      <li className='  px-5  w-[300px]  sm:w-[360px]  rounded-t-[20px] bg-blue-100 pt-5 flex-shrink-0' >
                           
                           <div className=' w-full h-70 flex items-center justify-center'> 
                               <img src={s} className='h-full w-full  px-0' alt="" />
                          </div>
                            <p className='text-center text-black font-semibold text-[1.2rem]'>Simple Wallets</p>
                            <p className='text-center mt-2 text-black'>Users can easily manage their funds with a user-friendly interface.</p>
                          
                      </li>
                      <li className='  px-5 w-[300px]  sm:w-[360px]  rounded-t-[20px]  bg-blue-100 pt-5 flex-shrink-0' >
                           
                           <div className=' w-full h-70 flex items-center justify-center'> 
                               <img src={r} className='h-full w-full' alt="" />
                          </div>
                            <p className='text-center text-black font-semibold text-[1.2rem]'>Instant Tipping</p>
                            <p className='text-center mt-2 text-black'>Instant TippingTips are sent and received instantly in a seamless experience..</p>
                          
                      </li>
                      <li className='  px-5  w-[300px]  sm:w-[360px]  rounded-t-[20px]  bg-blue-100 pt-5 flex-shrink-0' >
                           
                           <div className=' w-full h-70 flex items-center justify-center'> 
                               <img src={t} className='h-full w-full' alt="" />
                          </div>
                            <p className='text-center text-black font-semibold text-[1.2rem]'>Built-in Transparency</p>
                            <p className='text-center mt-2 text-black'>Built-in Transparency Every transaction is recorded transparently on the blockchain.</p>
                          
                      </li>
                       <li className='  px-5  w-[300px]  sm:w-[360px]  rounded-t-[20px]  bg-blue-100 pt-5 flex-shrink-0' >
                           
                           <div className=' w-full h-70 flex items-center justify-center'> 
                               <img src={p} className='h-full w-full' alt="" />
                          </div>
                            <p className='text-center text-black font-semibold text-[1.2rem]'>Developers API's</p>
                            <p className='text-center mt-2 text-black'>APIs are available for easy integration into various platforms.</p>
                          
                      </li>
                      <li className='  px-5  w-[300px]  sm:w-[360px]  rounded-t-[20px]  bg-blue-100 pt-5 flex-shrink-0' >
                           
                           <div className=' w-full h-70 flex items-center justify-center'> 
                               <img src={c} className='h-full w-full' alt="" />
                          </div>
                            <p className='text-center text-black font-semibold text-[1.2rem]'>Web3 </p>
                            <p className='text-center mt-2 text-black'>Web3 ReadyFully compatible with Web3 technologies and decentralized applications..</p>
                          
                      </li>
                      
                  </ul>
                 
             
                    
               
               
              </div>
         </div>
    </div>
  )
}

export default Feautures