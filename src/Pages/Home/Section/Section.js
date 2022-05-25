import React from "react";

const Section = () => {
  return (
    <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
      <div>
        <iframe
          className=" mt-5"
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/ANxjuXUpItg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div>
        <h2>ZHONGSHAN RUIJEEP ELECTRICAL CO., LTD.</h2>
        <p>Subtitle</p>
        <hr />
        <p>
          machines, refrigerators and air conditijiihujighh. We have made the
          production line for washing machine,air conditioner,refrigerator and
          dishwasher etc.for many overseas famous companies. We have the strong
          self-development ability, advanced equipments and excellent
          technology. Our products series are exported to Europe, America,
          Middle East,South Asia and Africa etc. You are warmly welcome to
          establish the close business retioship with us.
        </p>
      </div>
    </div>
  );
};

export default Section;
