import React from 'react'
import x from "../../assets/Icons/puzzle-alt.svg"
import y from "../../assets/Icons/shrug-amico.svg"
import h from "../../assets/Icons/merger-amico.svg"
import l from "../../assets/Icons/lightbulb-dollar.svg"
const Procons = () => {
  return (
    <div>
         <div className='  grid grid-cols-2 mt-30'>
            <div className='col-span-1 '> 
                <div className=''>
                   <div className='flex  h-15 mx-50 items-center justify-center gap-4 bg-lime-50 rounded-[20px] '>
                    <img src={x} className='h-10 ' alt="" />
                    <p className='text-[1.5rem]'>PROBLEMS</p>
                 </div> 
                 <div className=''>
       
                    <div className='flex  mt-10'>
                         <div className=' ml-8 '>
                            <p className='text-center text-white text-[1.5rem]'>where are my tips going?</p>
                              <img src={y} className='h-70  ' alt="" />
                         </div>
                         <div className=' pl-10 pr-5'>
                                <div className=' bg-blue-100 text-[1.2rem] mt-5 w-90 text-center pt-2 rounded-[20px] '>
                                  <p>Lack Of Transparency</p>
                                  <p>Tips lost in systems </p>
                              </div>
                                <div className=' bg-blue-100 text-[1.2rem] mt-5 w-90 text-center pt-2 rounded-[20px] '>
                                  <p>Delayed Payments</p>
                                  <p>Wait days for money </p>
                              </div>
                                <div className=' bg-blue-100 text-[1.2rem] mt-5 w-90 text-center pt-2 rounded-[20px] '>
                                  <p>High hidden fees</p>
                                  <p>Platforms take 20-30% </p>
                              </div>
                         </div>
                       
                    </div>
                 </div>
                </div>
            </div>
             <div className='col-span-1 border-l-2 border-[#a5afc7]'> 
                    <div className='col-span-1 '> 
                <div className=''>
                   <div className='flex  items-center justify-center gap-4 h-15 mx-50 rounded-[20px] bg-blue-100 '>
                    <img src={l} className='h-10 ' alt="" />
                    <p className='text-[1.5rem]'>OUR SOLUTION</p>
                 </div> 
                 <div className=' '>
                 
                    <div className=' flex  mt-10'>
                         <div className='ml-10'>
                               <p className='text-center text-white text-[1.5rem]'>Every cent Tracked</p>
                              <img src={h} className='h-70  ' alt="" />
                         </div>
                         <div className=' pl-5 '>
                                <div className='bg-lime-50  text-[1.2rem] mt-5 w-90 text-center pt-2 rounded-[20px] '>
                                  <p>100% Transparency</p>
                                  <p>Blockchain Tracking </p>
                              </div>
                                <div className='bg-lime-50  text-[1.2rem] mt-5 w-90 text-center pt-2 rounded-[20px] '>
                                  <p>Instant Delivery</p>
                                  <p>Tips in less than 3 seconds</p>
                              </div>
                                <div className='bg-lime-50 text-[1.2rem] mt-5 w-90 text-center pt-2 rounded-[20px] '>
                                  <p>Zero hidden fees</p>
                                  <p>Keep 100% of your tips</p>
                              </div>
                         </div>
                       
                    </div>
                 </div>
                </div>
            </div>     
            </div>
         </div>

    </div>
  )
}

export default Procons