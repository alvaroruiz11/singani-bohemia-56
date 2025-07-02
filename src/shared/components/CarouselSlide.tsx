import { Pagination, Autoplay } from 'swiper'

import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';
import { FC } from 'react';

export interface CarouselImage {
  src: string;
  body?: string;
  
}

interface Props {
  imgs: CarouselImage[];
  rounded?: 'sm'| 'md'| 'lg'| 'xl'| '2xl'| '3xl';
  shadow?: 'sm'| 'md'| 'lg'| 'xl'| '2xl'| '3xl';
  height?: string;
  
}

export const CarouselSlide: FC<Props> = ({ imgs, rounded = 'none', shadow = 'none', height = '13rem' })  => {
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
        className={'carousel-home h-['+ height+'] '+'sm:h-full'}
      >
        {
          imgs.map((img) => (
            <SwiperSlide key={ img.src }>
              <div className={'h-full relative rounded-'+ rounded}>
                <img src={ img.src } alt="" className={'h-full w-full object-cover object-bottom block rounded-'+rounded + ' shadow-'+ shadow}/>
                { 
                  img.body && 
                    (
                      <div className="absolute left-4 bottom-5 md:left-10 md:bottom-20">
                        <span className="select-none uppercase text-xl md:text-5xl text-white text-carousel">{ img.body }</span>
                      </div>
                    )
                }
                
              </div>
            </SwiperSlide>
          ))
        }
        
      </Swiper>
  )
}
