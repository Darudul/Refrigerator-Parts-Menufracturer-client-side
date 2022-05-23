import React from "react";
import Business from "../Business/Business";
import Banner from "./Banner";
import CompanyProfile from "./CompanyProfile/CompanyProfile";
import Section from "./Section/Section";
import Tools from "./Tools/Tools";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Section></Section>
      <Tools></Tools>
      <CompanyProfile></CompanyProfile>
      <Business></Business>
    </div>
  );
};

export default Home;
