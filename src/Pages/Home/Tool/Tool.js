import React, { useState } from "react";
import { useNavigate } from "react-router";
import BookingModal from "../../../PurchaseOrder/BookingModal";

const Tool = ({ tool }) => {
  const {
    _id,
    name,
    image,
    description,
    price,
    minimumQuantity,
    availableQuantity,
  } = tool;

  const navigate = useNavigate();
  const purchaseOrder = (id) => {
    navigate(`/purchaseorder/${id}`);
  };
  return (
    <div className="card card-compact w-86 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://api.lorem.space/image/shoes?w=400&h=225"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-xl text-indigo-700 font-bold"> {name}</h2>
        <p>{description}</p>
        <p>
          <span className="text-indigo-700 font-bold">Price: </span>
          {price}
        </p>
        <p>
          <span className="text-indigo-700 font-bold">
            Minimum Order Quantity:
          </span>{" "}
          {minimumQuantity}
        </p>
        <p>
          <span className="text-indigo-700 font-bold">
            Available Order Quantity:
          </span>{" "}
          {availableQuantity}
        </p>
        <div className="card-actions mt-3">
          <button
            onClick={() => purchaseOrder(_id)}
            className="btn btn btn-info"
            tool={tool}
          >
            Purchase Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
