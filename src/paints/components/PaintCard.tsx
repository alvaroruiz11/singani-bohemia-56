import { FC } from 'react';
import { Link } from 'react-router-dom';
import type { Paint } from '../../data/paints';

interface Props {
    painting: Paint
}

export const PaintCard: FC<Props> = ({ painting }) => {
  return (
    <Link
      to={`/pinturas/${ painting.id }`} 
      className="h-96 mx-auto w-4/5 cursor-pointer painting-card relative overflow-hidden"
    >
        <img className="h-full mx-auto w-full object-cover rounded" src={`/assets/paints/${ painting.id }.jpg`} alt=""/>
        <div className="absolute bottom-5 left-3 font-bwmitga-bold text-white uppercase text-left w-ful">
            <span>
                 { painting.title }
            </span>
        </div>
    </Link>
  )
}
