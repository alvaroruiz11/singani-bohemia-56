import { Outlet } from "react-router-dom"


export const AuthLayout = () => {
  return (
    <>
      <div 
        className="bg-auth w-screen h-screen fixed top-0 left-0 flex justify-center items-center flex-col px-4"
      >
        {/* <div className="w-80 mx-auto text-gray-200 font-bwmitga-bold transition-all duration-300">
          <h1 className="text-center uppercase text-base sm:text-lg">
            Para acceder a la web, debes ser mayor de edad para la compra y consumo de bebidas alcohólicas
          </h1>
        </div> */}
        
        <div className="auth-container">
          <img src="./assets/logo.png" alt="Singani Bohemia 56" className="w-44 h-auto block mx-auto mb-5"/>
          <hr className="border-gray-400"/>
          <div className="py-10">
            <p className="text-center text-gray-100">Para ingresar a este sitio web, debes ser mayor de edad.</p>
            <p className="text-center text-gray-100 text-3xl font-medium mt-3">¿Tienes más de 18 años?</p>
            <div>
              <Outlet/>
            </div>
          </div>
          <hr className="border-gray-400"/>
          <p className="mt-5 font-semibold text-lg text-center text-white">#PorUnaVidaBohemia</p>
        </div>
        <div className="bg-primary w-full text-xs text-center px-4 py-2 font-medium text-gray-900 absolute bottom-0">
            <p><span className="text-black font-bold">Singani Boheami 56</span> recomienda el consumo responsable. Alc 40% Vol. © 2021. Todos los derechos reservados. No compartas este contenido con personas que no tengan la edad legal para consumir alcohol.</p>
        </div>
      </div>
    </>
  )
}
