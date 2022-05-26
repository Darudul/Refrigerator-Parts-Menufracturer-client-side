import React, { useEffect, useState } from "react";
import Review from "./Review";

const AddReview = () => {
  const [toolss, setTools] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tools")
      .then((res) => res.json())
      .then((data) => {
        setTools(data);
      });
  }, []);
  const items = [...toolss];
  const newTools = items.reverse();

  return (
    <div className="card bg-base-100 mt-10 mb-10">
      <h2 className="text-2xl text-center mt-5 mb-5 font-bold text-cyan-600">
        Tools OR Parts {toolss.length}
      </h2>

      <div className="max-w-7xl mx-auto set-grid">
        {newTools.map((tool) => (
          <div key={tool._id}>
            <Review tool={tool}></Review>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddReview;
