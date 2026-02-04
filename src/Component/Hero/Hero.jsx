import React,{ useEffect } from  'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import EW from "../../assets/Icons/E-Wallet-bro.svg"
import Swipercarousel from '../Swipercarousel/Swipercarousel'


const Hero = () => {
    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // animation happens once
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div data-aos="fade-up"
       data-aos-anchor-placement="bottom-bottom"
     >
      <div className="w-full flex flex-col lg:grid lg:grid-cols-2  lg:mt-10 sm:mt-5">
        {/* Text Section */}
        <div className="col-span-1 px-20 pt-6 pb-4 sm:px-20 sm:pt-5 md:pl-30 sm:pb-5 lg:pt-25  lg:pl-20  lg:pb-0">
          <p className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] text-blue-500 font-serif">
            Fair <br /> Transparent
          </p>
          <p className="text-[1.2rem]   sm:text-[1.5rem] text-white mt-2">
            A decentralized tipping platform for all
          </p>
        </div>

        {/* Swiper Section */}
        <div className="col-span-1 px-6 pb-6 sm:px-10 sm:pb-5 lg:pr-10 lg:pb-0">
          <Swipercarousel />
        </div>
      </div>
    </div>
  )
}

export default Hero