import { IconType } from 'react-icons';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

interface SocialLink {
    href: string;
    Icon: IconType;
}

export const socialLinks: SocialLink[] = [
    {
        href: 'https://www.facebook.com/singani.bohemia.56',
        Icon: FaFacebook
    }, 
    {
        href: 'https://www.instagram.com/singani.bohemia.56/',
        Icon: FaInstagram
    },
    {
        href: 'https://www.tiktok.com/@singani.bohemia.56',
        Icon: FaTiktok
    }, 
    {
        href: 'https://www.youtube.com/@singanibohemia5628',
        Icon: FaYoutube
    } 
]