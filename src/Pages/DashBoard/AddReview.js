import React, { useEffect, useState } from "react";
import Review from "./Review";

const AddReview = () => {
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
  const sliceTools = newTools.slice(0, 1);

  return (
    <div className="card bg-base-100 mt-10 mb-10">
      <h2 className="text-2xl mt-5 mb-5 font-bold text-cyan-600 text-center">
        Give Review
      </h2>

      <div className=" mx-auto">
        {sliceTools.map((tool) => (
          <div key={tool._id}>
            <Review tool={tool}></Review>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddReview;
