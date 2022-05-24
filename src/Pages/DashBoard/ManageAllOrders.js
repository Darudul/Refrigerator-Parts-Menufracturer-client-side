import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../../LoginSignup/Loading/Loading";

const ManageAllOrders = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("https://limitless-dusk-82358.herokuapp.com/booking")
      .then((res) => res.json())
      .then((data) => {
        setTools(data);
      });
  }, [tools]);
  return (
    <div>
      <div>
        <h2>All Orders: {tools.length}</h2>
        <div class="overflow-x-auto">
          {/* <table class="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Treatment</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((order, index) => (
                <tr key={order._id}>
                  <th>{index + 1}</th>
                  <td>{order.itemDescription}</td>
                  <td>{order.itemPrice}</td>
                  <td>{order.itemMinimumQuantity}</td>
                  <td>{order.itemAvailableQuantity}</td>
                </tr>
              ))}
            </tbody>
          </table> */}
        </div>
      </div>
    </div>
  );
};

export default ManageAllOrders;
