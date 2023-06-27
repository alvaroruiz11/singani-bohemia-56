import { FC } from 'react';
import { EffectFade, Navigation, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';




interface Props {
   imgs: string[]; 
}

export const ProductImageSlide:FC<Props> = ({ imgs }) => {
  return (
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation
          centeredSlides
          autoplay={{
            delay: 4500,
            // disableOnInteraction: false,
            waitForTransition: false
          }}
          modules={[EffectFade, Navigation, Autoplay ]}
          className="mySwiperProduct"
        >
            {
              imgs.map( img => (
                <SwiperSlide key={ img }>
                    <div style={{ height: 450 }}>
                      <img src={ img } loading="lazy" className="h-full block mx-auto rounded"/>
                    </div>
                </SwiperSlide>
              ))
            }
        </Swiper>
  )
}
