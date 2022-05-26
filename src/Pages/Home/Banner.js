import React from "react";
import "./Tools/Banner.css";
const Banner = () => {
  return (
    <div
      className="hero banner"
      style={{
        background: `url(${"https://i.ibb.co/K0d8Zmh/technician-repairing-computer-computer-hardware-repairing-upgrade-technology.png"})`,
        backgroundSize: "cover",
        height: "700px",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-3xl font-bold">
            WELCOME TO OUR MENUFRACTURER
          </h1>
          <p className="mb-5">
            You can get from here any refrigerator parts with your best price.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
