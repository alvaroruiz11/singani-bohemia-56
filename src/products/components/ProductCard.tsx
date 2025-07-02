import { FC, useMemo } from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { type Product } from '../../data';
import { generateOrderMessage } from '../helpers/generateOrderMessage';

interface Props {
    product: Product;
}

export const ProductCard:FC<Props> = ({ product }) => {

    const orderProductWhatsApp = useMemo<string>(() => generateOrderMessage('59160279812', `Hola, Singani Bohemia 56 🍇🥂🎨🎻🇧🇴 ${ product.id.includes('clasico') ? '💎' : '⭐' }Me encuentro interesado en la botella de ${ product.title } de la pintura "${ product.namePainting }". ℹ️ Por favor me brinda más información.` ), [ product.namePainting, product.title, product.id ]);

  return (
    <div className={`w-60 overflow-hidden mb-28 mx-auto ${ product.id.includes('clasico') ? 'bg-gray-50' : '' }`}> 
        <img src={ product.srcImg[0] } alt={ product.title } className="h-72 md:h-80 block mx-auto"/>
        <div className="text-center font-bwmitga-bold pt-3">
            <h5 className="text-xs mb-2">{ product.title }</h5>
            <p className={`${ product.id.includes('clasico') ? 'text-gray-500' : 'text-primary' } text-xs mb-6`}>{ product.namePainting }</p>
            <p className={`${ product.id.includes('clasico') ? 'text-gray-500' : 'text-primary' } text-xs mb-6`}>{ product.price }</p>
            <p className="text-xs text-gray-400 font-bwmitga-light">
                {
                    product.desc.substring( 0, 118 ) + '...'
                }
            </p>
        </div>
        <div className={`mt-10 font-bwmitga-bold ${ product.id.includes('clasico') ? 'text-gray-500' : 'text-primary' } text-xs uppercase flex items-center`}>
            <Link
                to={`/productos/${ product.id }`}
                className="px-4"
            >
                Descrubrir
            </Link>
            <a href={ orderProductWhatsApp } target="_blank" className="flex justify-center items-center px-4">
                <HiOutlineShoppingBag className="mr-3 text-lg"/>
                Ordena
            </a>
        </div>
    </div>
  )
}
