import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Login from '../Pages/Login & Register/Login';
import Register from '../Pages/Login & Register/Register';
import ErrorPage from '../Pages/Shared/ErrorPage';
import Home from '../Pages/Home/Home';
import Dashboard from '../Layout/Dashboard';
import ManageUser from '../Pages/DashBoard/AdminRole/ManageUser';
import AddClass from '../Pages/DashBoard/InstractorRole/AddClass';
import ManageClasses from '../Pages/DashBoard/AdminRole/ManageClasses';
import FeedBack from '../Pages/DashBoard/AdminRole/FeedBack';

const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage></ErrorPage>,
      element: <MainLayout></MainLayout>,
      children:[
        {
            path: '/',
            element: <Home></Home>
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
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children:[
        {
          path: 'manageClasses',
          element: <ManageClasses></ManageClasses>
        },
        {
          path: 'manageUser',
          element: <ManageUser></ManageUser>
        },
        {
          path: 'manageClasses/feedback/:id',
          element: <FeedBack></FeedBack>
        },
        {
          path: 'addClass',
          element: <AddClass></AddClass>
        },
        {
          path: 'myClasses',
          element: <div>this is instructor my classes page</div>
        },
      ]
    }
  ]);

export default router;