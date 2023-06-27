import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer>
        <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8 py-16 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="flex flex-col items-center py-8">
                    <div className="mb-1">
                        <img className="block h-24 w-auto" 
                            src="/assets/logo.jpg" 
                            alt="Singani Bohemia 56"
                        />
                    </div>
                    <ul className="flex space-x-9 ">
                        <li>
                            <a target='_blank' href="#" className="text-white flex justify-center items-center w-6 h-6 text-3xl footer-link">
                                <FaFacebook/>
                            </a>
                        </li>
                        <li>
                            <a target='_blank' href="#" className="text-white flex justify-center items-center w-6 h-6 text-3xl footer-link">
                                <FaInstagram/>
                            </a>
                        </li>
                        <li>
                            <a target='_blank' href="#" className="text-white flex justify-center items-center w-6 h-6 text-3xl footer-link">
                                <FaTiktok/>
                            </a>
                        </li>
                        <li>
                            <a target='_blank' href="#" className="text-white flex justify-center items-center w-6 h-6 text-3xl footer-link">
                                <FaYoutube/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-span-2 py-8 md:py-8">
                    <div className="grid md:grid-cols-3 uppercase gap-4">
                        <div className="h-auto text-center md:text-left py-1 md:h-60">
                            <div>
                                <Link
                                    to="/"
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
                            <div>
                                <ul>
                                    <li>
                                        <NavLink
                                            to={"/"}
                                            className="text-xs text-gray-700 footer-link"
                                        >
                                            Distribuiores
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="h-auto text-center md:text-left py-4 md:h-60">
                            <div>
                                <Link
                                    to="/"
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
