'use client'
import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import Cards from './cards';
import NewCard from '../Auctions/create-auction';

interface Props{
    isNew:boolean;
}

export default function App() {
  return (
    <>
      <Swiper
      breakpoints={{
        325:{
          spaceBetween: 25,
          slidesPerView: 1,
        },
        425: {
          spaceBetween: 25,
          slidesPerView: 1,
        },
        768: {
          spaceBetween: 25,
          slidesPerView: 2,
        },
        1024: {
          spaceBetween: 25,
          slidesPerView: 2.75,
        },
        1440: {
          spaceBetween: 25,
          slidesPerView: 3.5,
        },
        1920: {
          spaceBetween: 25,
          slidesPerView: 5,
        },
      }}
      slidesPerView='auto'
      loop={true}
      spaceBetween={25}
     
      
      className="mySwiper"
    > 
    
        <SwiperSlide><Cards/></SwiperSlide>
        <SwiperSlide><Cards/></SwiperSlide>
        <SwiperSlide><Cards/></SwiperSlide>
        <SwiperSlide><Cards/></SwiperSlide>
        <SwiperSlide><Cards/></SwiperSlide>
        <SwiperSlide><Cards/></SwiperSlide> 
        <SwiperSlide><Cards/></SwiperSlide> 
      </Swiper>
    </>
  );
}