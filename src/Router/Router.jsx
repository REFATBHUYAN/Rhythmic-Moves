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
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';
import InstructorRoutes from './InstructorRoutes';
import UpdateClass from '../Pages/DashBoard/InstractorRole/UpdateClass';
import StudentRoute from './StudentRoute';

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
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path: 'manageClasses',
          element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
        },
        {
          path: 'manageUser',
          element: <AdminRoute><ManageUser></ManageUser></AdminRoute>
        },
        {
          path: 'manageClasses/feedback/:id',
          element: <AdminRoute><FeedBack></FeedBack></AdminRoute>
        },
        {
          path: 'addClass',
          element: <InstructorRoutes><AddClass></AddClass></InstructorRoutes>
        },
        {
          path: 'myClasses',
          element: <InstructorRoutes><MyClasses></MyClasses></InstructorRoutes>
        },
        {
          path: 'updateClass/:id',
          element: <InstructorRoutes><UpdateClass></UpdateClass> </InstructorRoutes>
        },
        {
          path: 'selectedClasses',
          element: <StudentRoute><SelecedClasses></SelecedClasses></StudentRoute>
        },
        {
          path: 'payment/:id',
          element: <StudentRoute><Payment></Payment></StudentRoute>
        },
        {
          path: 'enrollClasses',
          element: <StudentRoute><EnrollClass></EnrollClass> </StudentRoute>
        },
        {
          path: 'paymentHistory',
          element: <StudentRoute><PaymentHistory></PaymentHistory></StudentRoute>
        },
      ]
    }
  ]);

export default router;