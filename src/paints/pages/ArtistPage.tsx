import { useMemo, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { GrFormPreviousLink } from 'react-icons/gr';
import { getArtistById } from '../../helpers';
import { Container } from '../../shared';

const ArtistPage = () => {
  const { id = '' } = useParams();

  const navigate = useNavigate();

  const artist = useMemo(() => getArtistById(id), [id]);

  const isMoreInformation = useMemo(() => {
    if (!artist?.biography) return;
    return artist.biography.length > 310;
  }, [artist?.biography]);

  const [isViewMoreInformation, setisViewMoreInformation] =
    useState<boolean>(false);

  const onViewMoreInformation = () =>
    setisViewMoreInformation(!isViewMoreInformation);

  if (!artist) {
    return <Navigate to="/" />;
  }

  return (
    <Container>
      <div>
        <button
          className="inline-flex justify-center items-center bg-white rounded-full w-8 h-8 shadow transition-all duration-300 mb-4"
          onClick={() => navigate(-1)}
        >
          <GrFormPreviousLink className="text-2xl" />
        </button>
        <div className="px-1 relative">
          <img
            src={`/assets/artist/${artist?.id}.jpg`}
            alt={artist?.name}
            className="block mx-auto w-auto object-cover rounded-sm shadow h-96"
          />
        </div>
        <div className="text-center py-5 text-2xl md:text-3xl">
          <hr />
          <h3 className="mt-8 font-bwmitga-regular">{artist?.name}</h3>
          <div className="flex flex-col justify-center items-center mt-3">
            <span className="text-xs text-gray-400">Contacto:</span>
            <ul className="flex">
              {artist?.contact?.map(({ title, url, Icon }) => (
                <li key={title}>
                  <a
                    href={url}
                    target="_blank"
                    className="w-10 h-10 inline-flex text-gray-700 justify-center items-center text-2xl hover:text-black transition-all"
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="px-3 md:px-40 pb-20">
        <p className="text-gray-800 text-sm md:text-base">
          {!isMoreInformation
            ? artist?.biography
            : isMoreInformation && !isViewMoreInformation
            ? artist?.biography?.substring(0, 309) + '...'
            : artist?.biography}
        </p>
        {isMoreInformation && (
          <button
            className="text-blue-600 font-medium text-sm px-2 mt-2"
            onClick={onViewMoreInformation}
          >
            {isViewMoreInformation ? 'Mostrar menos' : 'Más informacion'}
          </button>
        )}
      </div>
    </Container>
  );
};

export default ArtistPage;
