import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const DashBoard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <h2 className="text-2xl font-bold text-purple-500  mt-10 ml-5">
          Welcome to Dashboard
        </h2>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label for="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content mt-16">
          {!admin && (
            <>
              <li>
                <Link
                  to="/dashboard/myorder"
                  className="text-purple-500 font-bold"
                >
                  My Orders
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/review"
                  className="text-purple-500 font-bold"
                >
                  Add Reviews
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/myprofile"
                  className="text-purple-500 font-bold"
                >
                  My Profile
                </Link>
              </li>
            </>
          )}
          {admin && (
            <>
              <li>
                <Link
                  to="/dashboard/manageproduct"
                  className="text-purple-500 font-bold"
                >
                  Manage Products
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/manageallorder"
                  className="text-purple-500 font-bold"
                >
                  Manage All Orders
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/addnewitem"
                  className="text-purple-500 font-bold"
                >
                  Add A Product
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/myprofile"
                  className="text-purple-500 font-bold"
                >
                  My Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/alluser"
                  className="font-bold text-purple-500 "
                >
                  Make Admin
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
