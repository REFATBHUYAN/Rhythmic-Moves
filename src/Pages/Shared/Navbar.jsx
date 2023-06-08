import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () =>{
    logOut();
    navigate('/login')
    
  }
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
          to={`/instructors`}
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
          to={`/classes`}
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
      <li>
        <NavLink
          to={`/dashboard`}
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
      { user && <li>
          <button
            onClick={handleLogout}
          >
            LogOut
          </button>
        </li>
       }
      
    </>
  );
  return (
    <>
      <div className="navbar bg-green-200">
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
              className="menu menu-sm dropdown-content mt-3 p-2 shadow  rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Rhythmic Moves</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <button
                title={user?.displayName}
                className="btn btn-ghost btn-circle avatar"
              >
                <img
                  className="w-full rounded-full mr-4"
                  src={user?.photoURL || "https://i.ibb.co/zXbT9GV/image.png"}
                />
              </button>
            </>
          ) : (
            <>
              <button>
                <NavLink
                  to={`/login`}
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "text-blue-600 font-bold underline"
                      : isPending
                      ? "pending"
                      : ""
                  }
                >
                  Login
                </NavLink>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
