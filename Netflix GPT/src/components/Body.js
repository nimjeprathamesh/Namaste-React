import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Browse from './Browse.js';
import Login from './Login.js';

export default function Body() {
    const router = createBrowserRouter([
        {path: '/', element: <Login />},
        {path: '/browse', element: <Browse />},
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}
