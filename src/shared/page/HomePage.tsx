import { Link } from 'react-router-dom';
import { ProductsSlide } from '../../products/components';
import { products } from '../../data';
import { CarouselSlide } from '../components';
import { CarouselImage } from '../components/CarouselSlide';

const imgs: CarouselImage[] = [
  {
    src: '/assets/carousel/bohemia-carousel-2.jpg',
    body: '#Artesanal'
  },
  {
    src:  '/assets/carousel/bohemia-carousel-3.jpg',
    body: '#Arte'
  },
  {
    src:  '/assets/carousel/bohemia-carousel-4.jpg',
    body: '#Cultura'
  },
  {
    src:  '/assets/carousel/bohemia-carousel-5.jpg',
    body: '#Tradiciones'
  }
]

export const HomePage = () => {
  return (
    <>
      <div>
        <CarouselSlide imgs={ imgs }/>
      </div>
      <article className="article-about py-10 lg:py-16 bg-gray-50">
          <div className="grid lg:grid-cols-2 gap-8">
              <div className="text-center px-10 lg:px-40 flex flex-col justify-center items-center">
                  <h3 className="text-xl md:text-2xl font-bwmitga-bold uppercase mb-4">Sobre nosotros</h3>
                  <span className="text-sm md:text-base text-gray-400 mb-7">¡Descubre junto a nosotros, nuestro crecimiento por ser un nuevo concepto que está haciendo revolucíon ...</span>
                  <Link
                    to="/nosotros"
                    className="mb-4 uppercase block text-xs py-4 px-6 border border-gray-300 ease-in duration-300 hover:tracking-widest"
                  >
                    Leer más
                  </Link>
              </div>
              <div className="px-10 lg:px-24">
                  <img src="/assets/todas-etiquetas.png" alt="Todas las etiquetas" className="w-5/6 block mx-auto h-auto"/>
              </div>
          </div>
      </article>
      <article className="py-10">
          <div className="uppercase text-center font-bwmitga-regular text-gray-400 mb-2">
            <span className="text-xs">Descubre</span>
          </div>
          <h1 className="uppercase text-xl md:text-2xl text-center font-bwmitga-bold mb-10">Nuestro singanis</h1>
            <ProductsSlide products={ products }/>     
        </article>
        <article className="py-10 article-pinture">
            <div className="flex flex-col justify-center items-center h-full">
                <h3 className="uppercase text-xl md:text-4xl text-center font-bwmitga-bold text-white mb-4">¡Descrubre nustras pinturas!</h3>
                <p className="text-center text-white mb-4">Contempla una impresionante muestra de cuadros de pintura y descubre sus autores</p>
                <Link
                  to="/pinturas"
                  className="uppercase block text-xs py-4 px-6 bg-white ease-in duration-300 hover:tracking-widest"
                >
                  Ver todo las pinturas
                </Link>
            </div>
        </article>
    </>
  )
}
