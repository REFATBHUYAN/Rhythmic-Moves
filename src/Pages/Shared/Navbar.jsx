import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const user = null;
  const navOptions = (
    <>
      <li>
        <NavLink
          to={`/`}
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-green-600 text-white rounded-md"
              : isPending
              ? "pending"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/alltoys`}
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-green-600 text-white rounded-md"
              : isPending
              ? "pending"
              : ""
          }
        >
          Instructors
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/alltoys`}
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-green-600 text-white rounded-md"
              : isPending
              ? "pending"
              : ""
          }
        >
          Classes
        </NavLink>
      </li>
      {/* {user && (
        <li>
          <NavLink
            to={`/mytoys`}
            className={({ isActive, isPending }) =>
              isActive
                ? "bg-green-600 text-white rounded-md"
                : isPending
                ? "pending"
                : ""
            }
          >
            My Toys
          </NavLink>
        </li>
      )} */}
      {/* {user && (
        <li>
          <NavLink
            to={`/addtoy`}
            className={({ isActive, isPending }) =>
              isActive
                ? "bg-green-600 text-white rounded-md"
                : isPending
                ? "pending"
                : ""
            }
          >
            Add A Toy
          </NavLink>
        </li>
      )} */}
      <li>
        <NavLink
          to={`/blog`}
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-green-600 text-white rounded-md"
              : isPending
              ? "pending"
              : ""
          }
        >
          Dashboard
        </NavLink>
      </li>
      {user ? (
        <li>
          <NavLink
            to={`/login`}
            // onClick={handleLogout}
            className={({ isActive, isPending }) =>
              isActive
                ? "bg-green-600 text-white rounded-md"
                : isPending
                ? "pending"
                : ""
            }
          >
            LogOut
          </NavLink>
        </li>
      ) : (
        <li>
          <NavLink
            to={`/login`}
            className={({ isActive, isPending }) =>
              isActive
                ? "bg-green-600 text-white rounded-md"
                : isPending
                ? "pending"
                : ""
            }
          >
            Login
          </NavLink>
        </li>
      )}
      {/* {user && (
        <>
          <button
            title={user?.displayName}
            className="btn btn-ghost btn-circle avatar"
          >
            <img className="w-full rounded-full mr-4" src={user?.photoURL} />
          </button>
        </>
      )} */}
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          {user && (
            <>
              <button
                // title={user?.displayName}
                className="btn btn-ghost btn-circle avatar"
              >
                <img className="w-full rounded-full mr-4" src={user.photoURL ? user?.photoURL : 'https://i.ibb.co/zXbT9GV/image.png'} />
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
