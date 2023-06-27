import { useEffect, useRef, MutableRefObject } from 'react';


export const useScrollDownNavbar = () => {
    const navRef = useRef() as MutableRefObject<HTMLDivElement>;

    const onScroll = () => {
        if( !navRef ) return;

        const scrollPosition = window.scrollY;

        navRef.current?.classList.toggle('scroll-down', scrollPosition > 100 )

    }

    useEffect(() => {
        document.addEventListener('scroll', onScroll )
    
      return () => {
        document.removeEventListener('scroll', onScroll )
      }
    }, [])


    return {
        navRef
    }
}
