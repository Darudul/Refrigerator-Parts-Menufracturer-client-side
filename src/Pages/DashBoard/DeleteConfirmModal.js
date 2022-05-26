import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({ user, refetch, setModal }) => {
  const handleDelete = (email) => {
    fetch(`https://limitless-dusk-82358.herokuapp.com/alluserr/${email}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setModal({});
          refetch();
        }
      });
  };
  return (
    <div className="">
      <input type="checkbox" id="deleteModal" className="modal-toggle" />
      <div className="modal bg-transparent">
        <div className="modal-box relative">
          <label
            for="deleteModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Are You Sure You Want To Delete Item
          </h3>

          <button
            onClick={() => handleDelete(user.email)}
            className="bg-orange-500 px-4 text-white font-bold rounded-full mt-5"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
