import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import ManageAllOrderModal from "./ManageAllOrdersModal";

const ManageAllOrders = () => {
  const navigate = useNavigate();
  const [allOrders, SetAllOrders] = useState([]);
  const [deleteOrder, setDeleteOrder] = useState({});
  useEffect(() => {
    fetch("https://limitless-dusk-82358.herokuapp.com/bookingOrder", {
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
    const url = `https://limitless-dusk-82358.herokuapp.com/bookingOrder/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const restItem = allOrders.filter((item) => item._id !== id);
        SetAllOrders(restItem);
        setDeleteOrder({});
      });
  };
  const handleShipped = (id) => {
    const status = { status: "shipped" };
    fetch(
      `https://limitless-dusk-82358.herokuapp.com/api/orders/shipped/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(status),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="max-w-7xl mx-auto bg-orange-100 pb-10 pl-4 pr-4 rounded pt-5 mb-10">
      {deleteOrder._id && (
        <ManageAllOrderModal
          setDeleteOrder={setDeleteOrder}
          deleteItem={deleteItem}
          deleteOrder={deleteOrder}
        ></ManageAllOrderModal>
      )}
      <div>
        <h5 className="text-xl font-bold text-red-300 mt-5 mb-5 text-center">
          Manage All Orders
        </h5>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>ItemName</th>
                <th>Price</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((order, index) => (
                <tr key={order._id}>
                  <th>{index + 1}</th>
                  <td>{order.userName}</td>
                  <td>{order.email}</td>
                  <td>{order.name}</td>
                  <td>${order.price}</td>
                  <td>{order.itemMinimumQuantity}</td>
                  <td>{order.itemAvailableQuantity}</td>

                  <td>
                    {order?.paid ? (
                      <>
                        {order?.transactionId ? (
                          <p className="text-green-500">Paid</p>
                        ) : (
                          <button
                            onClick={() => handleShipped(order._id)}
                            className="text-orange-500 hover:underline hover:cursor-pointer"
                          >
                            UnPaid
                          </button>
                        )}
                      </>
                    ) : (
                      <label className="text-orange-500">UnPaid</label>
                    )}
                  </td>
                  <td>
                    {order?.paid ? (
                      <>
                        {order?.status ? (
                          <p className="text-green-500">Shipped</p>
                        ) : (
                          <button
                            onClick={() => handleShipped(order._id)}
                            className="text-orange-500 hover:underline hover:cursor-pointer"
                          >
                            Pending
                          </button>
                        )}
                      </>
                    ) : (
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
    </div>
  );
};

export default ManageAllOrders;
