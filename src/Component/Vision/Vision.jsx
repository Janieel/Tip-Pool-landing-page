import React,{ useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import v from "../../assets/Pictures/vision.png"
import m from "../../assets/Pictures/mission.png"

const Vision = () => {
      useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true, // animation happens once
          easing: 'ease-in-out',
        });
      }, []); 
  
  
  return (
       
    <div>
         <div  data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom" 
            className=' text-white  '>
             <div className='h-40  flex items-center justify-center mb-10 '>
                 <div className=''>
                    <p className='text-[2rem] sm:text-[3rem] text-center font-semibold'>Our Vision And Impact</p>  
                    <p className='text-[1rem] text-center sm:text-[1.5rem]'> Shaping the future of tipping, today </p>
                </div>   
             </div>
             <div className=' flex-col md:grid grid-cols-2  gap-4 px-5'>
                  <div className='col-span-1'>

                      <img src={v} alt="" />
                      <p className='sm:text-[1.5rem] text-[1rem] text-green-500 text-center mt-5'> Open Tipping</p>
                      <p className='sm:text-[1rem] text-[0.9rem] text-center mt-5'> 
                         Tip-Pool aims to create an open and fair digital tipping ecosystem that empowers users, promotes transparency,
                         and encourages seamless transactions across various platforms and services worldwide.
                      </p>
                    </div>
                  <div className='col-span-1 mt-10 md:mt-0'>
                    <div >
                      <img src={m} alt="" />
                      <p className='sm:text-[1.5rem] text-[1rem] text-green-500 text-center mt-5'>75% Increase in User Engagement</p>
                         
                      <p className='sm:text-[1rem] text-[0.9rem]  text-center mt-5'>Implementing Tip-Pool can lead to a 75% increase in user engagement, benefitting 
                        creators and service workers by fostering transparent interactions and promoting a supportive
                         community                
                      </p>
                     </div> 
                  </div>
             </div>
         </div>

    </div>
  )
}

export default Vision