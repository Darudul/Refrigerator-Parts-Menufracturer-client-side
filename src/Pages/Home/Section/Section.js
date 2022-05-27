import React from "react";
import "./Section.css";
const Section = () => {
  return (
    <div className="max-w-7xl mx-auto  mt-16 mb-10 add-style">
      <div>
        <iframe
          className="iframe-width rounded-md mt-10"
          width='500px'
          height="215"
          src="https://www.youtube.com/embed/shaiAK37bf8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className='sub-title'>
        <h2 className="mt-16 font-bold text-teal-400 mb-2">
          DM MENUFRACTURER CO.LTD
        </h2>
        <p className="text-teal-400">Subtitle</p>
        <hr />
        <p>
          All machines and refrigerators. We have made the production line for
          washing machine,air conditioner,refrigerator and dishwasher etc.for
          many overseas famous companies. We have the strong self-development
          ability, advanced equipments and excellent technology. Our products
          series are exported to Europe, America, Middle East,South Asia and
          Africa etc. You are warmly welcome to establish the close business
          retioship with us.
        </p>
      </div>
    </div>
  );
};

export default Section;
