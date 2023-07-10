import { FC } from 'react';
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import "swiper/css/pagination";


// import required modules

import { ProductCard } from '.';
import { type Product } from '../../data';
interface Props {
  products: Product[];
}

export const ProductsSlide: FC<Props> = ({ products }) => {
  return (
    <Swiper
        pagination={{
          clickable: true
        }}
        breakpoints={{
            '980': {
                slidesPerView: 5,
                spaceBetween: 50
            },
            '778': {
                slidesPerView: 4,
                spaceBetween: 100
            },
            '568': {
              slidesPerView: 3,
              spaceBetween: 100
            },
            '300': {
              slidesPerView: 1,
              spaceBetween: 150
            }
        }}
        modules={[ Navigation, Pagination ]}
        navigation
        className="mySwiper"
      >
        {
            products.map( product => (
                <SwiperSlide key={ product.id }>
                    <ProductCard product={ product }/>
                </SwiperSlide>
            ))
        }
      </Swiper>
  )
}
