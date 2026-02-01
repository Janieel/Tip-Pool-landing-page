import React from 'react'
import x from "../../assets/Icons/puzzle-alt.svg"
import y from "../../assets/Icons/Shrug-amico.svg"
import h from "../../assets/Icons/merger-amico.svg"
import l from "../../assets/Icons/lightbulb-dollar.svg"
const Procons = () => {
  return (
       <div>
         <div className='  grid grid-cols-1 lg:grid-cols-2 mt-30 lg:flex-col '>
            <div className='col-span-1 md:pl-20 lg:pl-0'> 
                <div className='' >
                 <div className=' flex items-center   '>
                     <div className='flex     h-15 mx-auto  items-center justify-center gap-4 md:w-[60%] bg-lime-50 rounded-[20px]  w-[80%] lg:w-[70%]'> 
                    <img src={x} className='h-10 ' alt="" />
                    <p className='text-[1.5rem]'>PROBLEMS</p>
                    </div> 
                 </div>
                   <div className=''>
       
                    <div className='flex flex-col sm:flex-row  mt-10 lg:flex-col lg:items-center xl:flex-row xl:items-center'>
                         <div className=' ml-4 sm:ml-8 '>
                            <p className='text-center text-white text-[1.5rem]'>where are my tips going?</p>
                              <img src={y} className='h-70 mx-auto sm:mx-0 ' alt="" />
                         </div>
                         <div className=' pl-4  sm:pl-10 sm:pr-5 '>
                               <div className=' flex items-center justify-center '>
                                <div className=' bg-blue-100 text-[1.2rem] mt-5 w-70 sm:w-90 text-center  rounded-[20px] '>
                                  <p>Lack Of Transparency</p>
                                  <p>Tips lost in systems </p>
                              </div>
                               </div>
                                <div className=' flex items-center justify-center'>
                                  <div className=' bg-blue-100 text-[1.2rem] mt-5 w-70 sm:w-90 text-center pt-2 rounded-[20px] '>
                                    <p>Delayed Payments</p>
                                    <p>Wait days for money </p>
                                 </div>
                               </div>
                                <div className=' flex items-center justify-center'>
                                    <div className=' bg-blue-100 text-[1.2rem] mt-5  w-70 sm:w-90 text-center pt-2 rounded-[20px] '>
                                      <p>High hidden fees</p>
                                      <p>Platforms take 20-30% </p>
                                    </div>
                                </div>
                                  
                              
                         </div>
                       
                    </div>
                 </div>
                </div>
            </div>
             <div className='col-span-1  lg:border-t-0 lg:border-l-2 border-[#a5afc7] mt-10 lg:mt-0'> 
               <div className='col-span-1 md:pl-20 lg:pl-0'> 
                <div className=''>
                   <div className='flex items-center  '>
                      <div className='flex   items-center justify-center gap-4 h-15 mx-auto  rounded-[20px] md:w-[60%] bg-blue-100 w-[80%] lg:w-[70%]'> 
                      <img src={l} className='h-10 ' alt="" />
                      <p className='text-[1.5rem]'>OUR SOLUTION</p>
                  </div> 
                   </div>
                 <div className=' '>
                 
                    <div className=' flex flex-col sm:flex-row  mt-10 lg:flex-col lg:items-center xl:flex-row xl:items-center'>
                         <div className='ml-4 sm:ml-8  '>
                               <p className='text-center text-white text-[1.5rem]'>Every cent Tracked</p>
                              <img src={h} className='h-70 mx-auto sm:mx-0' alt="" />
                         </div>
                         <div className=' pl-4 sm:pl-10 sm:pr-5 mt-5 sm:mt-0'>
                             <div className=' flex items-center justify-center'>
                                <div className='bg-lime-50  text-[1.2rem] mt-5 w-70 sm:w-90 text-center pt-2 rounded-[20px] '>
                                  <p>100% Transparency</p>
                                  <p>Blockchain Tracking </p>
                                </div>
                             </div>
                              <div className=' flex items-center justify-center'>
                                  <div className='bg-lime-50  text-[1.2rem] mt-5 w-70 sm:w-90 text-center pt-2 rounded-[20px] '>
                                    <p>Instant Delivery</p>
                                    <p>Tips in less than 3 seconds</p>
                                </div>
                              </div>
                               <div className=' flex items-center justify-center'>
                                <div className='bg-lime-50 text-[1.2rem] mt-5 w-70 sm:w-90 text-center pt-2 rounded-[20px] '>
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

    </div>
  )
}

export default Procons