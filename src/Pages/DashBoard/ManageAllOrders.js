import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";

const ManageAllOrders = () => {
  const navigate = useNavigate();
  const [allOrders, SetAllOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/bookingOrder", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        SetAllOrders(data);
      });
  }, [allOrders]);

  const addNewItem = () => {
    navigate("/addnewitem");
  };
  const deleteItem = (id) => {
    const success = window.confirm("Are you sure you want to delete this item");
    if (success) {
      const url = `http://localhost:5000/bookingOrder/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const restItem = allOrders.filter((item) => item._id !== id);
          SetAllOrders(restItem);
        });
    }
  };
  const handleShipped = (id) => {
    const status = { status: "shipped" };
    fetch(`http://localhost:5000/api/orders/shipped/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(status),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <h5 className="text-xl font-bold text-red-300 mt-5 mb-5">
          Manage All Orders
        </h5>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>ItemName</th>
                <th>Email</th>
                <th>ItemName</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((order, index) => (
                <tr key={order._id}>
                  <th>{index + 1}</th>
                  <td>{order.userName}</td>
                  <td>{order.email}</td>
                  <td>{order.name}</td>
                  <td>{order.price}</td>
                  <td>{order.itemMinimumQuantity}</td>
                  <td>{order.itemAvailableQuantity}</td>
                  <td>
                    {order?.paid ? (
                      <>
                        {order?.status ? (
                          <p className="text-green-500">Delivered</p>
                        ) : (
                          <button
                            onClick={() => handleShipped(order._id)}
                            className="text-orange-500 hover:underline hover:cursor-pointer"
                          >
                            Shipped
                          </button>
                        )}
                      </>
                    ) : (
                      <button
                        onClick={() => deleteItem(order._id)}
                        className="text-red-500 hover:underline hover:cursor-pointer"
                      >
                        Cancel
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageAllOrders;
