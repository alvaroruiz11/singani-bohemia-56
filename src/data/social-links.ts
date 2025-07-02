import { IconType } from 'react-icons';
import { FaFacebook, FaInstagram, FaSpotify, FaTiktok, FaYoutube } from 'react-icons/fa';

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
    },
    {
        href: 'https://open.spotify.com/user/31viwiwfoehfv7seycopg54np34u?si=201b5b253ed1403d',
        Icon: FaSpotify
    } 
]