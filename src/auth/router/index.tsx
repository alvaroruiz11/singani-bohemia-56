import type { RouteObject } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { AuthPage } from '../pages/AuthPage';
import { Navigate } from 'react-router-dom';
export const authRouter:RouteObject[] = [
    {
        path: '/', 
        element: <AuthLayout/>,
        children: [
            { path: '', element: <AuthPage/> },
            { path: '*', element: <Navigate to="/"/> }
        ]
    },
    { path: '*', element: <Navigate to="/"/> }
]