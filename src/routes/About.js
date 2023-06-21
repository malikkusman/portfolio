import React from "react";
import Navbar from "../components/Navbar";
import Heroimg2 from "../components/Heroimg2";
import Footer from "../components/Footer";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="About" text="I'm a Passionate Front End Developer" />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
