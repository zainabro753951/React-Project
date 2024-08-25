/** @format */
"use client"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function ClientReview() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className='mySwiper'>
        <SwiperSlide>
          <div className="w-1/2 h-1/2 bg-red-500">
            <div className="w-[40px] h-[40px]">
              <img className="w-[40px] h-[40px]" src="/img/Clients/client1.jpg" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="w-1/2 h-1/2 bg-red-500">
            <div className="w-[40px] h-[40px]">
              <img className="w-[40px] h-[40px]" src="/img/Clients/client1.jpg" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="w-1/2 h-1/2 bg-red-500">
            <div className="w-[40px] h-[40px]">
              <img className="w-[40px] h-[40px]" src="/img/Clients/client1.jpg" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="w-1/2 h-1/2 bg-red-500">
            <div className="w-[40px] h-[40px]">
              <img className="w-[40px] h-[40px]" src="/img/Clients/client1.jpg" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="w-1/2 h-1/2 bg-red-500">
            <div className="w-[40px] h-[40px]">
              <img className="w-[40px] h-[40px]" src="/img/Clients/client1.jpg" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          
        </SwiperSlide>
        <SwiperSlide>
          
        </SwiperSlide>
        <SwiperSlide>
          
        </SwiperSlide>
        <SwiperSlide>
          
        </SwiperSlide>
      </Swiper>
    </>
  );
}
