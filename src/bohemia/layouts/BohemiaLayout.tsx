import { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { NavBar, SideBar, Footer, ScrollToTop } from '../components';
import { UiContext } from '../../context';


export const BohemiaLayout = () => {
    const { isOpenSidebar } = useContext( UiContext );

    
  return (
        <>
            <header>
                <NavBar/>
                {
                    ( isOpenSidebar )
                    ? ( <SideBar/> )
                    : ( <></> )
                }
            </header>
        
            <main className="animate__animated animate__animated" style={{ marginTop: 88 }}>
                <ScrollToTop/>
                <Outlet/>
            </main>
            <Footer/>
        </>
  )
}
