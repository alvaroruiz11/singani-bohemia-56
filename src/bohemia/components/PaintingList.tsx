import { FC } from 'react';
import { Painting } from '../../data/painting';
import { PaintingCard } from '.';

interface Props {
    paintings:Painting[]
}

export const PaintingList:FC<Props> = ({ paintings }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
            paintings.map( painting => (
                <PaintingCard painting={ painting } key={ painting.id }/>
            ))
        }
    </div>
  )
}
