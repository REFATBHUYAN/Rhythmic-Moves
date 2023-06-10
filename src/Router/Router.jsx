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
import Classes from '../Pages/Classes/Classes';
import Instructors from '../Pages/Instructors/Instructors';
import SelecedClasses from '../Pages/DashBoard/StudentRole/SelecedClasses';
import Payment from '../Pages/DashBoard/StudentRole/Payment';
import EnrollClass from '../Pages/DashBoard/StudentRole/EnrollClass';
import PaymentHistory from '../Pages/DashBoard/StudentRole/PaymentHistory';
import MyClasses from '../Pages/DashBoard/InstractorRole/MyClasses';

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
        {
            path: 'classes',
            element: <Classes></Classes>
        },
        {
            path: 'instructors',
            element: <Instructors></Instructors>
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
          element: <MyClasses></MyClasses>
        },
        {
          path: 'selectedClasses',
          element: <SelecedClasses></SelecedClasses>
        },
        {
          path: 'payment/:id',
          element: <Payment></Payment>
        },
        {
          path: 'enrollClasses',
          element: <EnrollClass></EnrollClass>
        },
        {
          path: 'paymentHistory',
          element: <PaymentHistory></PaymentHistory>
        },
      ]
    }
  ]);

export default router;