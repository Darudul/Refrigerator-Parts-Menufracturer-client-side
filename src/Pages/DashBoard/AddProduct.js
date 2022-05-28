import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
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
    toast.success("Product added Successfully");
    event.target.reset();
  };
  return (
    <div className="max-w-7xl mx-auto mt-10 mb-16">
      <h3 className="text-2xl text-orange-600 mt-5 mb-5 font-bold">
        Please Add Product From Here
      </h3>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-200">
        <div className="card-body">
          <form onSubmit={addProduct}>
            <div className="form-control">
              <label className="label font-bold">
                <span className="label-text">Image</span>
              </label>
              <input
                type="text"
                name="img"
                placeholder="Image"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                name="itemname"
                placeholder="Product Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">
                <span className="label-text">Desription</span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="Product Desription"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="Product Price"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">
                <span className="label-text">Minimum Quantity</span>
              </label>
              <input
                type="text"
                name="quantity"
                placeholder="Add Quantity"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">
                <span className="label-text">Available Quantity</span>
              </label>
              <input
                type="text"
                name="available"
                placeholder="Available Quantity"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Add A Product</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
