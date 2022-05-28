import React from "react";
import "./CompanyProfile.css";
const CompanyProfile = () => {
  return (
    <div>
      <div
        className="hero"
        style={{
          background: `url(${"https://i.ibb.co/HFBtNdy/plant-production-refrigerators-molding-cast-press-machine-manufacture-plastic-parts-using-polymers-r.jpg"})`,
          backgroundSize: "cover",
          height: "700px",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="mt-10">
            <h1 className="mb-5 text-5xl font-bold">COMPANY PROFILE</h1>
            <p className="mb-5">
              Zhongshan RUIJEEP electrical Co., Ltd is the professional home
              appliance pump and motor manufacturer. Also we are One-stop design
              solution provider for the establishment of new factory for washing
              machine, refrigerator and air conditioner etc.,
            </p>
            <div className="mt-32 grid company-image">
              <div
                className="rounded-lg"
                style={{
                  background: `url(${"https://i.ibb.co/1Rb5MKg/8x8-Campbell-HQ.jpg"})`,
                  backgroundSize: "cover",
                  height: "300px",
                  width: "300px",
                }}
              ></div>
              <div
                className="rounded-lg"
                style={{
                  background: `url(${"https://i.ibb.co/jVHNhV0/20150805204041-google-company-building-corporate.webp"})`,
                  backgroundSize: "cover",
                  height: "300px",
                  width: "300px",
                }}
              ></div>

              <div
                className="rounded-lg"
                style={{
                  background: `url(${"https://i.ibb.co/hdGHQxh/ZHONGSHAN-RUIJEEP-ELECTRICAL-CO-LTD.jpg"})`,
                  backgroundSize: "cover",
                  height: "300px",
                  width: "300px",
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
