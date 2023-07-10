import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiOutlineBars3CenterLeft, HiOutlineXMark } from 'react-icons/hi2';

import { UiContext } from '../../context';
import { routes } from '../../router/router';
import  './NavBar.css';




export const NavBar = () => {

    const { onToggleSidebar, isOpenSidebar } = useContext( UiContext );
    

  return (
    <nav>
        <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
            <div className="relative flex items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                    <button 
                        type="button" 
                        className="inline-flex items-center justify-center p-2 text-gray-100 text-xl" 
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
                    <div className="flex flex-shrink-0 items-center">
                        <Link 
                            to="/"
                        >
                            <img className="block h-16 w-auto" 
                                src="/assets/logo.jpg" 
                                alt="Singani Bohemia 56"
                            />
                        </Link>
                
                    </div>
                    <div className="hidden md:block md:flex-1">
                        <ul className="flex justify-center space-x-8">
                            {
                                routes.map( link => {
                                    if( link.to ) {
                                        return (
                                            <li key={ link.to }>
                                                <NavLink to={ link.to } 
                                                    className={ ({ isActive }) => `text-gray-400 px-5 py-9 block text-xs font-medium uppercase nav-link ${ (isActive) ? 'active': '' }`} 
                                                    aria-current="page"
                                                >
                                                    { link.title }
                                                </NavLink>
                                            </li>
                                        )
                                    }
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>

  )
}
