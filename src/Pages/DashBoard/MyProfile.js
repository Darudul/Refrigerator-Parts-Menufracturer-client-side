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
    fetch("http://localhost:5000/api/users/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(userProfile),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="max-w-7xl mx-auto my-profile">
      <div className="mt-10">
        <h2 className="text-xl font-bold mt-4 mb-4 text-orange-600">
          My Profile Information
        </h2>

        <p>
          <span className="label-text text-xl font-bold"> Name:</span>
          {user?.displayName}
        </p>
        <p>
          <span className="label-text text-xl font-bold">Email: </span>
          {user?.email}
        </p>
      </div>

      <div className="mt-10">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-cyan-500">
          <div className="card-body">
            <form onSubmit={handleUser}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Education:</span>
                </label>
                <input
                  type="text"
                  name="education"
                  placeholder="Educational background"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="Add your location"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Number"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Linkedln Profile</span>
                </label>
                <input
                  type="text"
                  name="profile"
                  placeholder="Add your location"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">
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
