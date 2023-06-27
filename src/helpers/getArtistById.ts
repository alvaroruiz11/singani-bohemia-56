import { paintings } from '../data/painting';


export const getArtistById = ( id: string ) => {

    return paintings.find( painting => painting.artist.id === id )?.artist;
}
