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
  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <h5>{allOrders.length}</h5>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>ItemName</th>
                <th>ItemPrice</th>
                <th>MinimumQuantity</th>
                <th>AvailableQuantity</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((order, index) => (
                <tr key={order._id}>
                  <th>{index + 1}</th>
                  <td>{order.itemName}</td>
                  <td>{order.itemPrice}</td>
                  <td>{order.itemMinimumQuantity}</td>
                  <td>{order.itemAvailableQuantity}</td>
                  <td>
                    <button
                      className=" btn btn-xs "
                      onClick={() => deleteItem(order._id)}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      className=" btn btn-xs "
                      onClick={() => addNewItem(order._id)}
                    >
                      Add A Product
                    </button>
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
