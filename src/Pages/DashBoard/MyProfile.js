import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import "./MyProfile.css";

const MyProfile = () => {
  const [profile, setProfile] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      fetch(
        `https://limitless-dusk-82358.herokuapp.com/user?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setProfile(data));
    }
  }, [user]);

  const [toolss, setTools] = useState([]);
  useEffect(() => {
    fetch(
      `https://limitless-dusk-82358.herokuapp.com/userProfile?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setTools(data);
      });
  }, [toolss]);

  const handleUser = (event) => {
    event.preventDefault();
    const userProfile = {
      name: user?.displayName,
      email: user?.email,
      education: event.target.education.value,
      location: event.target.location.value,
      phone: event.target.phone.value,
      linkedlnProfile: event.target.profile.value,
    };
    fetch("https://limitless-dusk-82358.herokuapp.com/api/users/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(userProfile),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    event.target.reset();
  };

  return (
    <div className="max-w-7xl mx-auto my-profile">
      <div className="mt-10">
        <h2 className="text-xl font-bold mt-4 mb-10 text-orange-600">
          My Profile Information
        </h2>

        <p className="mb-4 ml-3">
          <span className="label-text text-xl font-bold mb-5 text-cyan-500">
            {" "}
            Name:
          </span>
          {user?.displayName}
        </p>
        <p className="mb-4 ml-3">
          <span className="label-text text-xl font-bold text-cyan-500">
            Email:{" "}
          </span>
          {user?.email}
        </p>
        <div className="max-w-7xl mx-auto set-grid">
          {toolss.map((tool) => (
            <div key={tool._id}>
              <p className="mb-4 ml-3">
                <span className=" font-bold text-cyan-500"> Education: </span>
                {tool.education}
              </p>
              <p className="mb-4 ml-3">
                <span className="font-bold text-cyan-500"> Location:</span>
                {tool.location}
              </p>
              <p className="mb-4 ml-3">
                <span className=" font-bold text-cyan-500">
                  {" "}
                  Linkedln Profile:
                </span>
                {tool.linkedlnProfile}
              </p>
              <p className="mt-5  ml-3">
                <span className="text-cyan-500 font-bold"> Phone: </span>
                {tool.phone}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-cyan-400 mt-5 mb-5 text-xl font-bold">
          Add Your Profile Information
        </h2>
        <div className="card max-w-sm shadow-2xl bg-cyan-100">
          <div className="card-body">
            <form onSubmit={handleUser}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Education:</span>
                </label>
                <input
                  type="text"
                  name="education"
                  placeholder="Educational background"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Location</span>
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="Add your location"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Phone Number</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Number"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Linkedln Profile</span>
                </label>
                <input
                  type="text"
                  name="profile"
                  placeholder="Add your location"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="bg-cyan-500 py-2 rounded text-white font-bold">
                  Add Profile Information
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
