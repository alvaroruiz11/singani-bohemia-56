import { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { NavBar, SideBar, Footer } from '../components';
import { UiContext } from '../../context';


export const BohemiaLayout = () => {
    const { isOpenSidebar } = useContext( UiContext );
  return (
        <>
            <header>
                {/* NavBar */}
                <NavBar/>
                {
                    ( isOpenSidebar )
                    ? ( <SideBar/> )
                    : ( <></> )
                }
                
            </header>
        
            <main className="animate__animated animate__fadeIn" style={{ marginTop: 88 }}>
                <Outlet/>
            </main>
            <Footer/>
        </>
  )
}
