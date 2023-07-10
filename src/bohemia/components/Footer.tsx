import { Link } from 'react-router-dom';

import { LinkSocialButton } from '.';
import { socialLinks } from '../../data';



export const Footer = () => {
  return (
    <footer>
        <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8 py-8 md:py-16 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="flex flex-col items-center py-8">
                    <div className="mb-4">
                        <img className="block h-20 w-auto" 
                            src="/assets/logo.jpg" 
                            alt="Singani Bohemia 56"
                        />
                    </div>
                    <ul className="flex space-x-9 ">
                        {
                            socialLinks.map( link => (
                                <li key={ link.href }>
                                    <LinkSocialButton 
                                        Icon={ link.Icon }
                                        href={ link.href }
                                    />
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col-span-2 py-8 md:py-8">
                    <div className="grid md:grid-cols-3 uppercase gap-4">
                        <div className="h-auto text-center md:text-left py-1 md:h-60">
                            <div>
                                <Link
                                    to="/nosotros"
                                    className='text-xs font-bwmitga-bold footer-link'
                                >
                                    Sobre Nosotros
                                </Link>
                            </div>
                        </div>
                        <div className="h-auto text-center md:text-left py-4 md:h-60">
                            <div>
                                <Link
                                    to="/"
                                    className='text-xs font-bwmitga-bold footer-link'
                                >
                                    Nuestros Singanis
                                </Link>
                            </div>
                        </div>
                        <div className="h-auto text-center md:text-left py-4 md:h-60">
                            <div>
                                <Link
                                    to="/pinturas"
                                    className='text-xs font-bwmitga-bold footer-link'
                                >
                                    Pinturas
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center border-t border-gray-700 py-5 mt-10">
                <span className='text-xs text-gray-500 font-light'>
                    COPYRIGHT © 2022 SINGANI BOHEMRIA 56 Legal
                </span>
            </div>
        </div>
    </footer>
  )
}
