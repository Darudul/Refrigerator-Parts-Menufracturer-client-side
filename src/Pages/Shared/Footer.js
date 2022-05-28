import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaWhatsapp,
  FaLongArrowAltRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content footer-style">
      <div>
        <img src="" alt="" />
        <p className="font-bold">DM MENUFRACTURER CO.LTD</p>
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
        <a className="link link-hover">My Portfolio</a>
        <a className="link link-hover">Dashboard</a>
      </div>
      <div>
        <span className="text-xl font-bold">LEGAL</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>

      <div>
        <p className="text-xl font-bold">Follow Us:</p>
        <a className="text-xl" target="_blank" href="https://www.facebook.com/">
          <FaFacebookF />
        </a>
        <a
          className="text-xl"
          target="_blank"
          href="https://www.instagram.com/"
        >
          <FaInstagramSquare />
        </a>
        <a
          className="text-xl"
          target="_blank"
          href="https://wa.me/qr/67ZYG5WQ5JXWH1"
        >
          <FaWhatsapp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
