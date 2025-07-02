import { Container } from '../../shared';
import { PaintsList } from '../components';
import { paints } from '../../data/paints';


export const ListPage = () => {
  return (
    <Container>
         <div>
          <div className="uppercase text-center font-bwmitga-regular text-gray-400 mb-2">
            <span className="text-xs">Descubre</span>
          </div>
            <h1 className="uppercase text-2xl md:text-3xl text-center font-bwmitga-bold mb-8">Pinturas</h1>
        </div>
        <PaintsList  paints={ paints}/>
    </Container>
  )
}

export default ListPage;
