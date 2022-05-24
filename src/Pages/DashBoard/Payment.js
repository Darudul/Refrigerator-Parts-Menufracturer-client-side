import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import Loading from "../../LoginSignup/Loading/Loading";

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/booking/${id}`;

  const { data: order, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <p className="text-success font-bold">Hello, {order.userName}</p>
          <h2 class="card-title">Please Pay for: {order.name}</h2>
          <p>Please pay for this service: {order.price}</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          {/* <Elements stripe={stripePromise}>
            <CheckoutForm appointment={appointment} />
          </Elements> */}
        </div>
      </div>
    </div>
  );
};

export default Payment;
