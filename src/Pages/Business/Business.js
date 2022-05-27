import React from "react";
import { FaFlagUsa } from "react-icons/fa";
import "./Business.css";
const Business = () => {
  return (
    <div className="mt-10 mb-10">
      <h1 className="text-center mb-6 text-cyan-500 text-5xl font-bold">
        MILLIONS BUSINESS TRUST US
      </h1>
      <h3 className="text-center mb-24 font-bold">
        TRY TO UNDERSTAND USERS EXPECTATION
      </h3>
      <div className="max-w-7xl mx-auto grid business-style">
        <div>
          <h1 className="text-4xl text-cyan-500 mb-4">
            <img
              src="https://i.ibb.co/kh0mX7p/target.png"
              width="60px"
              alt=""
            />{" "}
          </h1>
          <h1 className="text-3xl font-bold">100+</h1>
          <p className="mt-3 text-2xl text-cyan-500">Customers</p>
        </div>
        <div>
          <h1 className="text-4xl text-cyan-500 mb-4">
            <img
              src="https://i.ibb.co/k5cvCkS/annuities.png"
              width="60px"
              alt=""
            />{" "}
          </h1>
          <h1 className="text-3xl font-bold">120M+</h1>
          <p className="mt-3 text-2xl text-cyan-500">Annual revenue</p>
        </div>
        <div>
          <h1 className="text-4xl text-cyan-500 mb-4">
            <img
              src="https://i.ibb.co/85qW6BZ/rating.png"
              width="60px"
              alt=""
            />{" "}
          </h1>
          <h1 className="text-3xl font-bold">33k+</h1>
          <p className="mt-3 text-2xl text-cyan-500">Reviews</p>
        </div>
        <div>
          <h1 className="text-4xl text-cyan-500 mb-4">
            <img
              src="https://i.ibb.co/M5zxLF3/tool-box.png"
              width="60px"
              alt=""
            />{" "}
          </h1>
          <h1 className="text-3xl font-bold">50+</h1>
          <p className="mt-3 text-2xl text-cyan-500">Tools</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
        <div className="card mt-10 shadow-xl">
          <div className="card-body">
            <div>
              <h2 className="card-title text-3xl text-orange-400	">
                Have any question about us or get a products request?
              </h2>
              <p className="text-2xl mt-3 text-amber-400	">Don't hesitate to contact us</p>
              <div className="flex justify-end">
                <button className="btn btn-primary bg-green-400 border-none">Request For Quote</button>
                <button className="btn btn-primary ml-3 bg-green-400 border-none">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
