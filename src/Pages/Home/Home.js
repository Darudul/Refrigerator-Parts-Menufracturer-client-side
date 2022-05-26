import React from "react";
import Business from "../Business/Business";
import AddReview from "../DashBoard/AddReview";
import HomeReview from "../DashBoard/HomeReview";
import Banner from "./Banner";
import CompanyProfile from "./CompanyProfile/CompanyProfile";
import Section from "./Section/Section";
import Tools from "./Tools/Tools";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tools></Tools>

      <Section></Section>
      <CompanyProfile></CompanyProfile>
      <Business></Business>
      <HomeReview></HomeReview>
    </div>
  );
};

export default Home;
