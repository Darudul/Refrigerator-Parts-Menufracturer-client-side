import React, { useEffect, useState } from "react";

const HomeReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviewsget")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <div className=" bg-base-100 mt-10 mb-10">
      <h2 className="text-2xl text-center mt-5 mb-5 font-bold text-cyan-600">
        Customers Reviews
      </h2>

      <div className=" max-w-7xl mx-auto set-grid ">
        {reviews.map((review) => (
          <div
            className="bg-cyan-500	 shadow-lg p-3 rounded-lg font-bold text-white"
            key={review._id}
          >
            <p className='text-center'>
              <span>Review:</span> {review.review}
            </p>
            <p className='text-center'>{review.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeReview;
