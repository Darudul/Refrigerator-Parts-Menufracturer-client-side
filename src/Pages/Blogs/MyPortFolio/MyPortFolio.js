import React from "react";

const MyPortFolio = () => {
  return (
    <div className="max-w-7xl mx-auto ">
      <h2 className="text-2xl text-center mt-5 mb-5 font-bold text-cyan-600">
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
              <td>Know Wordpress,HTML, CSS, JavasCript, React and so on.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPortFolio;
