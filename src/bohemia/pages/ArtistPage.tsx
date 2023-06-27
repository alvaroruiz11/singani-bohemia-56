import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArtistById } from '../../helpers';
import { Container } from '../../shared';

export const ArtistPage = () => {
    
    const { id = '' } = useParams();
    
    const artist = useMemo(() => getArtistById( id ), [ id ]);

    const isMoreInformation = useMemo(() => {
        if( !artist?.biography ) return;
        return ( artist.biography.length > 310 );
    }, [ artist?.biography ]);

    const [isViewMoreInformation, setisViewMoreInformation ] = useState<boolean>( false );

    const onViewMoreInformation = () => setisViewMoreInformation( !isViewMoreInformation );

  return (  
      <Container>
        <div>
            <div style={{ height: 500 }}>
                <img src={`/assets/artist/${ artist?.id }.jpg`} alt=""  className="h-full w-auto object-cover mx-auto rounded-sm shadow"/>
            </div>
            <div className="text-center pt-10 pb-5 text-3xl">
                <hr />
                <h3 className="mt-8 font-bwmitga-regular">{ artist?.name }</h3>
                <div className="flex justify-center items-center mt-5">
                    <ul className="flex">
                        {
                            artist?.contact.map( ({ title, url, Icon }) => (
                                <li key={ title }>
                                    <a href={ url } target='_blank' className="w-10 h-10 inline-flex text-gray-700 justify-center items-center text-2xl hover:text-black transition-all">
                                        <Icon/>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
            <div className="md:px-40 pb-20">
                <p className="text-gray-800">
                    { 
                        ( !isMoreInformation) 
                        ? artist?.biography
                        : ( isMoreInformation && !isViewMoreInformation )
                            ? artist?.biography.substring(0,309) + '...'
                            : artist?.biography
                    }
                </p>
                {
                    ( isMoreInformation ) &&
                    ( 
                        <button 
                            className="text-blue-600 font-medium text-sm px-2 mt-2"
                            onClick={ onViewMoreInformation }
                        >
                            {
                                ( isViewMoreInformation )
                                ? 'Mostrar menos'
                                : 'Más informacion'
                            }
                        </button>
                    )
                }
                
            </div>
    </Container>
  )
}


export default ArtistPage;