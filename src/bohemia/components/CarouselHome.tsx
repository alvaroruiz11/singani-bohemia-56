import { Pagination, Autoplay } from 'swiper'

import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';

export const CarouselHome = () => {
  return (
    <Swiper
      autoplay={{
        delay: 4500,
        // disableOnInteraction: false,
        waitForTransition: false
      }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        className="carousel-home"
      >
        <SwiperSlide>
          <div className="h-full relative">
            <img src="/assets/carousel/bohemia-carousel-2.jpg" alt="" className="h-full w-full object-cover object-bottom block"/>
            <div className="absolute left-4 bottom-14 md:left-10 md:bottom-20">
              <span className="select-none uppercase text-4xl md:text-5xl text-white text-carousel">#Artesanal</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full relative">
            <img src="/assets/carousel/bohemia-carousel-3.jpg" alt="" className="h-full w-full object-cover object-bottom block"/>
            <div className="absolute left-4 bottom-14 md:left-10 md:bottom-20">
              <span className="select-none uppercase text-4xl md:text-5xl text-white text-carousel">#Arte</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full relative">
            <img src="/assets/carousel/bohemia-carousel-4.jpg" alt="" className="h-full w-full object-cover object-bottom block"/>
            <div className="absolute left-4 bottom-14 md:left-10 md:bottom-20">
              <span className="select-none uppercase text-4xl md:text-5xl text-white text-carousel">#Cultura</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full relative">
            <img src="/assets/carousel/bohemia-carousel-5.jpg" alt="" className="h-full w-full object-cover object-bottom block"/>
            <div className="absolute left-4 bottom-14 md:left-10 md:bottom-20">
              <span className="select-none uppercase text-4xl md:text-5xl text-white text-carousel">#Tradiciones</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
  )
}
