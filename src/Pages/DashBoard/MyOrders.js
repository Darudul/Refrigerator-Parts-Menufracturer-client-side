import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  // const {} = modal;
  const [modal, setModal] = useState(false);

  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      fetch(
        `https://limitless-dusk-82358.herokuapp.com/booking?email=${user.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => {
          console.log("res", res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => setOrders(data));
    }
  }, [user]);

  const deleteItem = (id) => {
    const url = `https://limitless-dusk-82358.herokuapp.com/booking?email=${user.email}`;
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
    <div className="">
      <h2>My Order: {orders.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Payment</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <th>{index + 1}</th>
                <td>{order.itemName}</td>
                <td>{order.email}</td>
                <td>{order.phone}</td>
                <td>{order.address}</td>
                <td>
                  {order.price && !order.paid && (
                    <Link to={`/dashboard/payment/${order._id}`}>
                      <button className="btn btn-xs">Pay</button>
                    </Link>
                  )}
                  {order.price && order.paid && (
                    <div>
                      <span className="text-success">Paid</span>
                      <p>
                        Transaction id:{" "}
                        <span className="text-success">{order.transactionId}</span>
                      </p>
                    </div>
                  )}
                </td>
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
                      className="modal-toggle"
                    />
                    <div className="modal modal-bottom sm:modal-middle">
                      <div className="modal-box">
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
