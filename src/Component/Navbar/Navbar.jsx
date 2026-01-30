import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className=' h-20 bg-pink-300 grid grid-cols-4 font-serif'>
            <div className='col-span-1 bg-green-400  text-[2rem] flex items-center justify-center'>
                <p>Tip-Pool</p>
            </div>  
             <div className='col-span-2 bg-fuchsia-600 flex items-center justify-center'>
               <div className='bg-amber-600 w-full h-15 mx-10 flex items-center justify-around text-[1rem] rounded-[10px]'> 
                 <p>Features</p>  <p>How It Works</p>  <p>Roadmap</p>
              </div> 
            </div> 
             <div className='col-span-1 bg-green-400 font-serif text-[1.5rem] flex items-center justify-center'>
                <button className='bg-amber-600 h-12 w-40 rounded-[10px]' >Contact Us</button>
            </div>  
        </div>
    </div>
  )
}

export default Navbar