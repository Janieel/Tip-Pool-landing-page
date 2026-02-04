import React from 'react'
import ph from "../../assets/Icons/Phone.svg"
import ev from "../../assets/Icons/envelopes.svg"


const Footer = () => {
  return (
    <div>
           <div className='  mt-40 px-5 '>
              <div className='  mt-20 text-[1.5rem] md:text-[2rem] flex items-center justify-center '>
                <a href="https://tip-pool.vercel.app/" target="_blank"rel="noopener noreferrer"
                  className=' h-15 mb-5 bg-gradient-to-r from-cyan-500 to-emerald-500  w-[80%] sm:w-[60%] lg:w-[40%] rounded-[10px] hover:underline
                  flex items-center justify-center' 
                > 

                   Visit Tip-Pool Platform
            
                </a> 
              </div> 
              <div className=' flex items-center justify-center '> 
                 <div className='w-[80%] '>
                     <div id='contact' className=' text-[2rem] text-center  text-white '>Contact Us </div>
                      <div className='flex flex-col md:flex-row gap-4 md:gap-10 items-center justify-center p-4 md:p-6'>
                        
                        {/* Phone */}
                        <div className='flex items-center justify-center gap-2 bg-white px-4 text-black py-3 rounded-lg w-full md:w-auto min-w-[250px]'> 
                           <img src={ph} className='h-6 md:h-8 flex-shrink-0' alt="phone icon" />
                           <p className='text-sm md:text-base whitespace-nowrap'>+254721205874</p>
                        </div>

                        {/* Email */}
                        <div className='flex items-center justify-center gap-2  bg-white px-4 py-3 rounded-lg w-full md:w-auto min-w-[250px]'>
                           <img src={ev} className='h-6 md:h-8 flex-shrink-0' alt="email icon" />
                           <p className='text-sm md:text-base break-all md:whitespace-nowrap'>tip-pool@gmail.com</p>
                        </div>
                        
                        </div>

                 </div>
                 
               </div>  
                <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent mb-8" />

                     {/* Bottom Section */}
                     <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500 mb-10">
                         <div className='flex justify-center items-center  w-full'>
                              <div className="flex justify-center items-center gap-2 text-white">
                              <p>© {new Date().getFullYear()} Tip-Pool. All rights reserved.</p>
                                 <span className="hidden md:inline">•</span>
                                 <p className="hidden md:inline">Built with ❤️ on the blockchain</p>
                              </div>
                         </div>
                     </div>
           
           </div>
      

    </div>
  )
}

export default Footer