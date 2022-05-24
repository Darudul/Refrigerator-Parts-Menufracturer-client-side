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
    <div class="max-w-7xl mx-auto mt-10 bg-base-100 shadow-xl mb-96">
      <div class="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://api.lorem.space/image/album?w=400&h=400"
            alt="Album"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Name:{newTools.name}</h2>
          <p>{newTools.description}</p>
          <p>Price: {newTools.price}</p>
          <p>Minimumquantity: {newTools.minimumQuantity}</p>
          <p>Availablequantity: {newTools.availableQuantity}</p>
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

      {/* <h4 className="ms-5 mb-0 text-muted">Update quantity</h4>
      <form className="ms-4 w-25 mt-5 style-form" onSubmit={handleUpdateUser}>
        <input
          className="w-50 border border-secondary rounded"
          type="text"
          name="num"
          placeholder="quantity"
          required
        />
        <br />
        <input
          className="w-50 border-0 bg-secondary text-white p-2 rounded"
          type="submit"
          value="Restock Items"
        />
      </form> */}
    </div>
  );
};

export default PurchaseOrder;
