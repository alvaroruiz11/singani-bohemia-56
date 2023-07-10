import { FC } from 'react';
import type { IconType } from 'react-icons';

interface Props {
    Icon:  IconType,
    href: string;
    color?: string
}

export const LinkSocialButton:FC<Props> = ({ href, Icon, color = 'white' }) => {
  return (
    <a 
        target='_blank' 
        href={ href } 
        className={`text-${ color } flex justify-center items-center w-6 h-6 text-2xl`}
    >
        <Icon/>
    </a>
  )
}
