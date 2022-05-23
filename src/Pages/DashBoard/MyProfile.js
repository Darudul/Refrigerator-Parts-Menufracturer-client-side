import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [profile, setProfile] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/user?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setProfile(data));
    }
  }, [user]);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mt-10">
        <h2 className="mb-10">My Profile Information</h2>
        <div className="overflow-x-auto">
          <table className="table w-80">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{user.displayName}</td>
                <td>{user.email}</td>
              </tr>
            </tbody>
          </table>
          <div className="divider w-3/5 mx-auto">OR</div>
        </div>
      </div>

      <div className="mt-10">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-cyan-500">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Education</span>
              </label>
              <input
                type="text"
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
                placeholder="Add your location"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Linkedln Profile</span>
              </label>
              <input
                type="text"
                placeholder="Add your location"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">
                Add Profile Information
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
