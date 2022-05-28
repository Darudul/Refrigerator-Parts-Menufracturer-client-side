import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
// import { ToastContainer, toast } from "react-toastify";
import { toast } from "react-toastify";
import auth from "../firebase.init";

const BookingModal = ({ modal, setModal }) => {
  const { name, _id, description, price, minimumQuantity, availableQuantity } =
    modal;
  const [user, loading, error] = useAuthState(auth);
  const [isDisabled, setDisabled] = useState(false);

  const handleBooking = (event) => {
    event.preventDefault();
    console.log(name, _id);

    const userName = event.target.name.value;
    const email = event.target.email.value;
    const quantity = event.target.minimum.value;
    if (quantity < minimumQuantity || quantity > availableQuantity) {
      toast.error("Quantity can not be less than MinimumQuantity and higher than AvailableQuantity");
      setDisabled(true);
      return;
    }

    const phone = event.target.phone.value;
    const address = event.target.address.value;

    const booking = {
      name: name,
      price,
      userName,
      email,
      quantity,
      phone,
      address,
    };
    console.log(booking);
    fetch("https://limitless-dusk-82358.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("booking added successfully");
        setModal(null);
      });
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">{name}</h3>
          <>
            <form
              onSubmit={handleBooking}
              className="grid grid-cols-1 gap-3 justify-items-center mt-2"
            >
              <input
                type="text"
                name="name"
                disabled
                value={user?.displayName || ""}
                className="input input-bordered w-full max-w-xs"
              />

              <input
                type="email"
                name="email"
                disabled
                value={user?.email || ""}
                className="input input-bordered w-full max-w-xs"
              />

              <input
                type="text"
                name="minimum"
                defaultValue={minimumQuantity}
                className="input input-bordered w-full max-w-xs"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="submit"
                value="Purchase Order"
                className="btn btn-secondary w-full max-w-xs"
                disabled={isDisabled}
              />
            </form>
          </>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
