import { paintings } from '../data/painting';




export const getPaintingById = ( id: string ) => {
  
    if( !id ) throw new Error('Producto no encontrado')

    return paintings.find( painting => painting.id === id );

}
