import React from "react";
import Navbar from "../components/Navbar";
import Heroimg2 from "../components/Heroimg2";
import Footer from "../components/Footer";
import Card from "../components/Card";

const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="PROJECTS." text="Some of my most Recent Works" />
      <Card />
      <Footer />
    </div>
  );
};

export default Project;
