import { FC } from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { type Product } from '../../data';

interface Props {
    product?: Product;
}

export const ProductCard:FC<Props> = ({ product }) => {

  return (
    <div className={`w-60 overflow-hidden mb-28 mx-auto ${ product?.id.includes('clasico') ? 'bg-gray-50' : '' }`}> 
        <img src={ product?.srcImg[0] } alt={ product?.title } className="h-80 block mx-auto" loading='lazy'/>
        <div className="text-center font-bwmitga-bold pt-3">
            <h5 className="text-xs mb-2">{ product?.title }</h5>
            <p className={`${ product?.id.includes('clasico') ? 'text-gray-500' : 'text-primary' } text-xs mb-6`}>{ product?.namePainting }</p>
            <p className="text-xs text-gray-400 font-bwmitga-light">
                {
                    product?.desc.substring( 0, 118 ) + '...'
                }
            </p>
        </div>
        <div className={`mt-10 font-bwmitga-bold ${ product?.id.includes('clasico') ? 'text-gray-500' : 'text-primary' } text-xs uppercase flex items-center`}>
            <Link
                to={`/producto/${ product?.id }`}
                className="px-4"
            >
                Descrubrir
            </Link>
            <a href="" className="flex justify-center items-center px-4">
                <HiOutlineShoppingBag className="mr-3 text-lg"/>
                Ordena
            </a>
        </div>
    </div>
  )
}
