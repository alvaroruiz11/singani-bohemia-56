import { paints } from '../data/paints';




export const getPaintById = ( id: string ) => {
  
    if( !id ) throw new Error('Producto no encontrado')

    return paints.find( painting => painting.id === id );

}
