import { BiLoaderAlt } from 'react-icons/bi'

export const LoadingPage = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center flex-col">
        <BiLoaderAlt className="loader text-3xl mb-3 text-primary"/>
        <span className="font-bwmitga-bold text-xl">Cargando...</span>
    </div>
  )
}
