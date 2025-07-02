import { FC } from 'react';
import { IconType } from 'react-icons';

interface Props {
    action: () => void;
    color?: string;
    Icon: IconType;
}

export const FabButton:FC<Props> = ({ action, Icon, color = '0085ad'}) => {
  return (
    <button
        onClick={ action }
        style={{
            alignItems: 'center',
            backgroundColor: `#${ color }`,
            borderRadius: '50%',
            bottom: '30px',
            color: 'white',
            display: 'flex',
            fontSize: '2rem',
            height: '60px',
            justifyContent: 'center',
            position: 'fixed',
            right: '30px',
            width: '60px',
            zIndex: 400,
        }}
    >
        <Icon/>
    </button>
  )
}
