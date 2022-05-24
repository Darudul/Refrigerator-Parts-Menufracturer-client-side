import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className="drawer drawer-mobile max-w-7xl mx-auto">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <h2 className="text-2xl font-bold text-purple-500  mt-10">
          Welcome to Dashboard
        </h2>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label for="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content mt-16">
          <li>
            <Link to="/dashboard">My Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/review">Add Reviews</Link>
          </li>
          <li>
            <Link to="/dashboard/alluser">All Users</Link>
          </li>
          <li>
            <Link to="/dashboard/manageproduct">Manage Products</Link>
          </li>
          <li>
            <Link to="/dashboard/manageallorder">Manage All Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/addnewitem">Add A Product</Link>
          </li>
          <li>
            <Link to="/dashboard/myprofile">My Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
