import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiOutlineBars3CenterLeft, HiOutlineXMark } from 'react-icons/hi2';

import { UiContext } from '../../context';

import  './NavBar.css';
import { routerLinks } from '../../router/router-links';


export const NavBar = () => {

  const { onToggleSidebar, isOpenSidebar } = useContext( UiContext );
  return (
    <nav className="bg-zinc-950">
        <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
            <div className="relative flex items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                    <button 
                        type="button" 
                        className="inline-flex items-center justify-center p-2 text-white text-2xl" 
                        onClick={ onToggleSidebar }
                        aria-controls="mobile-menu"
                    >
                        {
                            ( !isOpenSidebar )
                            ? ( <HiOutlineBars3CenterLeft/> )
                            : ( <HiOutlineXMark/> )
                        }
                        
                    </button>
                </div>
                <div className="flex flex-1 items-center justify-center md:justify-between py-3 md:py-0">
                    <div className="flex flex-shrink-0 items-center justify-center">
                        <Link 
                            to="/"
                            className='py-3'
                        >
                            <img className="block w-24 h-6 md:w-auto md:h-7" 
                                src="/assets/logo.png" 
                                alt="Singani Bohemia 56"
                            />
                        </Link>
                
                    </div>
                    <div className="hidden md:block md:flex-1">
                        <ul className="flex justify-center space-x-8">
                            {
                                routerLinks.map( link => (
                                    <li key={ link.to }>
                                        <NavLink to={ link.to } 
                                            className={ ({ isActive }) => `px-5 py-9 block text-xs font-medium uppercase hover:text-gray-200 nav-link ${ (isActive) ? 'text-gray-200': 'text-gray-500' }`} 
                                            aria-current="page"
                                        >
                                            { link.title }
                                        </NavLink>
                                    </li>                                
                                ))
                            }         
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>

  )
}
