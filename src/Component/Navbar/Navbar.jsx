import React from 'react'

const Navbar = () => {
  return (
       <div >
        <div className=' h-20 grid grid-cols-2 md:grid-cols-4 font-serif pt-5'
        
          style={{ background: 'linear-gradient(135deg, #050605 10%, #223d2b 50%, #04111c 90%, #050506 100%, #191b19 100%)' }}
         >
            <div className='col-span-1   text-[2rem] flex items-center justify-center '>
                <p className='text-lime-400'>Tip-Pool</p>
            </div>  
             <div className='hidden md:col-span-2 md:flex items-center justify-center'>
               <div className='bg-lime-400 w-full h-15 mx-10 flex items-center justify-around text-[1.2rem] rounded-[10px]'> 
                 <a href="#feautures"> Features</a>
                  <a href="#hows">How It Works </a>
                 <a href="#map">Roadmap</a>
              </div> 
            </div> 
             <div className='col-span-1  font-serif text-[1rem] sm:text-[1.5rem] flex items-center justify-center'>
                <button className=' h-10 w-30  sm:h-12  sm:w-40 rounded-[10px] bg-lime-400' > 
                   <a href="#contact">Contact Us</a>
                </button>
            </div>  
        </div>
    </div>
  )
}

export default Navbar