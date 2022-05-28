import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router";
import auth from "../firebase.init";
import Loading from "../LoginSignup/Loading/Loading";
import BookingModal from "./BookingModal";

const PurchaseOrder = () => {
  const { Id } = useParams();
  const [newTools, setTool] = useState({});
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(true);
  };
  useEffect(() => {
    const url = `https://limitless-dusk-82358.herokuapp.com/tool/${Id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, [newTools]);
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="max-w-7xl mx-auto mt-10 bg-base-100 shadow-xl mb-96">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <img src={newTools.image} width="350px" alt="" />

        <div className="card-body">
          <h2 className="card-title">
            <span className="text-purple-500 font-bold">Name:</span>{" "}
            {newTools?.name}
          </h2>
          <p>{newTools?.description}</p>
          <p>
            <span className="text-purple-500 font-bold">Price: $</span>
            {newTools?.price}
          </p>
          <p>
            <span className="text-purple-500 font-bold">Minimumquantity:</span>{" "}
            {newTools?.minimumQuantity}
          </p>
          <p>
            <span className="text-purple-500 font-bold">
              Availablequantity:
            </span>{" "}
            {newTools?.availableQuantity}
          </p>
          <div className="card-actions">
            {modal && (
              <BookingModal modal={modal} setModal={setModal}></BookingModal>
            )}
            <label
              for="booking-modal"
              onClick={() => setModal(newTools)}
              className="btn btn-primary"
            >
              {" "}
              Book Order
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseOrder;
