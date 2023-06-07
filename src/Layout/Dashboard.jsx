import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    const user = 'admin';
    // const user = 'instructor';
  const sideOptions = (
    <>
       
      {
        user === 'instructor' && <>
        <li>
        <NavLink
          to={`/dashboard/addClass`}
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-green-600 text-white rounded-md "
              : isPending
              ? "pending"
              : ""
          }
        >
          Add A Class
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/dashboard/myClasses`}
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-green-600 text-white rounded-md "
              : isPending
              ? "pending"
              : ""
          }
        >
          My Classes
        </NavLink>
      </li>
        </>
      }
      {
        user === 'admin' && <>
        <li>
        <NavLink
          to={`/dashboard/manageClasses`}
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-green-600 text-white rounded-md "
              : isPending
              ? "pending"
              : ""
          }
        >
          Manage Classes
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/dashboard/manageUser`}
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-green-600 text-white rounded-md "
              : isPending
              ? "pending"
              : ""
          }
        >
          Manage Users
        </NavLink>
      </li>
        </>
      }
      <li>
        <NavLink
          to={`/`}
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-green-600 text-white rounded-md "
              : isPending
              ? "pending"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* Page content here */}
            <p className="text-5xl font-bold p-10">Hi, Welcome Back</p>
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
          <ul className="menu p-4 w-80 h-full bg-green-200 text-black font-bold">
            {/* Sidebar content here menu*/}
            <p className="text-3xl font-bold">Dashboard</p>
            {sideOptions}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;