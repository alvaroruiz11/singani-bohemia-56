import { Container } from '../../shared';
import { PaintingList } from '../components';
import { paintings } from '../../data/painting';


export const PaintingPage = () => {
  return (
    <Container>
         <div>
          <div className="uppercase text-center font-bwmitga-regular text-gray-400 mb-2">
            <span className="text-xs">Descubre</span>
          </div>
            <h1 className="uppercase text-2xl md:text-3xl text-center font-bwmitga-bold mb-8">Pinturas</h1>
        </div>
        <PaintingList  paintings={ paintings }/>
    </Container>
  )
}

export default PaintingPage;