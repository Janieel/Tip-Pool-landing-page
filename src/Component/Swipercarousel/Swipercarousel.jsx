import React from 'react';
import creat from "../../assets/Pictures/Creator.png"
import work from "../../assets/Pictures/Workers.png"
import form from "../../assets/Pictures/Platform.png"
import dev from "../../assets/Pictures/Dev.png"
import pay from "../../assets/Pictures/Pay.png"
import wall from "../../assets/Pictures/wallet.png"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const SwiperCarousel = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="
                 w-full
              rounded-[10px]
              overflow-hidden

              h-[250px]
              sm:h-[300px]
              md:h-[380px]
              lg:h-[390px]
              xl:h-[470px]

             pb-10

        
        "
      >
        <SwiperSlide className=" h-full   w-full flex items-center justify-center  rounded-[10px]">
           <img src={creat} className='rounded-[10px] h-full w-full object-contain ' alt="" />
        </SwiperSlide>
        <SwiperSlide className="h-full  w-full flex items-center justify-center">
           <img src={work} className='rounded-[10px] h-full w-full object-contain ' alt="" />
        </SwiperSlide>
        <SwiperSlide className=" h-full  w-full flex items-center justify-center">
           <img src={form} className='rounded-[10px] h-full w-full object-contain ' alt="" />
        </SwiperSlide>
         <SwiperSlide className=" h-full  w-full flex items-center justify-center">
           <img src={dev} className='rounded-[10px] h-full w-full object-contain ' alt="" />
        </SwiperSlide>
         <SwiperSlide className="h-full  w-full flex items-center justify-center">
           <img src={pay} className='rounded-[10px] h-full w-full object-contain ' alt="" />
        </SwiperSlide>
         <SwiperSlide className=" h-full  w-full flex items-center justify-center">
           <img src={wall} className='rounded-[10px] h-full w-full object-contain ' alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
