import { lazy, LazyExoticComponent } from 'react';

type JSXComponent = () => JSX.Element;

interface Router {
    to?: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    title?: string;
}

const AboutPageLazy = lazy( () => import('../bohemia/pages/AboutPage'))
const ArtistPageLazy = lazy( () => import('../bohemia/pages/ArtistPage'))
const HomePageLazy = lazy( () => import('../bohemia/pages/HomePage'))
const PaintingPageLazy = lazy( () => import('../bohemia/pages/PaintingPage'))
const ProductInfoLazy = lazy( () => import('../bohemia/pages/ProductInfo'))
const PaintingInfoPageLazy = lazy( () => import('../bohemia/pages/PaintingInfoPage'))

export const routes: Router[] = [
    {
        to: '/',
        path: '',
        Component: HomePageLazy,
        title: 'Inicio'
    },
    {
        to: '/nosotros',
        path: 'nosotros',
        Component: AboutPageLazy,
        title: 'Sobre Nosotros'
    },
    {
        to: '/pinturas',
        path: 'pinturas',
        Component: PaintingPageLazy,
        title: 'Pinturas'
    },
    {
        path: 'pinturas/:id',
        Component: PaintingInfoPageLazy,
    },
    {
        path: 'artista/:id',
        Component: ArtistPageLazy,        
    },
    {
        path: 'producto/:id',
        Component: ProductInfoLazy,        
    },
    
]