import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

export const productsRouter: RouteObject = {
    path: '/productos/', children: [
        {
            path: ':id', Component: lazy(() => import('../pages/ProductPage'))
        }
    ]
}
