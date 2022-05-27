import { signOut } from "@firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import navbar from "../../images/navbar.jpg";
const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const signUp = () => {
    navigate("/signup");
  };

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  const partItems = (
    <>
      <li className="font-bold text-cyan-600">
        <Link to="/">Home</Link>
      </li>
      {user && (
        <li className="font-bold text-cyan-600">
          <Link to="/dashboard">DashBoard</Link>
        </li>
      )}
      <li className="font-bold text-cyan-600">
        <Link to="/blogs">Blogs</Link>
      </li>
      <li className="font-bold text-cyan-600">
        <Link to="/myportfolio2">MyPortFolio</Link>
      </li>

      <li>
        <Link to="/login">
          {user ? (
            <div className="flex flex-row ">
              <p className="mr-2 font-bold">{user?.displayName}</p>
              <button
                className="btn-sm bg-teal-400 border-0 rounded text-white font-bold"
                onClick={logout}
              >
                LogOut
              </button>
            </div>
          ) : (
            <div>
              <button className=" btn-sm bg-teal-400 border-0 rounded text-white font-bold">
                Login
              </button>
              <Link to="/signup">
                <button className="ml-3 btn-sm bg-teal-400 border-0 rounded text-white font-bold">
                  SignUp
                </button>
              </Link>
            </div>
          )}
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {partItems}
          </ul>
        </div>
        <div className="">
          <div className="w-10 rounded-full">
            <Link to="/">
              <img src={"https://i.ibb.co/hFQY9Np/conveyor.png"} className="" />
            </Link>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{partItems}</ul>
      </div>
      <div className="navbar-end">
        <label
          tabIndex="1"
          for="dashboard-sidebar"
          className="btn btn-ghost lg:hidden"
        >
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
      </div>
    </div>
  );
};

export default Header;
