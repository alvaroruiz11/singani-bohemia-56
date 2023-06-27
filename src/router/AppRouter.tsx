import { Suspense, useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { BohemiaLayout } from '../bohemia/layouts/BohemiaLayout';
import { LoadingPage, PermissionPage } from '../shared';
import { PermissionContext } from '../context';
import { routes } from './router';


export const AppRouter = () => {

    const { permission } = useContext( PermissionContext );

    if( permission === 'checking' ) {
        return <LoadingPage/>
    }

  return (
    <Suspense fallback={ <LoadingPage/> }>
        <BrowserRouter>
            <Routes>
                {
                    ( permission === 'accepted' ) 
                    ? ( 
                        <Route path='/' element={ <BohemiaLayout/> } children={
                            <>
                               {
                                    routes.map( route => (
                                        <Route key={ route.path } path={ route.path } element={ <route.Component/> }/>
                                    ))
                               }
                            </>
                        }/>
                    )
                    : (
                        <>
                            <Route path='/' element={ <PermissionPage/> }/>
                            <Route path='/*' element={ <Navigate to="/" />}/>
                        </>
                    )
                }
            </Routes>
        </BrowserRouter>
    </Suspense>
  )
}
