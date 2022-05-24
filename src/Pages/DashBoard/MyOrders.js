import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyOrders = () => {
  // const {} = modal;
  const [modal, setModal] = useState(false);

  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?email=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }
  }, [user]);

  const deleteItem = (id) => {
    const url = `http://localhost:5000/booking?email=${user.email}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const restItem = orders.filter((item) => item._id !== id);
        setOrders(restItem);
        setModal(true);
      });
  };
  return (
    <div className="max-w-7xl mx-auto">
      <h2>My Order: {orders.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{order.itemName}</td>
                <td>{order.email}</td>
                <td>{order.phone}</td>
                <td>{order.address}</td>
                <td>
                  <div>
                    <button
                      className=" btn btn-xs "
                      onClick={() => deleteItem(order._id)}
                    >
                      Delete
                    </button>
                    <input
                      type="checkbox"
                      id="my-modal-6"
                      class="modal-toggle"
                    />
                    <div class="modal modal-bottom sm:modal-middle">
                      <div class="modal-box">
                        <label
                          htmlFor="my-modal-6"
                          className="btn btn-sm btn-circle absolute right-2 top-2"
                        >
                          ✕
                        </label>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
