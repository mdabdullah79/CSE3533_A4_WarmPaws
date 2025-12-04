import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        //
        toast.success("Logout Successfull");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="relative mb-16">
      <div class="navbar bg-base-100 shadow-sm fixed top-0 z-10 ">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabindex="-1"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >

                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/services">Services</NavLink>
                </li>
                <li>
                  <NavLink to="/profile">My Profile</NavLink>
                </li>
              
            </ul>
          </div>
          <a class="btn btn-ghost text-xl">WarmPaw</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/profile">My Profile</NavLink>
            </li>
          </ul>
        </div>
        <div class="navbar-end">
          {user ? (
            <div class="dropdown dropdown-end">
              <div
                tabindex="0"
                role="button"
                class="btn btn-ghost btn-circle avatar"
              >
                <div className="relative inline-block">
                  <img
                    src={user?.photoURL || "https://via.placeholder.com/40"}
                    alt="User avatar"
                    className="w-10 h-10 rounded-full object-cover cursor-pointer"
                  />
                  <div className="absolute bottom-0 right-0 bg-green-500 border-2 border-white w-3 h-3 rounded-full"></div>
                </div>
              </div>

              <ul
                tabindex="-1"
                class="menu menu-sm dropdown-content bg-base-100 rounded-box z-5 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <NavLink to="/profile"><a class="justify-between">My Profile</a></NavLink>
                </li>
                <button onClick={handleLogout}>
                  <li>
                    <a>Logout</a>
                  </li>
                  <Toaster />
                </button>
              </ul>
            </div>
          ) : (
            <NavLink to="/auth/login">
              <a class="btn">Log in</a>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
