import { FC } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

interface Props {
    idPainting: string;
    isOpenPaintingModal:boolean;
    openModal?: () => void;
    closeModal:() => void;
}

export const PaintModal:FC<Props> = ({ isOpenPaintingModal, closeModal, idPainting }) => {
  return (
    
      <Modal
        isOpen={ isOpenPaintingModal }
        onRequestClose={ closeModal }
        style={ customStyles }
        overlayClassName="modal-fondo"
        className="fixed md:h-screen modal px-3 md:py-2"
      >
        
        <div className="h-full">
          <img src={`/assets/paints/${ idPainting }.jpg`} className="h-full w-auto block mx-auto"/>
        </div>
      </Modal>
    
  )
}
