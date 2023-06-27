import { Painting } from '../../data/painting';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
    painting: Painting
}

export const PaintingCard: FC<Props> = ({ painting }) => {
  return (
    <Link
      to={`/pinturas/${ painting.id }`} 
      className="h-96 mx-auto w-4/5 cursor-pointer painting-card relative overflow-hidden"
    >
        <img className="h-full mx-auto w-full object-cover rounded" loading='lazy' src={`/assets/painting/${ painting.id }.jpg`} alt=""/>
        <div className="absolute bottom-5 left-3 font-bwmitga-bold text-white uppercase text-left w-ful">
            <span>
                 { painting.title }
            </span>
        </div>
    </Link>
  )
}
