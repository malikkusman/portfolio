import React from "react";
import Navbar from "../components/Navbar";
import Heroimg2 from "../components/Heroimg2";
import Footer from "../components/Footer";
import Work from "../components/Work";
import Pricecard from "../components/Pricecard";

const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="PROJECTS." text="Some of my most Recent Works" />
      <Work />
      <Pricecard />
      <Footer />
    </div>
  );
};

export default Project;
