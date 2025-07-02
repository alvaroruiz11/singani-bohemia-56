import { useContext, useEffect } from 'react';
import { Outlet, useLocation, ScrollRestoration } from 'react-router-dom';
import { FabButton, Footer, NavBar, SideBar } from '../components';
import { UiContext } from '../../context';
import { FaWhatsapp } from 'react-icons/fa';
import { generateOrderMessage } from '../../products/helpers/generateOrderMessage';

const msgWhatsApp = generateOrderMessage('59160279812', 'Hola familia Singani Bohemia 56🍇🥂🎨Me encuentro interesao que me brinden mayor información de su trabajo 🙌')

export const MainLayout = () => {
  const { isOpenSidebar, onCloseSidebar } = useContext( UiContext );
  const { pathname } = useLocation();
  const redirectWhatsApp = () => {
      window.open( msgWhatsApp );
  }
  useEffect(() => {
      if( !isOpenSidebar ) return;
      onCloseSidebar();
  }, [pathname]);
  
  return (
    <>
        <header>
            <NavBar/>
        </header>
        {
          isOpenSidebar && <SideBar/>
        }
        
        <main className="animate__animated animate__fadeIn" style={{ marginTop: 72 }}>
            <ScrollRestoration/>
            <Outlet/>
        </main>
        <FabButton action={ redirectWhatsApp } Icon={ FaWhatsapp } color='075e54'/>
        <Footer/>
    </>
  )
}
