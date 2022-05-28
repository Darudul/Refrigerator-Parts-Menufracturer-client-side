import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import MyOrderModal from "./MyOrderModal";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [deleteOrder, setDeleteOrder] = useState({});
  console.log(deleteOrder);
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
        setDeleteOrder({});
      });
  };

  return (
    <div className="bg-cyan-100 pb-16 rounded">
      {deleteOrder._id && (
        <MyOrderModal
          setDeleteOrder={setDeleteOrder}
          deleteItem={deleteItem}
          deleteOrder={deleteOrder}
        ></MyOrderModal>
      )}
      <h2 className="text-xl font-bold mt-4 text-orange-600 mb-4 pt-4 text-center">
        My Booking Order
      </h2>
      <div className="overflow-x-auto max-w-7xl mx-auto">
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
                <td>{order.userName}</td>
                <td>{order.email}</td>
                <td>{order.phone}</td>
                <td>{order.address}</td>
                <td>
                  {order.price && !order.paid && (
                    <Link to={`/dashboard/payment/${order._id}`}>
                      <button className="btn btn-sm bg-orange-500 border-none">
                        Pay
                      </button>
                    </Link>
                  )}
                  {order.price && order.paid && (
                    <div>
                      <span className=" bg-teal-600 text-white font-bold px-4 py-1 rounded">
                        Paid
                      </span>
                      <p>
                        Transaction id:{" "}
                        <span className="text-success">
                          {order.transactionId}
                        </span>
                      </p>
                    </div>
                  )}
                </td>

                <td>
                  {!order.transactionId && (
                    <label
                      onClick={() => setDeleteOrder(order)}
                      htmlFor="deleOrder"
                      className="btn btn-sm bg-orange-500	border-none"
                    >
                      Cancel
                    </label>
                  )}
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
