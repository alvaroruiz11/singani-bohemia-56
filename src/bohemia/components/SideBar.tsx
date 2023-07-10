import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { routes } from '../../router/router';
import  './NavBar.css';
import { socialLinks } from '../../data';
import { LinkSocialButton } from '.';

export const SideBar = () => {



  useEffect(() => {
    document.body.classList.add('scroll-stop');
  
    return () => {
      document.body.classList.remove('scroll-stop');
    }
  }, []);

  

  return (
      <aside 
        className="shadow fixed z-20 animate__animated animate__fadeInLeft animate__faster md:hidden"
      >
        <div className="py-10 h-full relative">
          <div>
            <ul className="space-y-2">
                  {
                    routes.map( link => {
                        if( link.to ) {
                          return (
                            <li className="border-b border-gray-300" key={ link.to }>
                                <NavLink to={ link.to } 
                                    className="text-zinc-900 block px-8 w-full py-2 font-normal uppercase sidebar-link"
                                    aria-current="page"
                                    reloadDocument
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
          <div className="absolute left-0 w-full bottom-44">
              <ul className="flex space-x-7 justify-center">
                {
                  socialLinks.map( link => (
                    <li key={ link.href }>
                        <LinkSocialButton
                            color='black'
                            Icon={ link.Icon }
                            href={ link.href }
                        />
                    </li>
                  ))
                }
              </ul>
          </div>
        </div>
      </aside>
  )
}
