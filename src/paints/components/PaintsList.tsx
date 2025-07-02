import type { FC } from 'react';
import { PaintCard } from '.';

import type { Paint } from '../../data/paints';

interface Props {
    paints:Paint[]
}

export const PaintsList:FC<Props> = ({ paints }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
            paints.map( painting => (
                <PaintCard painting={ painting } key={ painting.id }/>
            ))
        }
    </div>
  )
}
