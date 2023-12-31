import React, { useContext } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import useRoles from "../Hooks/useRoles";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";
import { AuthContext } from "../Provider/AuthProvider";
import { FaBook, FaBookOpen, FaRegCreditCard, FaRegEdit, FaUsersCog } from "react-icons/fa";
import useTitle from "../Hooks/useTitle";

const Dashboard = () => {
  useTitle('Dashboard');
  
  const {user} = useContext(AuthContext);
  const [roles, isRolesLoading] = useRoles();
  const location = useLocation();
  // console.log(location)
 
  // console.log(roles);
  const sideOptions = (
    <>
      {roles == "Instructor" && (
        <>
          <li>
            <NavLink
              to={`/dashboard/addClass`}
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-blue-700 font-bold"
                  : isPending
                  ? "pending"
                  : ""
              }
            >
              <FaRegEdit className="inline-flex ml-2 mr-1 h-10"></FaRegEdit> Add A Class
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/dashboard/myClasses`}
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-blue-700 font-bold"
                  : isPending
                  ? "pending"
                  : ""
              }
            >
              <FaBookOpen className="inline-flex ml-2 mr-1 h-10"></FaBookOpen> My Classes
            </NavLink>
          </li>
        </>
      )}
      {roles == "Admin" && (
        <>
          <li>
            <NavLink
              to={`/dashboard/manageClasses`}
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-blue-700 font-bold"
                  : isPending
                  ? "pending"
                  : ""
              }
            >
             <FaRegEdit className="inline-flex ml-2 mr-1 h-10"></FaRegEdit> Manage Classes
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/dashboard/manageUser`}
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-blue-700 font-bold"
                  : isPending
                  ? "pending"
                  : ""
              }
            >
              <FaUsersCog className="inline-flex ml-2 mr-1 h-10"></FaUsersCog> Manage Users
            </NavLink>
          </li>
        </>
      )}
      {roles == "Student" && (
        <>
          <li>
            <NavLink
              to={`/dashboard/selectedClasses`}
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-blue-700 font-bold"
                  : isPending
                  ? "pending"
                  : ""
              }
            >
              <FaBookOpen className="inline-flex ml-2 mr-1 h-10"></FaBookOpen> My Selected Classes
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/dashboard/enrollClasses`}
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-blue-700 font-bold"
                  : isPending
                  ? "pending"
                  : ""
              }
            >
              <FaBook className="inline-flex ml-2 mr-1 h-10"></FaBook> My Enrolled Classes
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/dashboard/paymentHistory`}
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-blue-700 font-bold"
                  : isPending
                  ? "pending"
                  : ""
              }
            >
              <FaRegCreditCard className="inline-flex ml-2 mr-1 h-10"></FaRegCreditCard> Payment History
            </NavLink>
          </li>
        </>
      )}
      
    </>
  );
  return (
    <>
      <Navbar></Navbar>
      <div className="drawer lg:drawer-open max-w-7xl mx-auto">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* Page content here */}
          {
            location.pathname === "/dashboard" && <div className="flex flex-col justify-center items-center gap-4 py-16">
            <img className="rounded-full w-40 h-40 text-center" src={user?.photoURL} alt="" />
            <p className="font-semibold">{user?.email}</p>
            
            <h1 className=" text-4xl font-bold text-center">Welcome <span className="text-blue-600">{user?.displayName}</span></h1>
            <p className="text-center text-3xl font-bold">on</p>
            <p className="text-4xl text-center font-bold ">{`Your ${roles}`} DashBoard</p>
            </div>
          }
          
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="gap-4 space-y-5 py-4 p-4 w-80 h-full bg-stone-100 text-black font-bold">
            {/* Sidebar content here menu*/}
            {sideOptions}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Dashboard;
