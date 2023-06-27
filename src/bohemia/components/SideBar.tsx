import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { routes } from '../../router/router';

import  './NavBar.css';
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
        <div className="py-10">
          <div>
            <ul className="space-y-2">
                  {
                    routes.map( link => {
                        if( link.to ) {
                          return (
                            <li className="border-b border-gray-300" key={ link.to }>
                                <NavLink to={ link.to } 
                                    className="text-zinc-900 block px-8 w-full py-2 font-normal uppercase" 
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
          <div>

          </div>
        </div>
      </aside>
  )
}
