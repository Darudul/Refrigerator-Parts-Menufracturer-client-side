import React from "react";
import "./CompanyProfile.css";
const CompanyProfile = () => {
  return (
    <div>
      <div
        className="hero"
        style={{
          background: `url(${"https://api.lorem.space/image/fashion?w=1000&h=800"})`,
          backgroundSize: "cover",
          height: "700px",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="mt-10">
            <h1 className="mb-5 text-5xl font-bold">COMPANY PROFILE</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="mt-32 grid company-image">
              <div
                className="rounded-lg"
                style={{
                  background: `url(${"https://api.lorem.space/image/fashion?w=1000&h=800"})`,
                  backgroundSize: "cover",
                  height: "200px",
                  width: "200px",
                }}
              ></div>
              <div
                className="rounded-lg"
                style={{
                  background: `url(${"https://api.lorem.space/image/fashion?w=1000&h=800"})`,
                  backgroundSize: "cover",
                  height: "200px",
                  width: "200px",
                }}
              ></div>
              <div
                className="rounded-lg"
                style={{
                  background: `url(${"https://api.lorem.space/image/fashion?w=1000&h=800"})`,
                  backgroundSize: "cover",
                  height: "200px",
                  width: "200px",
                }}
              ></div>
              <div
                className="rounded-lg"
                style={{
                  background: `url(${"https://api.lorem.space/image/fashion?w=1000&h=800"})`,
                  backgroundSize: "cover",
                  height: "200px",
                  width: "200px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 pb-10 company-profile">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
          <div className="mt-10 max-w-7xl mx-auto mb-10">
            <h1 className="text-xl font-bold">Authentication</h1>
            <p>
              <br />
            </p>
            <p className="ml-8 ">Business Type: Manufacturer/Factory</p> <br />
            <p className="ml-8">
              Main Products: <span>Refrigerator parts</span>
            </p>{" "}
            <br />
            <p className="ml-8">Plant Area: 501~1000 square meters</p>
          </div>
          <div className="mt-10 max-w-7xl mx-auto mb-10">
            <p>Business Range: Electrical & Electronics</p>
            <br />
            <p>Registered Capital: 5000000 RMB</p>
            <br />
            <br />
            <p>Main Markets: Africa, Mid East</p>
          </div>
        </div>
        <div className="container mx-auto mb-10 bg-slate-200 rounded py-5">
          <div className="max-w-2xl business mx-auto">
            <button className="btn btn-error rounded-full px-8 text-white margin">
              Contact Suplier
            </button>
            <button className="btn btn-accent ml-16 rounded-full px-8 text-white">
              Book a factory Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompanyProfile;
