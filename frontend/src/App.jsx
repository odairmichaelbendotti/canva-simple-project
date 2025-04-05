import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Index from './pages/Index';
import Content from './pages/Content';
import Project from './pages/Project';
import Template from './pages/Template';

const App = () => {
    const router = createBrowserRouter([
        {
            element: <Layout />,
            children: [
                {
                    path: '/',
                    element: <Index />
                },
                {
                    path: '/content',
                    element: <Content />
                },
                {
                    path: '/projects',
                    element: <Project />
                },
                {
                    path: '/templates',
                    element: <Template />
                }
            ]
        }
    ])

    return <RouterProvider router={ router } />
};

export default App;
