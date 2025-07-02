import type { FC } from 'react';

interface Props {
    showText?: boolean;
    size?: string;
    color?: string;
    strokeWidth?: number;
    colorText?: string;
}

export const LoaderSpinner:FC<Props> = ({ showText = true, size = '3.25em', color = '#ebcd86', strokeWidth = 2, colorText = 'text-gray-300' }) => {
  return (
    <div className="flex flex-col justify-center items-center">
        <svg 
            viewBox="25 25 50 50"
            className='spinner'
            style={{
                width: size,
                stroke: color,
                strokeWidth
            }}
            
        >
            <circle r="20" cy="50" cx="50"></circle>
        </svg>
        {
            showText && ( <p className={`font-medium ${ colorText } mt-3 text-lg`}>Cargando...</p> )
        }
        
    </div>
  )
}
