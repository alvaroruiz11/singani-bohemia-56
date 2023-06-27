import { Link } from 'react-router-dom';
import { Container } from '../../shared';

import { CarouselHome, ProductsSlide } from '../components'
import { products } from '../../data';



export const HomePage = () => {
  return (
    <>
      <div>
        <CarouselHome/>
      </div>
        <article className="py-16">
          {/* Nustros singanis */}
            <div className="uppercase text-center font-bwmitga-regular text-gray-400 mb-2">
              <span className="text-xs">Descubre</span>
            </div>
            <h1 className="uppercase text-2xl md:text-3xl text-center font-bwmitga-bold mb-20">Nuestro singanis</h1>
            <ProductsSlide products={ products }/>     
            <div className="flex justify-center">
                <Link
                  to={"/"}
                  className="uppercase block text-xs py-4 px-6 border border-gray-300 ease-in duration-300 hover:tracking-widest"
                >
                  Ver todo nuestros singanis
                </Link>
            </div>
          
        </article>
        <article className="article-about">
          {/* sobre nosotros */}
          <div className="bg w-full h-full">
            <div className="flex justify-center items-center h-full flex-col px-10 lg:px-0">
              <h1 className="text-white uppercase text-3xl lg:text-5xl text-center font-bwmitga-bold mb-5 shadow">Sobre nosotros</h1>
              <p className="text-white text-center text-base lg:text-lg font-medium inline-block mb-10 shadow">¡Descubre junto a nosotros, nuestro crecimiento por ser un nuevo concepto que está haciendo revolución ...</p>
              <Link
                  to="/nosotros"
                  className="uppercase block text-xs py-4 px-6 border bg-white text-black font-medium shadow ease-in duration-300 hover:tracking-widest"
                >
                  Descubre sobre nosotros
                </Link>
            </div>
          </div>
        </article>
        <article className="py-16">
          <Container>
            <div className="article-pinture flex justify-start items-center">
                <div className="p-12 bg-white w-full lg:w-6/12 ml-0 lg:ml-20">
                <div className="uppercase text-center lg:text-start font-bwmitga-regular text-gray-400 mb-1">
                  <span className="text-xs">Descubre</span>
                </div>
                  <h1 className="uppercase text-3xl text-center lg:text-start font-bwmitga-bold mb-5">Pinturas</h1>
                  <p className="font-bwmitga-light text-center lg:text-start mb-6 text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum cum adipisci nulla nam aspernatur laborum sint mollitia id magnam porro quis.
                  </p>
                  <div className="flex justify-center lg:justify-start">
                  <Link
                  to={"/"}
                  className="uppercase block text-xs py-4 px-6 text-center lg:text-start font-bwmitga-regular ease-in duration-300 hover:tracking-widest"
                >
                  Aprende mas de nuestro arte
                </Link>

                  </div>
                </div>
            </div>
          </Container>
          {/* pinturas */}
        </article>
    </>
  )
}


export default HomePage