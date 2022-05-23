import React, { useEffect, useState } from "react";
import BookingModal from "../../../PurchaseOrder/BookingModal";
import PurchaseOrder from "../../../PurchaseOrder/PurchaseOrder";
import Tool from "../Tool/Tool";

const Tools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tool")
      .then((res) => res.json())
      .then((data) => {
        setTools(data);
      });
  }, [tools]);
  const items = [...tools];
  const newTools = items.reverse();
  return (
    <div className="card bg-base-100 mt-10 mb-10">
      <h2 className="text-2xl text-center mt-5 mb-5 font-bold">
        Tools OR Parts
      </h2>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {newTools?.map((tool) => (
          <div key={tool._id}>
            <Tool tool={tool}></Tool>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
