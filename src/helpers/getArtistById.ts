import { paints } from '../data/paints';


export const getArtistById = ( id: string ) => {

    return paints.find( painting => painting.artist.id === id )?.artist;
}
