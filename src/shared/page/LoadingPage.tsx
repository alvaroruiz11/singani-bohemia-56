import { LoaderSpinner } from '../components';


export const LoadingPage = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-stone-950">
        <LoaderSpinner size='3em'/>
    </div>
  )
}
