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
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://api.lorem.space/image/shoes?w=400&h=225"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => purchaseOrder(_id)}
            className="btn btn-primary"
            tool={tool}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
