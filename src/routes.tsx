import type { RouteObject } from 'react-router';

import Layout from './components/layout';

import Posts, { loader as postLoader } from './pages/posts';
import Home from './pages/home';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'blog',
                element: <Posts />,
                loader: postLoader,
            },
            {
                path: 'About',
                lazy: () => import('./pages/about'),
            },
        ],
    },
];