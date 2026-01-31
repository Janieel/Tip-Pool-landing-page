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
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-105 w-full  rounded-[10px]"
      >
        <SwiperSlide className=" h-full  w-full flex items-center justify-center rounded-[10px]">
           <img src={creat} className='rounded-[10px]' alt="" />
        </SwiperSlide>
        <SwiperSlide className="h-full  w-full flex items-center justify-center">
           <img src={work} className='rounded-[10px]' alt="" />
        </SwiperSlide>
        <SwiperSlide className=" h-full  w-full flex items-center justify-center">
           <img src={form} className='rounded-[10px]' alt="" />
        </SwiperSlide>
         <SwiperSlide className=" h-full  w-full flex items-center justify-center">
           <img src={dev} className='rounded-[10px]' alt="" />
        </SwiperSlide>
         <SwiperSlide className="h-full  w-full flex items-center justify-center">
           <img src={pay} className='rounded-[10px]' alt="" />
        </SwiperSlide>
         <SwiperSlide className=" h-full  w-full flex items-center justify-center">
           <img src={wall} className='rounded-[10px]' alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
