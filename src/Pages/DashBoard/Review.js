import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import auth from "../../firebase.init";
import Loading from "../../LoginSignup/Loading/Loading";

const Review = ({ tool }) => {
  const { name } = tool;

  console.log(name);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  if (loading) {
    return <Loading></Loading>;
  }
  const addReview = async (event) => {
    event.preventDefault();
    const description = event.target.description.value;
    const review = event.target.review.value;

    const addReview = {
      description,
      review,
      name,
    };
    // console.log(addProduct);
    const url = `http://localhost:5000/reviews`;
    const { data } = await axios.post(url, addReview, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    event.target.reset();
  };

  return (
    <div className=" w-86 bg-base-100">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-200">
        <h2 className="text-center font-bold mt-5">{name}</h2>
        <div className="card-body">
          <form onSubmit={addReview}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Review</span>
              </label>
              <input
                type="number"
                name="review"
                placeholder="Product Review"
                className="input input-bordered"
                maxLength={5}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Desription</span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="Product Desription"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Add Review</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
