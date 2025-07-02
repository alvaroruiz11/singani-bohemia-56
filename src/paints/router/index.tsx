import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

export const paintsRouter: RouteObject = {
  path: '/pinturas/',
  children: [
    { path: '', Component: lazy(() => import('../pages/ListPage')) },
    { path: ':id', Component: lazy(() => import('../pages/PaintPage')) },
    {
      path: 'artista/:id',
      Component: lazy(() => import('../pages/ArtistPage')),
    },
  ],
};
