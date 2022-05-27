import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import Loading from "../../LoginSignup/Loading/Loading";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51L3CyrDWtkJH8iSZofaV3dJnvEz6q8gLDUpERbTpyahobDSRRX5c7yi3jO45BS8rJNqWJnTu7SE1uzCxjGdGvPap00gwT42Hsc"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://limitless-dusk-82358.herokuapp.com/mybooking/${id}`;

  const { data: order, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  // console.log(order, "payment");
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="overflow-x-auto max-w-7xl mx-auto ml-4 mr-4">
      <h3 className="mt-10 text-xl font-bold text-cyan-500">
        Welcome You Can Pay Here By Using Card
      </h3>
      <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div className="card-body bg-cyan-100">
          <p className="text-green-500 font-bold">Hello, {order?.userName}</p>
          <p className="">
            <span className="font-bold">Please Pay for:</span> {order?.name}
          </p>
          <p className="">
            {" "}
            <span className="font-bold">Please Pay: </span>${order.price}
          </p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-green-100 mt-16 mb-16">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order}></CheckoutForm>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
