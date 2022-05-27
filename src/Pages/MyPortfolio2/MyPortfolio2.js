import React from "react";
import "./MyPortfolio.css";
import { FaHtml5,FaCss3,FaBootstrap,FaJava,FaFigma,FaReact,FaNodeJs } from "react-icons/fa";

const MyPortfolio2 = () => {
  return (
    <div class="bg-white mt-16 mb-16">
      <div className="max-w-7xl mx-auto portfolio ">
        <figure>
          <img
            src="https://i.ibb.co/F3J4cJM/20210508-021016-modified.png"
            width="400px"
            heoght="400px"
            alt="Album"
          />
        </figure>
        <div class="mt-20">
          <h2 class="text-2xl font-bold mb-10">
            Hello, I am a full <br />
            stack web developer.{" "}
          </h2>
          <p className="mb-3">
            Hello I am Darudul Islam a freelancer Web Developer.
          </p>
          <p className="mb-3">
            <span className="font-bold mb-3">Name: </span>Darudul Islam
          </p>
          <p className="mb-3">
            <span className="font-bold mb-3">Email Address: </span>
            darudulislam@gmail.com
          </p>
          <p className="mb-3">
            <span className="font-bold">Educational Background: </span>Faculty
            Of Information Technology (IT){" "}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <p className="mt-16 text-center max-w-7xl mx-auto text-xl font-bold  text-indigo-400">
          My technique and skills
        </p>
        <h2 className="mt-5 text-center max-w-7xl mx-auto text-xl font-bold mb-5">
          My Expertise
        </h2>
        <div className="grids">
          <div className="shadow-lg text-center p-3">
            <p className="ml-28">
              {" "}
              <FaHtml5 className="text-4xl mt-10"></FaHtml5>
            </p>
            <h3 className="mt-4 font-bold">HTML</h3>
            <p className="mt-3">
              I have quite good experience in HTML3 and HTML5
            </p>
          </div>
          <div className="shadow-lg text-center p-3">
            <p className="ml-28">
              <FaCss3 className="text-4xl mt-10"></FaCss3>
            </p>
            <h3 className="mt-4 font-bold">CSS</h3>
            <p className="mt-3">I have quite good experience in CSS</p>
          </div>
          <div className="shadow-lg text-center p-3">
            <p className="ml-28">
              <FaBootstrap className="text-4xl mt-10"></FaBootstrap>{" "}
            </p>

            <h3 className="mt-4 font-bold">BOOTSTRAP</h3>
            <p className="mt-3">I have quite good experience in BOOTSTRAP</p>
          </div>
          <div className="shadow-lg text-center p-3">
            <p className="ml-28">
              <FaJava className="text-4xl mt-10"></FaJava>
            </p>
            <h3 className="mt-4 font-bold">JAVASCRIPT</h3>
            <p className="mt-3">I have quite good experience in JAVASCRIPT</p>
          </div>
          <div className="shadow-lg text-center p-3">
            <p className="ml-28">
              <FaFigma className="text-4xl mt-10"></FaFigma>
            </p>
            <h3 className="mt-4 font-bold">FIGMA</h3>
            <p className="mt-3">I have quite good experience in FIGMA</p>
          </div>
          <div className="shadow-lg text-center p-3">
            <p className="ml-28">
              <FaReact className="text-4xl mt-10"></FaReact>
            </p>
            <h3 className="mt-4 font-bold">REACT</h3>
            <p className="mt-3">I have quite good experience in REACT</p>
          </div>
          <div className="shadow-lg text-center p-3">
            <p className="ml-28">
              <FaNodeJs className="text-4xl mt-10"></FaNodeJs>
            </p>
            <h3 className="mt-4 font-bold">NODE.JS</h3>
            <p className="mt-3">I have quite good experience in NODE.JS</p>
          </div>
          <div className="shadow-lg text-center p-3">
            <p className="ml-28">
              <FaHtml5 className="text-4xl mt-10"></FaHtml5>
            </p>
            <h3 className="mt-4 font-bold">EXPRESS.JS</h3>
            <p className="mt-3">I have quite good experience in EXPRESS.JS</p>
          </div>
          <div className="shadow-lg text-center p-3">
            <p className="ml-28">
              <img src={"https://i.ibb.co/HHMJJj8/mongodb-thumbnail-200x269.png"} width='30px' alt="" />
            </p>
            <h3 className="mt-4 font-bold">MONGODB</h3>
            <p className="mt-3">I have quite good experience in MONGODB</p>
          </div>
        </div>
        <div className="mt-16 ml-5">
          <h3 className="mb-4 text-xl font-bold text-purple-500">
            Live Website Link
          </h3>
          <p>
            {" "}
            <a className="mt-16" href="https://single-doctor-website.web.app">
              https://single-doctor-website.web.app
            </a>
          </p>
          <br />
          <p>
            <a href="https://fruits-warehouse-website.web.app">
              https://fruits-warehouse-website.web.app/
            </a>
          </p>
          <br />
          <p>
            <a href="https://storied-souffle-assignment-9.netlify.app/">
              https://storied-souffle-assignment-9.netlify.app/
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio2;
