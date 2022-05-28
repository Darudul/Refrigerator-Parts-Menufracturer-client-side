import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import ManageProductModal from "./ManageProductModal";

const ManageProduct = () => {
  const navigate = useNavigate();
  const [deleteOrder, setDeleteOrder] = useState({});
  // console.log(deleteOrder);
  const [manageProduct, setManageProduct] = useState([]);
  useEffect(() => {
    fetch("https://limitless-dusk-82358.herokuapp.com/tools", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setManageProduct(data);
      });
  }, [manageProduct]);

  const addNewItem = () => {
    navigate("/addnewitem");
  };
  const deleteItem = (id) => {
    const url = `https://limitless-dusk-82358.herokuapp.com/manage/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const restItem = manageProduct.filter((item) => item._id !== id);
        setManageProduct(restItem);
        setDeleteOrder({});
      });
  };
  return (
    <div className="max-w-7xl mx-auto bg-cyan-100 pb-16 pl-4 pr-4 rounded">
      {deleteOrder._id && (
        <ManageProductModal
          setDeleteOrder={setDeleteOrder}
          deleteItem={deleteItem}
          deleteOrder={deleteOrder}
        ></ManageProductModal>
      )}
      <div>
        <h5 className="text-xl font-bold my-10 text-center text-purple-500 pt-5">
          Manage All Products
        </h5>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>ItemName</th>
                <th>ItemPrice</th>
                <th>MinimumQuantity</th>
                <th>AvailableQuantity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {manageProduct.map((order, index) => (
                <tr key={order._id}>
                  <th>{index + 1}</th>
                  <td>{order.name}</td>
                  <td>${order.price}</td>
                  <td>{order.minimumQuantity}</td>
                  <td>{order.availableQuantity}</td>
                  <td>
                    <label
                      onClick={() => setDeleteOrder(order)}
                      htmlFor="deleOrder"
                      className="btn btn-sm bg-orange-500	border-none"
                    >
                      Cancel
                    </label>
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

export default ManageProduct;
