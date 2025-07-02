import { Link } from 'react-router-dom';
import { Container } from '..';
import { CarouselSlide } from '../components';
import { FaWhatsapp } from 'react-icons/fa';
import { CarouselImage } from '../components/CarouselSlide';

const imgs: CarouselImage[] = [
    { src: '/assets/personalized/2.jpeg',},
    {  src: '/assets/personalized/3.jpeg',},
    {  src: '/assets/personalized/4.jpeg',},
    {  src: '/assets/personalized/6.jpeg',},
    {  src: '/assets/personalized/7.jpeg',},
    {  src: '/assets/personalized/8.jpeg',},
    {  src: '/assets/personalized/9.jpeg',},
    {  src: '/assets/personalized/10.jpeg',}
]

export const PersonalizedPage = () => {
  return (
    <Container>
        <div>
            <div className="uppercase text-center font-bwmitga-regular text-gray-400 mb-2">
                <span className="text-xs">Descubre nuestras</span>
            </div>
            <h1 className="uppercase text-2xl md:text-3xl text-center font-bwmitga-bold">Botellas Personalizadas</h1>
        </div>
        <section className="mt-6">
            <p className="mb-3 text-gray-900">
                Con gran emoción, Singani Bohemia 56 presenta su innovadora oferta de botellas personalizadas para eventos, una experiencia única que transformará tus ocasiones especiales. Colaboramos con destacados artistas plásticos bolivianos para crear pinturas conmemorativas exclusivas para eventos como bodas, quinceañeras, bautizos, aniversarios, graduaciones, elecciones, y más.
            </p>
            <p className="mb-3 text-gray-900">
                Nuestra 
                 <Link
                    to="/nosotros"
                    className="text-blue-600 underline"
                > misión </Link> 
                 es promover y respaldar a los artistas bolivianos, y no cobramos comisiones por la conexión con nuestros talentosos creadores. Trabajamos estrechamente con una red de artistas nacionales para garantizar que tu evento sea memorable y único.
            </p>
        </section>
        <section className="my-10 w-9/12 md:w-2/6 mx-auto">
            <CarouselSlide imgs={ imgs } rounded="sm" shadow="md" height="25rem"/>
            <p className="mt-4 text-sm">
                Por:
                <Link
                    to="/pinturas/artista/milka-ines-ponce-subia"
                    className="text-blue-600 underline mt-2"
                >Milka Inés Ponce Subia</Link>
            </p>
        </section>
        <section>
            <p className="mb-3 text-gray-900">
                La cotización de la pintura personalizada depende de varios factores, incluido el tamaño de la obra (opciones desde 40x30 cm hasta 60x80 cm) y la técnica utilizada (acrílico, óleo, pastel o mixta). Todas nuestras obras se entregan en bastidor, enmarcadas con un marco de color neutro que se adapta a cualquier decoración.
            </p>
            <p className="mb-3 text-gray-900">
                Además de la pintura, también cotizamos nuestras botellas de Singani, que puedes elegir entre nuestro 
                <Link 
                    to="/productos/singani-premium-1"
                    className="text-blue-600  underline"
                > Singani Premium </Link> (con tapas doradas) o nuestro 
                <Link 
                to="/productos/singani-clasico-1"
                className="text-blue-600  underline"
            > Singani Clásico </Link> (con tapas plateadas).
                
            </p>
            <p className="mb-3 text-gray-900">
                Para obtener más detalles y cotizaciones personalizadas, contáctanos a través de nuestro:
                <a href="https://api.whatsapp.com/send?phone=59160279812" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-blue-600  underline ml-2 inline-block"
                >
                    <span className="inline-flex justify-center items-center gap-2">
                        <FaWhatsapp className="text-xl"/>
                        (+591) 60279812
                    </span>
                </a>
                
            </p>
            <p className="mb-3 text-gray-900">
                Hagamos que tus eventos sean aún más memorables con nuestras botellas personalizadas llenas de arte. ¡Celebremos juntos la creatividad y la belleza en cada ocasión especial!
            </p>
        </section>
        <section className="my-10">
            <iframe 
                className="w-full h-64 md:h-96"
                src="https://www.youtube.com/embed/Vd5NzUA9tIc?si=e41T6TwwkV8vnvKZ" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen></iframe>
        </section>
    </Container>
  )
}
