import React from "react";

const MyPortFolio = () => {
  return (
    <div className="max-w-7xl mx-auto bg-purple-100 pb-10 pl-10 pr-10 rounded">
      <h2 className="text-2xl text-center pt-5 mb-5 font-bold text-cyan-600 ">
        About My Portfolio
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full bg-transparent">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email Address</th>
              <th>Educational Background</th>
              <th>List of Technologies and Skills</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Darudul Islam</td>
              <td>darudulislam@gmail.com</td>
              <td>Faculty Of Information Technology (IT)</td>
              <td>Know Wordpress, HTML, CSS, JavasCript, React, Node.Js, Mongodb, Bootstrap, Git-GitHub, Figma, TypeScript.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPortFolio;
