import React from 'react'
import x from "../../assets/Icons/puzzle-alt.svg"
import y from "../../assets/Icons/shrug-amico.svg"
import h from "../../assets/Icons/merger-amico.svg"
import l from "../../assets/Icons/lightbulb-dollar.svg"
const Procons = () => {
  return (
    <div>
         <div className='bg-green-500  grid grid-cols-2'>
            <div className='col-span-1 bg-blue-700'> 
                <div className='bg-pink-600'>
                   <div className='flex  items-center justify-center gap-3 bg-blue-500'>
                    <img src={x} className='h-15 ' alt="" />
                    <p className='text-[2rem]'>PROBLEMS</p>
                 </div> 
                 <div className='bg-orange-600  '>
                     <p className='font-serif text-[2rem] text-center mt-'>Confused Creators</p>
                    <div className='bg-cyan-600 flex  mt-5'>
                         <div className=' ml-8 bg-amber-200'>
                            <p className='text-center text-[1.5rem]'>where are my tips going?</p>
                              <img src={y} className='h-70  ' alt="" />
                         </div>
                         <div className='bg-fuchsia-600 pl-10 pr-5'>
                                <div className='bg-lime-600 text-[1.2rem] mt-5 w-90 text-center pt-2 rounded-[20px] '>
                                  <p>Lack Of Transparency</p>
                                  <p>Tips lost in systems </p>
                              </div>
                                <div className='bg-pink-600 text-[1.2rem] mt-5 w-90 text-center pt-2 rounded-[20px] '>
                                  <p>Delayed Payments</p>
                                  <p>Wait days for money </p>
                              </div>
                                <div className='bg-yellow-600 text-[1.2rem] mt-5 w-90 text-center pt-2 rounded-[20px] '>
                                  <p>High hidden fees</p>
                                  <p>Platforms take 20-30% </p>
                              </div>
                         </div>
                       
                    </div>
                 </div>
                </div>
            </div>
             <div className='col-span-1'> 
                    <div className='col-span-1 bg-blue-700'> 
                <div className='bg-pink-600'>
                   <div className='flex  items-center justify-center gap-3 bg-blue-500'>
                    <img src={l} className='h-15 ' alt="" />
                    <p className='text-[2rem]'>OUR SOLUTION</p>
                 </div> 
                 <div className='bg-orange-600  '>
                     <p className='font-serif text-[2rem] text-center mt-'>Happy Creators</p>
                    <div className='bg-cyan-600 flex  mt-5'>
                         <div className='ml-10'>
                               <p className='text-center text-[1.5rem]'>Every cent Tracked</p>
                              <img src={h} className='h-70  ' alt="" />
                         </div>
                         <div className='bg-fuchsia-600 pl-8 '>
                                <div className='bg-lime-600 text-[1.2rem] mt-5 w-90 text-center pt-2 rounded-[20px] '>
                                  <p>100% Transparency</p>
                                  <p>Blockchain Tracking </p>
                              </div>
                                <div className='bg-pink-600 text-[1.2rem] mt-5 w-90 text-center pt-2 rounded-[20px] '>
                                  <p>Instant Delivery</p>
                                  <p>Tips in less than 3 seconds</p>
                              </div>
                                <div className='bg-yellow-600 text-[1.2rem] mt-5 w-90 text-center pt-2 rounded-[20px] '>
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