import { products } from '../data/products-singanis';


export const getProductById = ( id: string ) => {
    

    return products.find( product => product.id === id );

}
