import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content footer-style">
      <div>
        <img src="" alt="" />
        <p>
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </div>
      <div>
        <span className="text-xl font-bold">SERVICES</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="text-xl font-bold">COMPANY</span>
        <a className="link link-hover">Blogs</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Dashboard</a>
      </div>
      <div>
        <span className="text-xl font-bold">LEGAL</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
