import React, { useEffect, useState } from "react";
import BookingModal from "../../../PurchaseOrder/BookingModal";
import PurchaseOrder from "../../../PurchaseOrder/PurchaseOrder";
import Tool from "../Tool/Tool";
import "./Tools.css";
const Tools = () => {
  const [toolss, setTools] = useState([]);
  useEffect(() => {
    fetch("https://limitless-dusk-82358.herokuapp.com/tools")
      .then((res) => res.json())
      .then((data) => {
        setTools(data);
      });
  }, []);
  const items = [...toolss];
  const newTools = items.reverse();
  const sliceTools = newTools.slice(0, 6);

  return (
    <div className="card bg-base-100 mt-10 mb-10">
      <h2 className="text-2xl text-center mt-5 mb-5 font-bold text-cyan-600">
        Tools OR Parts
      </h2>

      <div className="max-w-7xl mx-auto set-grid">
        {sliceTools.map((tool) => (
          <div key={tool._id}>
            <Tool tool={tool}></Tool>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
