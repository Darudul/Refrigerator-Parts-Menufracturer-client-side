import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const ManageProduct = () => {
  const navigate = useNavigate();
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
    const success = toast("Your item deleted success fully");
    if (success) {
      const url = `https://limitless-dusk-82358.herokuapp.com/manage/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const restItem = manageProduct.filter((item) => item._id !== id);
          setManageProduct(restItem);
        });
    }
  };
  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <h5>{manageProduct.length}</h5>
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
              {manageProduct.map((order, index) => (
                <tr key={order._id}>
                  <th>{index + 1}</th>
                  <td>{order.name}</td>
                  <td>{order.price}</td>
                  <td>{order.minimumQuantity}</td>
                  <td>{order.availableQuantity}</td>
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

export default ManageProduct;
