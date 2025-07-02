import { useMemo, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import { AiOutlineZoomIn } from 'react-icons/ai';
import { GrFormPreviousLink } from 'react-icons/gr';

import { Container } from '../../shared';
import { getPaintById } from '../../helpers';
import { PaintModal } from '../components';

export const PaintPage = () => {
  const { id = '' } = useParams();
  const navigate = useNavigate();

  const [isOpenPaintingModal, setIsOpenPaintingModal] =
    useState<boolean>(false);

  const painting = useMemo(() => getPaintById(id), [id]);

  const openModal = () => setIsOpenPaintingModal(true);
  const closeModal = () => setIsOpenPaintingModal(false);

  return (
    <Container>
      <button
        className="inline-flex justify-center items-center bg-white rounded-full w-8 h-8 shadow transition-all duration-300 mb-4"
        onClick={() => navigate(-1)}
      >
        <GrFormPreviousLink className="text-2xl" />
      </button>
      <div className="flex justify-center" style={{ height: 450 }}>
        <div className="h-full relative">
          <img
            src={`/assets/paints/${painting?.id}.jpg`}
            alt={painting?.title}
            className="block h-full mx-auto w-auto rounded-sm object-cover"
          />
          <button
            className="absolute bg-white shadow-xl w-12 h-12 inline-flex -bottom-5 right-4 justify-center items-center rounded-full"
            onClick={openModal}
          >
            <AiOutlineZoomIn className="text-2xl" />
          </button>
        </div>
        <PaintModal
          idPainting={painting?.id || ''}
          isOpenPaintingModal={isOpenPaintingModal}
          closeModal={closeModal}
        />
      </div>
      <div className="py-10 px-4 md:px-9">
        <hr />
        <div className="mt-4">
          <h2 className="font-medium">{painting?.title}</h2>
          <p className="text-gray-500">{painting?.artist.name}</p>
        </div>
        <div className="py-5">
          <p className="text-sm md:text-base sm:columns-2 text-gray-800">
            {painting?.description}
          </p>
        </div>
        <div className="py-3">
          <p className="font-medium">Detalles</p>
          <ul className="text-sm mt-2 space-y-2">
            <li className="text-gray-900">
              <span className="font-medium text-black mr-1">Título:</span>
              {painting?.title}
            </li>
            <li className="text-gray-900">
              <span className="font-medium text-black mr-1">Artista:</span>
              {painting?.artist.id ? (
                <Link
                  to={`/pinturas/artista/${painting?.artist.id}`}
                  className="text-blue-600 underline"
                >
                  {painting?.artist.name}
                </Link>
              ) : (
                <span>{painting?.artist.name}</span>
              )}
            </li>
            <li className="text-gray-900">
              <span className="font-medium text-black mr-1">Técnica:</span>
              {painting?.method}
            </li>
            <li className="text-gray-900">
              <span className="font-medium text-black mr-1">Ubicación:</span>
              {painting?.location}
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default PaintPage;
