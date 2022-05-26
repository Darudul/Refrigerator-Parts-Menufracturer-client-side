import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyOrderModal = ({ deleteItem, deleteOrder, setDeleteOrder }) => {
  return (
    <>
      <input type="checkbox" id="deleOrder" class="modal-toggle" />
      <div class="modal bg-transparent">
        <div class="modal-box relative">
          <label
            for="deleOrder"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold">
            Are You Sure You Want To Delete Item
          </h3>

          <button
            className="btn btn-xs mt-5"
            onClick={() => deleteItem(deleteOrder._id)}
          >
            YAH GOT IT
          </button>
        </div>
      </div>
    </>
  );
};

export default MyOrderModal;
