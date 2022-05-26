import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import auth from "../../firebase.init";
import Loading from "../../LoginSignup/Loading/Loading";

const AddProduct = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const clickHome = () => {
    navigate("/home");
  };
  if (loading) {
    return <Loading></Loading>;
  }
  const addProduct = async (event) => {
    event.preventDefault();
    const email = user.email;
    const image = event.target.img.value;
    const name = event.target.itemname.value;
    const description = event.target.description.value;
    const price = event.target.price.value;
    const minimumQuantity = event.target.quantity.value;
    const availableQuantity = event.target.available.value;
    const addProduct = {
      email,
      image,
      name,
      description,
      price,
      minimumQuantity,
      availableQuantity,
    };
    // console.log(addProduct);
    const url = `https://limitless-dusk-82358.herokuapp.com/addItem`;
    const { data } = await axios.post(url, addProduct, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    event.target.reset();
  };
  return (
    <div className="max-w-7xl mx-auto mt-10 mb-16">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-300">
        <div className="card-body">
          <form onSubmit={addProduct}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="text"
                name="img"
                placeholder="Educational background"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                name="itemname"
                placeholder="Educational background"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Desription</span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="Add your location"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="Your Number"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Minimum Quantity</span>
              </label>
              <input
                type="text"
                name="quantity"
                placeholder="Add your location"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <input
                type="text"
                name="available"
                placeholder="Add your location"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Add Product</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
