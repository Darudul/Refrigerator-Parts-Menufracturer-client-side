import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({ user, refetch, setModal }) => {
  const handleDelete = (email) => {
    fetch(`http://localhost:5000/alluserr/${email}`, {
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
      <input type="checkbox" id="deleteModal" class="modal-toggle" />
      <div class="modal bg-transparent">
        <div class="modal-box relative">
          <label
            for="deleteModal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold">
            Congratulations random Interner user!
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <button onClick={() => handleDelete(user.email)}>yes</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;