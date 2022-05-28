import React from "react";
import "./OrderNow.css";
const OrderNow = () => {
  return (
    <div className="order max-w-7xl mx-auto">
      <div className="card card-side bg-slate-200 pb-5 pt-5 pl-5 pr-5 shipping">
        <img
          src="https://i.ibb.co/3BWBWDB/refrigerator-parts-845x550.jpg"
          alt="Picture"
          width="200px"
          className="bg-slate-200 rounded"
        />
        <div className="card-body bg-slate-200">
          <h2 className="text-xl text-red-600 font-bold">Free Shipping</h2>
          <p className=" font-bold text-cyan-600">ON ORDER UPTO $6000</p>
          <div className="card-actions justify-start">
            <button className="btn btn-sm bg-cyan-400 border-0 text-white mt-5">
              Order Now
            </button>
          </div>
        </div>
      </div>

      <div className="card card-side bg-cyan-100 pb-5 pt-5 pl-5 pr-5 shipping">
        <img
          src="https://i.ibb.co/HxC28nN/istockphoto-178832562-612x612.jpg"
          alt="Picture"
          width="200px"
          className="bg-slate-200 rounded"
        />
        <div className="card-body bg-cyan-100">
          <h2 className="text-xl text-red-600 font-bold">SAVE UPTO 5%</h2>
          <p className="font-bold text-cyan-600">
            OFFER IS AVAILABLE UNTIL 26 OF JUNE
          </p>
          <div className="card-actions justify-start">
            <button className="btn btn-sm bg-cyan-400 border-0 text-white mt-2">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderNow;
