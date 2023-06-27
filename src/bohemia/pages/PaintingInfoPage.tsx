import { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { AiOutlineZoomIn } from 'react-icons/ai';
import { Container } from '../../shared';
import { getPaintingById } from '../../helpers';
import { PaintingModal } from '../components';


export const PaintingInfoPage = () => {

    const { id = '' } = useParams();

    const [isOpenPaintingModal, setIsOpenPaintingModal] = useState<boolean>(false);


    const painting = useMemo(() => getPaintingById( id ), [ id ]);

    const openModal = () => setIsOpenPaintingModal( true );
    const closeModal = () => setIsOpenPaintingModal( false );

  return (
    <Container>
        <div className="flex justify-center" style={{ height: 450 }}>
            <div className="h-full relative">
                    <img src={`/assets/painting/${ painting?.id }.jpg`} alt={ painting?.title } className='block h-full mx-auto w-auto rounded-sm'/>
                    <button 
                        className="absolute bg-white shadow-xl w-12 h-12 inline-flex -bottom-5 right-4 justify-center items-center rounded-full"
                        onClick={ openModal }
                    >
                        <AiOutlineZoomIn className="text-2xl"/>
                    </button>
            </div>
            <PaintingModal 
                idPainting={ painting?.id || '' } 
                isOpenPaintingModal={ isOpenPaintingModal }
                closeModal={ closeModal }
            />   
        </div>
        <div className="py-10 px-9">
            <hr />
            <div className="mt-4">
                <h2 className="font-medium">{ painting?.title}</h2>
                <p className="text-gray-500">{ painting?.artist.name }</p>
            </div>
            <div className="py-5">
                <p className="sm:columns-2 text-gray-900">
                    { painting?.description }
                </p>
            </div>
            <div className="py-3">
                <p className="font-medium">Detalles</p>
                <ul className="text-sm mt-2 space-y-2">
                    <li className="text-gray-900">
                        <span className="font-medium text-black mr-1">Título:</span>
                        { painting?.title }
                    </li>
                    <li className="text-gray-900">
                        <span className="font-medium text-black mr-1">Artista:</span>
                        <Link
                            to={`/artista/${ painting?.artist.id }`}
                            className="text-blue-600"
                        >
                            { painting?.artist.name }
                        </Link>
                    </li>
                    <li className="text-gray-900">
                        <span className="font-medium text-black mr-1">Técnica:</span>
                        { painting?.method }
                    </li>
                    <li className="text-gray-900">
                        <span className="font-medium text-black mr-1">Ubicación:</span>
                        { painting?.location }
                    </li>
                </ul>
            </div>
        </div>
    </Container>
  )
}


export default PaintingInfoPage;