import { Suspense, useContext } from 'react';
import { Navigate, RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthContext } from '../context';

import { HomePage, AboutPage, LoadingPage, PersonalizedPage } from '../shared/page';
import { authRouter } from '../auth/router';
import { paintsRouter } from '../paints/router';
import { productsRouter } from '../products/router';
import { MainLayout } from '../shared/layout/MainLayout';


export const Router = () => {
    const { status } = useContext( AuthContext );
    const privateRouter: RouteObject[] = [
        {
            path: '/',
            element: <MainLayout/>,
            children: [
                { path: '', element: <HomePage/> },
                { path: '/nosotros', element: <AboutPage/> },
                { path: '/botellas-personalizada', element: <PersonalizedPage/> },
                {
                    ...productsRouter 
                },
                {
                    ...paintsRouter
                },
                { path: '*', element: <Navigate to="/"/> }
            ],   
        },
        { path: '*', element: <Navigate to="/"/> }
    ]

    const router = createBrowserRouter([
        ...( status === 'accepted' ? privateRouter : authRouter )
    ]);
  return ( status === 'checking')
            ? <LoadingPage/>
            : (
                <Suspense fallback={ <LoadingPage/> }>
                    <RouterProvider router={ router }/>
                </Suspense>
            )
}
