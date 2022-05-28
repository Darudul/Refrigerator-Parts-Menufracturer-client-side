import React from "react";
import { FaFlagUsa } from "react-icons/fa";
import "./Business.css";
const Business = () => {
  return (
    <div className="mt-10 mb-10 bg-cyan-50 pt-10 pb-16">
      <h1 className="text-center mb-6 text-cyan-500 text-3xl font-bold">
        THOUSAND OF COMPANY TRUST US
      </h1>
      <h3 className="text-center mb-24 font-bold">
        TRY TO UNDERSTAND CUSTOMERS EXPECTATION
      </h3>
      <div className="max-w-7xl mx-auto business-style">
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
          <h1 className="text-3xl font-bold">60+</h1>
          <p className="mt-3 text-2xl text-cyan-500">Tools</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
