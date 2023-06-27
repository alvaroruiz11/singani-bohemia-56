import { Container } from '../../shared';


export const AboutPage = () => {
  return (
      <Container>
        <div>
          <div className="uppercase text-center font-bwmitga-regular text-gray-400 mb-2">
            <span className="text-xs">Descubre</span>
          </div>
            <h1 className="uppercase text-2xl md:text-3xl text-center font-bwmitga-bold mb-20">Sobre nosotros</h1>
        </div>
        <article className="mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="">
                    <img src="/assets/roberto-ruiz.jpg" alt="Roberto Ruiz Catoira" className="h-auto w-full rounded shadow-sm"/>
                </div>
                <div className="flex items-center justify-center px-10">
                    <div className="text-center lg:text-left lg:w-2/3 lg:mx-auto">
                       <div className="mb-5">
                          <h3 className="text-xl font-bwmitga-bold uppercase">
                            ¿Cómo nació Singani Bohemia 56?
                          </h3>
                       </div>
                       <div>
                          <p className="font-bwmitga-light text-base">
                            Apasionado desde muy joven de nuestra bebida nacional (el singani) nuestro fundador Roberto Ruiz Catoira, comenzó a estudiar a sus 21 años la producción de singanis y vinos en el pueblo de Calamuchita, Municipio de Uriondo, Departamento de Tarija; teniendo la meta muy clara de lanzar su propia marca de singani.
                            <br/>Amante y aficionado de la música y cultura autóctona de Bolivia creó la marca <span>Singani Bohemia 56</span>, con el enfoque de apoyar y promocionar a toda expresión cultural y artística de nuestro país, siendo el término Bohemia con definición de un grupo o movimiento cultural. Y el 56, homenaje a su amada madre, la Prof. María Elena Catoira López, siendo su año de nacimiento el 1956. 
                          </p>
                       </div>
                    </div>
                </div>
            </div>
        </article>
        <article className="py-5 mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="flex items-center justify-center px-10">
                    <div className="text-center lg:text-left lg:w-2/3 lg:mx-auto">
                       <div className="mb-5">
                          <h3 className="text-xl font-bwmitga-bold uppercase">
                            Nosotros
                          </h3>
                       </div>
                       <div>
                          <p className="font-bwmitga-light text-base">
                            Consolidarnos como la marca líder en el mercado de singanis artesanales, conquistando a nuestros consumidores con nuestros productos de alta calidad y responsabilidad social empresarial.
                          </p>
                       </div>
                    </div>
                </div>
                <div className="px-5">
                    <img src="/assets/todas-etiquetas.png" alt="Roberto Ruiz Catoira" className="h-auto w-full rounded shadow-sm"/>
                </div>
            </div>
        </article>
        <article className="py-5 mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="px-5 h-96">
                    <img src="/assets/painting/bolivia-magica.jpg" alt="Roberto Ruiz Catoira" className="h-96 w-auto mx-auto rounded shadow-sm"/>
                </div>
                <div className="flex items-center justify-center px-10">
                    <div className="text-center lg:text-left lg:w-2/3 lg:mx-auto">
                       <div className="mb-5">
                          <h3 className="text-xl font-bwmitga-bold uppercase">
                            Mision
                          </h3>
                       </div>
                       <div>
                          <p className="font-bwmitga-light text-base">
                            Singani Bohemia 56 está enfocado en brindar experiencias únicas a nuestros consumidores a través de nuestros singanis 100% artesanales. Mostrando un producto de alta calidad como también el compromiso en apoyar y difundir toda expresión cultural y artística boliviana.
                          </p>
                       </div>
                    </div>
                </div>
            </div>
        </article>
      </Container>
  )
}

export default AboutPage;