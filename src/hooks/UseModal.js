import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import Loading from "../LoginSignup/Loading/Loading";
import MyOrders from "../Pages/DashBoard/MyOrders";

const UseModal = () => {
  const [modal, setModal] = useState(false);
  const [orders, setOrders] = useState([]);
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  
  const handleModal = () => {
    setModal(true);
  };
  return (
    <div>
      <label
        onClick={() => setModal(orders)}
        htmlFor="my-modal-6"
        className="btn btn-primary"
      >
        open modal
      </label>
      {modal && <MyOrders modal={modal} setModal={setModal}></MyOrders>}
    </div>
  );
};

export default UseModal;
