import { useMemo } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { HiOutlineShoppingBag } from 'react-icons/hi2';

import { Container } from '../../shared';
import { getProductById } from '../../helpers';
import { ProductImageSlide, ProductsSlide } from '../components';
import { products } from '../../data';
import { generateOrderMessage } from '../helpers/generateOrderMessage';

export const ProductPage = () => {
  const { id = '' } = useParams();
  // const navigate = useNavigate();

  const product = useMemo(() => getProductById(id), [id]);

  const idPainting = useMemo(() => {
    return product?.namePainting?.replaceAll(' ', '-').toLowerCase();
  }, [product]);

  const orderProductWhatsApp = useMemo<string>(
    () =>
      generateOrderMessage(
        '59160279812',
        `Hola, Singani Bohemia 56 🍇🥂🎨🎻🇧🇴 ${
          product?.id.includes('clasico') ? '💎' : '⭐'
        }Me encuentro interesado en la botella de ${
          product?.title
        } de la pintura "${
          product?.namePainting
        }". ℹ️ Por favor me brinda más información.`
      ),
    [product?.namePainting, product?.title, product?.id]
  );

  if (!product) {
    return <Navigate to="/" />;
  }

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <ProductImageSlide imgs={product.srcImg || []} />
        </div>
        <div className="mt-14">
          <div className="text-center mb-10   ">
            <h2 className="text-3xl md:text-5xl font-bwmitga-bold">
              {product.title}
            </h2>
            <span className="text-2xl md:text-4xl font-bwmitga-regular">
              Artesanal
            </span>
          </div>
          <div className="flex justify-center py-5 mb-10">
            <a
              href={orderProductWhatsApp}
              className="uppercase inline-flex text-xs bg-black text-white px-10 py-3 rounded-sm items-center justify-center ease-in duration-300 hover:tracking-widest"
            >
              <HiOutlineShoppingBag className="mr-3 text-lg" />
              Ordenar
            </a>
          </div>
          <div className="mb-10">
            <p className="text-start text-gray-600 px-2">{product.desc}</p>
          </div>
          <div className="text-start">
            <h5 className="font-bwmitga-bold">Pintura:</h5>
            <Link
              to={`/pinturas/${idPainting}`}
              className="text-sky-600 underline"
            >
              {product.namePainting}
            </Link>
          </div>
        </div>
      </div>
      <div className="py-10 mt-10">
        <h5 className="font-bwmitga-bold mb-10">Más productos</h5>
        <ProductsSlide
          products={products.filter((product) => product.id !== id)}
        />
      </div>
    </Container>
  );
};

export default ProductPage;
