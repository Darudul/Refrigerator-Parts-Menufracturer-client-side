import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../../LoginSignup/Loading/Loading";

const Review = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  if (loading) {
    return <Loading></Loading>;
  }
  const addReview = async (event) => {
    event.preventDefault();
    const description = event.target.description.value;
    const review = event.target.review.value;
    const image = event.target.image.value;

    const addReview = {
      description,
      review,
      image,
    };
    // console.log(addProduct);
    const url = `https://limitless-dusk-82358.herokuapp.com/reviews`;
    const { data } = await axios.post(url, addReview, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    toast.success("review added success fully");
    event.target.reset();
  };

  return (
    <div className=" w-86 bg-base-100 mb-16 ml:lg-96">
      <div className="card overflow-x-auto max-w-7xl mx-auto shadow-2xl bg-slate-200">
        <div className="card-body">
          <form onSubmit={addReview}>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Your Image</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="Image"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Product Review</span>
              </label>
              <input
                type="number"
                name="review"
                placeholder="Product Review"
                className="input input-bordered"
                max="5"
                min="1"
                required
              />
            </div>
            <div className="form-control font-bold">
              <label className="label">
                <span className="label-text">Product Desription</span>
              </label>
              <textarea
                type="text"
                name="description"
                placeholder="Product Desription"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-secondary">Add Review</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
