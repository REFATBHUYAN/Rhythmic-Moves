import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Login from '../Pages/Login & Register/Login';
import Register from '../Pages/Login & Register/Register';
import ErrorPage from '../Pages/Shared/ErrorPage';

const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage></ErrorPage>,
      element: <MainLayout></MainLayout>,
      children:[
        {
            path: '/',
            element: <div>this is home</div>
        },
        {
            path: 'login',
            element: <Login></Login>,
        },
        {
            path: 'register',
            element: <Register></Register>
        },
      ]
    },
  ]);

export default router;